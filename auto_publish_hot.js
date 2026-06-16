const fs = require('fs');
const path = require('path');
const axios = require('axios');
const OpenAI = require('openai');
const Parser = require('rss-parser');
const parser = new Parser();

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

if (!DEEPSEEK_API_KEY) {
    console.error("❌ 错误：未找到 DEEPSEEK_API_KEY 环境变量！");
    process.exit(1);
}

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: DEEPSEEK_API_KEY
});

// 获取热搜词列表（聚合微博、知乎、B站热搜，避免全是无关的社会新闻）
async function getHotTopics() {
    let topics = [];
    console.log("正在获取全网各大榜单热搜...");
    try {
        const [wb, zhihu, bili] = await Promise.allSettled([
            axios.get('https://api.vvhan.com/api/hotlist/wbHot', { timeout: 5000 }),
            axios.get('https://api.vvhan.com/api/hotlist/zhihuHot', { timeout: 5000 }),
            axios.get('https://api.vvhan.com/api/hotlist/bili', { timeout: 5000 })
        ]);

        if (wb.status === 'fulfilled' && wb.value.data && wb.value.data.data) {
            topics.push(...wb.value.data.data.slice(0, 15).map(item => "[微博] " + item.title));
        }
        if (zhihu.status === 'fulfilled' && zhihu.value.data && zhihu.value.data.data) {
            topics.push(...zhihu.value.data.data.slice(0, 15).map(item => "[知乎] " + item.title));
        }
        if (bili.status === 'fulfilled' && bili.value.data && bili.value.data.data) {
            topics.push(...bili.value.data.data.slice(0, 15).map(item => "[B站] " + item.title));
        }
    } catch (e) {
        console.log("全网热搜 API 请求出现波动...");
    }

    if (topics.length < 5) {
        console.log("抓取失败或数据过少，使用备用科技热点库...");
        topics = [
            "2026年最新 AI 大模型发布，访问受限怎么办？",
            "近期海外流媒体 Netflix 严打跨区，如何解决？",
            "最新科技圈趋势：远程办公与跨境出海必备工具",
            "TikTok 算法大更新，国内创作者如何突破网络限制？",
            "ChatGPT Plus 大规模封号，如何寻找纯净的原生 IP？",
            "海外重度游戏大作上线，低延迟专线加速器推荐"
        ];
    }
    
    return topics;
}

const historyFile = path.join(__dirname, 'generated_topics.json');
let generatedTopics = [];
if (fs.existsSync(historyFile)) {
    generatedTopics = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
}

async function main() {
    console.log("==== 开始生成今日热点 SEO 文章 ====");
    let allTopics = await getHotTopics();
    
    // 过滤掉已经写过的话题（粗略匹配）
    let availableTopics = allTopics.filter(t => {
        let cleanT = t.replace(/\[.*?\]\s*/, '');
        return !generatedTopics.includes(cleanT);
    });

    if (availableTopics.length === 0) availableTopics = allTopics;

    // 获取内部链接（蜘蛛网）
    const articleDataContent = fs.readFileSync(path.join(__dirname, 'js', 'article_data.js'), 'utf8');
    const regex = /"([^"]+)":\s*\{/g;
    let match;
    let availableAirports = [];
    while ((match = regex.exec(articleDataContent)) !== null) {
        availableAirports.push(match[1]);
    }
    
    // 随机选 4 个机场做内链
    availableAirports = availableAirports.sort(() => 0.5 - Math.random());
    const randomAirports = availableAirports.slice(0, 4);
    
    const internalLinksHtml = randomAirports.map(a => `
                        <a href="review.html?id=${encodeURIComponent(a)}">
                            <i class='bx bx-star'></i>
                            <span>🔥 深度评测：2026年 ${a} 最新节点测速</span>
                        </a>`).join('\n');

    const prompt = `
你是一个顶尖的 SEO 内容编辑和科技领域的资深专家。
你现在的任务是写一篇“蹭热点”的引流文章，用于发布在名为 AirportHub 的科学上网指南网站上。

【当前全网热搜榜单】：
${availableTopics.join('\n')}

你的核心任务：
1. 【精准选材】：请从上面的热搜榜单中，**只挑选 1 个最具有“科技、数码、AI、外网、海外流媒体、影视、游戏或职场出海”属性的话题**。绝对不要选择“牙痛、车祸、明星出轨、纯社会八卦”这种毫无关联的垃圾热搜！如果不小心选到了垃圾热搜，就算强行写科技也会显得很蠢。如果榜单里全是社会新闻，请你直接自己凭空捏造一个“2026最新科技/AI圈的重磅突发新闻”作为热点。

选定热点后，请围绕它写一篇文章，要求如下：
1. 标题：必须极具吸引力，包含你选定的热点词汇，同时巧妙结合“海外访问”、“网络加速”或“翻墙指南”等痛点。
2. 导语段落：直接切入你选定的这个热点事件，深度分析它，然后指出获取此类海外资讯或服务的痛点（比如：很多人无法第一时间看到外网新闻、无法流畅使用相关AI工具、看海外流媒体卡顿等）。
3. 差异化正文（非常重要！不少于 1000 字）：深度分析这个热点，字数要充实，自然过渡到需要一个强大的网络加速工具（机场）。
4. 机场推荐：在正文中顺理成章地推荐至少 2 家优质机场（请从这几个名字里随便挑2个：${randomAirports.slice(0,2).join("、")}），并用 100-200 字给每个机场写一段有理有据的夸赞。
5. 格式要求：直接输出 HTML 代码的内部结构（比如 <h1>, <h2>, <p>），千万不要输出 <html>, <head>, <body> 标签，也不要输出 markdown 的 \`\`\`html 代码块符号，直接输出纯净的标签代码！不要在结尾生成多余的内部链接列表，我会自己拼接。
注意：不要在正文中输出你选了哪个词的分析过程，直接开始输出文章的 HTML 内容。
`;

    console.log("正在请求 DeepSeek API 撰写长文，这可能需要 1-2 分钟...");
    
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "deepseek-chat", // DeepSeek V3/V2
            temperature: 0.7
        });

        let content = completion.choices[0].message.content;
        
        // Remove markdown block backticks if present
        content = content.replace(/```html/g, '').replace(/```/g, '').trim();

        const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/);
        const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '') : `海外前沿资讯获取与高速网络加速指南`;
        const cleanContent = content.replace(/<h1[^>]*>.*?<\/h1>/, ''); // Remove h1 from body to put it in template

        const timestamp = Date.now();
        const dateStr = new Date().toISOString().split('T')[0];
        const filename = `hot_${timestamp}.html`;

        // Load the HTML wrapper template (Using article_demo.html as a base)
        const templatePath = path.join(__dirname, 'article_demo.html');
        let finalHtml = fs.readFileSync(templatePath, 'utf8');
        
        // Replace Title
        finalHtml = finalHtml.replace(/<title>.*?<\/title>/, `<title>${title} - AirportHub 官网</title>`);
        finalHtml = finalHtml.replace(/<div class="article-header">\s*<h1>.*?<\/h1>/, `<div class="article-header">\n                    <h1>${title}</h1>`);
        
        // Replace Content (Replace everything inside <div class="article-body"> up to the spider-web div)
        finalHtml = finalHtml.replace(/<div class="article-body">[\s\S]*?<!-- SEO 内部蜘蛛网系统 -->/, `<div class="article-body">\n${cleanContent}\n                </div>\n\n                <!-- SEO 内部蜘蛛网系统 -->`);
        
        // Replace Spider Web Links
        finalHtml = finalHtml.replace(/<div class="spider-web-grid">[\s\S]*?<\/div>\s*<\/div>/, `<div class="spider-web-grid">\n${internalLinksHtml}\n                    </div>\n                </div>`);
        
        // Ensure Domain Branding
        finalHtml = finalHtml.replace(/AIRPORT REVIEWS/g, "AirportHub");

        fs.writeFileSync(path.join(__dirname, filename), finalHtml, 'utf8');
        console.log(`✅ 成功生成 HTML 文章文件：${filename}`);

        // Update articles.html to inject the card at the top of the "热点资讯" or first category
        let articlesHtml = fs.readFileSync(path.join(__dirname, 'articles.html'), 'utf8');
        const shortDesc = cleanContent.replace(/<[^>]+>/g, '').substring(0, 90) + "...";
        
        const newCard = `
        <a href="${filename}" class="article-card">
            <div class="article-category" style="background: rgba(244, 63, 94, 0.2); color: #f43f5e;">全网热点</div>
            <h3 class="article-title">${title}</h3>
            <p class="article-desc">${shortDesc}</p>
            <div class="article-meta">
                <span><i class='bx bx-calendar'></i> ${dateStr}</span>
                <span class="article-meta-link" style="color: #64748b;">阅读全文 <i class='bx bx-right-arrow-alt'></i></span>
            </div>
        </a>`;
        
        // Insert right after the first <div class="article-grid">
        const targetRegex = /(<div class="article-grid">)/;
        articlesHtml = articlesHtml.replace(targetRegex, `$1\n${newCard}`);
        
        fs.writeFileSync(path.join(__dirname, 'articles.html'), articlesHtml, 'utf8');
        console.log(`✅ 已将新文章挂载至 articles.html 列表`);

        // We can't strictly track generated topics since AI picked it, but we can save the title it generated
        generatedTopics.push(title);
        fs.writeFileSync(historyFile, JSON.stringify(generatedTopics));

    } catch (err) {
        console.error("❌ 生成失败：", err.response ? err.response.data : err.message);
        process.exit(1);
    }
}

main();
