const fetch = require('node-fetch'); // 确保安装了 node-fetch: npm install node-fetch

const API_URL = 'https://jichangpingce.club/zb_system/api.php';
const USERNAME = 'Yexiodi98K';
const PASSWORD = 'Yexiodi98KYexiodi98KYexiodi98K';

async function loginAndPostArticle() {
    try {
        console.log("1. 尝试登录 Z-Blog 获取 Token...");
        // 1. 登录获取 Token
        const loginRes = await fetch(`${API_URL}?mod=member&act=login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                username: USERNAME,
                password: PASSWORD
            })
        });
        
        const loginData = await loginRes.json();
        
        if (loginData.code !== 0 && loginData.code !== 200 && !loginData.data?.token) {
            throw new Error(`登录失败: ${loginData.message}`);
        }
        
        const token = loginData.data.token;
        console.log("✅ 登录成功！获取到 Token:", token.substring(0, 15) + "...");

        // 2. 准备要发布的文章数据（对应截图中的所有字段）
        console.log("2. 准备文章数据并提交发布...");
        const articleData = {
            Title: "测试API自动发布文章", // 标题
            Content: "这是一篇通过 Z-Blog API 自动发布的文章正文。支持 HTML 格式。<br><b>加粗测试</b>", // 正文
            Alias: "api-test-post", // 别名
            CateID: 1, // 分类 ID (对应截图右侧的分类，默认1通常是未分类或第一个分类)
            Tags: "自动化,API测试", // 标签，逗号分割
            Status: 0, // 状态: 0=公开, 1=草稿, 2=审核
            IsTop: 0, // 置顶: 0=无
            IsLock: 0, // 禁止评论: 0=允许, 1=禁止
        };

        // 3. 发布文章请求
        const postRes = await fetch(`${API_URL}?mod=post&act=insert`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // 使用 Bearer Token 鉴权
            },
            body: JSON.stringify(articleData)
        });

        const postData = await postRes.json();
        
        if (postData.code === 0 || postData.code === 200) {
            console.log("🎉 文章发布成功！");
            console.log("文章详情:", postData.data);
        } else {
            console.error("❌ 发布文章失败:", postData.message);
        }

    } catch (error) {
        console.error("请求发生错误:", error.message);
    }
}

loginAndPostArticle();
