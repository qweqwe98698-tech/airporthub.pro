const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 要发布的文章列表
const articlesToPublish = [
    { file: 'article_demo.html', alias: 'clash-verge-rev-tutorial', tags: '客户端教程,Clash,翻墙教程' },
    { file: 'article_netflix.html', alias: 'netflix-proxy-error-fix', tags: '流媒体解锁,Netflix,防封锁' },
    { file: 'article_scam.html', alias: 'cheap-airport-scam-warning', tags: '行业避坑,便宜机场,防骗' }
];

// 提取 HTML 中的核心内容和样式
function extractArticleData(filePath) {
    const html = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
    
    // 提取标题
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : '无标题文章';

    // 提取自定义的 Style 标签（保证排版在 Z-Blog 生效）
    const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
    const styleBlock = styleMatch ? \`<style>\${styleMatch[1]}</style>\` : '';

    // 提取文章正文
    const bodyMatch = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<!-- SEO/);
    let body = bodyMatch ? bodyMatch[1] : '';
    
    // 移除正文里的 <h1>（因为 Z-Blog 默认会显示标题）
    body = body.replace(/<h1>.*?<\/h1>/g, '');

    // 组合最终发送到 Z-Blog 编辑器的内容
    const finalContent = \`\${styleBlock}\n<div class="article-body">\n\${body}\n</div>\`;

    return { title, content: finalContent };
}

(async () => {
    console.log("🚀 启动自动化部署机器人...");
    const browser = await puppeteer.launch({
        headless: false, // 保持开启，让你看到全自动发文的震撼过程
        defaultViewport: null,
        args: ['--start-maximized']
    });
    
    try {
        const page = await browser.newPage();
        
        console.log("🔗 访问 Z-Blog 登录页面...");
        await page.goto('https://jichangpingce.club/zb_system/cmd.php?act=login', { waitUntil: 'networkidle2' });
        
        console.log("⌨️ 自动输入账号和密码...");
        await page.type('#edtUserName', 'Yexiodi98K', { delay: 50 });
        await page.type('#edtPassWord', 'Yexiodi98KYexiodi98KYexiodi98K', { delay: 50 });
        await page.click('#btnPost, .button'); 
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("✅ 登录成功！开始批量推送文章...");

        for (const article of articlesToPublish) {
            console.log(\`\\n=========================================\`);
            console.log(\`📄 正在处理: \${article.file}\`);
            
            const articleData = extractArticleData(article.file);
            console.log(\`📌 提取到标题: \${articleData.title}\`);

            await page.goto('https://jichangpingce.club/zb_system/cmd.php?act=ArticleEdt', { waitUntil: 'networkidle2' });
            
            // 填写标题
            await page.type('#edtTitle', articleData.title, { delay: 30 });
            
            // 填写别名
            const aliasInput = await page.$('#edtAlias');
            if (aliasInput) {
                await page.evaluate(() => document.querySelector('#edtAlias').value = '');
                await aliasInput.type(article.alias, { delay: 30 });
            }
            
            // 填写标签
            const tagInput = await page.$('#edtTag');
            if (tagInput) {
                await page.evaluate(() => document.querySelector('#edtTag').value = '');
                await tagInput.type(article.tags, { delay: 30 });
            }
            
            console.log("📝 正在向富文本编辑器注入带样式的 HTML 正文...");
            // 将带有自定义 CSS 的正文注入编辑器
            await page.evaluate((htmlContent) => {
                try {
                    if (typeof UE !== 'undefined') {
                        UE.getEditor('editor_content').setContent(htmlContent);
                    } else if (typeof window.editor !== 'undefined' && window.editor.setContent) {
                        window.editor.setContent(htmlContent);
                    } else if (typeof editor_api !== 'undefined' && editor_api.editor && editor_api.editor.content) {
                        editor_api.editor.content.set(htmlContent);
                    } else {
                        const txt = document.querySelector('#editor_content') || document.querySelector('#edtContent');
                        if(txt) txt.value = htmlContent;
                    }
                } catch (e) {
                    console.error("编辑器设值失败", e);
                }
            }, articleData.content);
            
            await new Promise(r => setTimeout(r, 2000));
            
            console.log("🚀 提交发布...");
            await page.evaluate(() => {
                const btn = document.querySelector('input[type="submit"]') || 
                            document.querySelector('button[type="submit"]') ||
                            document.querySelector('#btnPost');
                if(btn) btn.click();
            });
            
            await page.waitForNavigation({ waitUntil: 'networkidle2' });
            console.log(\`🎉 [\${articleData.title}] 推送成功！\`);
            
            // 稍微停顿一下，防止被系统防并发机制拦截
            await new Promise(r => setTimeout(r, 3000));
        }
        
        console.log("\\n🏆 所有高转化 SEO 文章已全部部署至 Z-Blog！");
        
    } catch (error) {
        console.error("❌ 自动发布过程中出错:", error);
    } finally {
        console.log("👋 10秒后将自动关闭浏览器...");
        await new Promise(r => setTimeout(r, 10000));
        await browser.close();
    }
})();
