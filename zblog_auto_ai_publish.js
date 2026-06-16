const axios = require('axios');
const OpenAI = require('openai');
const Parser = require('rss-parser');

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const ZBLOG_USERNAME = process.env.ZBLOG_USERNAME;
const ZBLOG_PASSWORD = process.env.ZBLOG_PASSWORD;
// 请确保此 URL 与您的网站 API 地址完全一致
const ZBLOG_API_URL = 'https://jichangpingce.club/zb_system/api.php';

if (!DEEPSEEK_API_KEY || !ZBLOG_USERNAME || !ZBLOG_PASSWORD) {
    console.error("❌ 错误：缺少必要的环境变量 (DEEPSEEK_API_KEY, ZBLOG_USERNAME, ZBLOG_PASSWORD)！");
    process.exit(1);
}

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: DEEPSEEK_API_KEY
});

const parser = new Parser();

// 获取热点词汇
async function getHotTopic() {
    let topics = [];
    try {
        console.log("正在获取微博热搜...");
        const res = await axios.get('https://api.vvhan.com/api/hotlist/wbHot', { timeout: 5000 });
        if (res.data && res.data.success && res.data.data) {
            topics = res.data.data.slice(0, 15).map(item => item.title);
        }
    } catch (e) {
        console.log("微博热搜 API 失败，尝试抓取 V2EX 热点...");
        try {
            const feed = await parser.parseURL('https://www.v2ex.com/index.xml');
            topics = feed.items.slice(0, 15).map(item => item.title);
        } catch(err) {
            console.log("RSS 抓取失败，使用备用热点...");
        }
    }

    if (topics.length === 0) {
        topics = [
            "2026年最新 AI 大模型发布，访问受限怎么办？",
            "近期海外流媒体 Netflix 严打跨区，如何解决？",
            "最新科技圈趋势：远程办公与跨境出海必备工具",
            "TikTok 算法大更新，国内创作者如何突破网络限制？",
            "ChatGPT 大规模封号，如何寻找纯净的原生 IP？",
            "海外重度游戏大作上线，低延迟专线加速器推荐"
        ];
    }
    
    // 随机选择一个热点
    topics = topics.sort(() => 0.5 - Math.random());
    return topics[0];
}

// 登录 Z-Blog 提取 Token
async function loginZBlog() {
    console.log("1. 尝试登录 Z-Blog 获取 Token...");
    const loginRes = await axios.post(`${ZBLOG_API_URL}?mod=member&act=login`, 
        new URLSearchParams({
            username: ZBLOG_USERNAME,
            password: ZBLOG_PASSWORD
        }).toString(),
        {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
    );
    
    const loginData = loginRes.data;
    if (loginData.code !== 0 && loginData.code !== 200 && !loginData.data?.token) {
        throw new Error(`登录失败: ${loginData.message}`);
    }
    
    console.log("✅ 登录成功！获取到 Token: " + loginData.data.token.substring(0, 15) + "...");
    return loginData.data.token;
}

// 通过 API 发布文章
async function publishToZBlog(token, articleData) {
    console.log("3. 准备向 Z-Blog 发布文章...");
    const postRes = await axios.post(`${ZBLOG_API_URL}?mod=post&act=insert`, articleData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const postData = postRes.data;
    if (postData.code === 0 || postData.code === 200) {
        console.log("🎉 文章发布成功！");
        console.log(`标题: ${articleData.Title}`);
        console.log(`别名: ${articleData.Alias}`);
    } else {
        console.error("❌ 发布文章失败:", postData.message);
        throw new Error(postData.message);
    }
}

async function main() {
    console.log("==== 开始 AI 自动创作并发布 Z-Blog 流程 ====");
    try {
        const topic = await getHotTopic();
        console.log(`✅ 选定今日热点：${topic}`);

        const prompt = `
你是一个顶尖的 SEO 内容编辑和网络加速领域的资深专家。
你现在的任务是写一篇“蹭热点”的引流长文，用于发布在名为“机场评测俱乐部”的科普网站上。

【今日突发热点/搜索词】：${topic}

要求：
1. 标题：必须极具吸引力，包含热点词汇，同时巧妙结合“海外访问”、“网络加速”或“翻墙指南”等痛点。请以 <h1>标题内容</h1> 的格式放在文章最开头。
2. 导语：直接切入这个热点事件，分析事件背后的资讯获取痛点（比如无法访问外网、流媒体卡顿等）。
3. 深度正文（非常重要！不少于 1000 字）：深度分析这个热点，字数要充实，知识性要强，随后自然过渡到需要一个强大的网络加速工具（机场专线）。
4. 机场推荐：在正文中顺理成章地推荐优质机场，强调高速稳定、解锁流媒体和AI。
5. 排版格式：直接输出 HTML 代码的内部结构（使用 <h2>, <h3>, <p>, <strong> 等标签），千万不要输出 <html>, <head>, <body> 标签，也不要输出 markdown 的 \`\`\`html 代码块符号，直接输出纯净的标签代码！
`;

        console.log("2. 正在请求 DeepSeek API 撰写长文，这可能需要 1-2 分钟...");
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "deepseek-chat",
            temperature: 0.7
        });

        let content = completion.choices[0].message.content;
        
        // 净化 Markdown 标记
        content = content.replace(/```html/g, '').replace(/```/g, '').trim();

        // 提取标题并从正文中移除 <h1>（因为 ZBlog 会自动渲染标题）
        const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
        const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '') : `${topic}：海外前沿资讯获取指南`;
        const cleanContent = content.replace(/<h1[^>]*>.*?<\/h1>/i, '').trim();

        // 获取当前日期时间生成唯一的文章别名 (Alias)
        const timestamp = Date.now();
        const alias = `hot-news-${timestamp}`;

        // 构造 Z-Blog 文章数据
        const articleData = {
            Title: title,
            Content: cleanContent,
            Alias: alias,
            CateID: 1, // TODO: 1 是默认分类ID，如果你有专门的新闻分类，可以改成对应的 ID
            Tags: "热点资讯,网络加速", // 文章标签
            Status: 0, // 0=公开
            IsTop: 0,  // 0=不置顶
            IsLock: 0, // 0=允许评论
        };

        // 登录系统并拿到 Token
        const token = await loginZBlog();
        
        // 调用发布接口
        await publishToZBlog(token, articleData);

        console.log("==== 🏆 流程执行完毕，全部成功！ ====");

    } catch (err) {
        console.error("❌ 流程发生错误:", err.response ? err.response.data : err.message);
        process.exit(1);
    }
}

main();
