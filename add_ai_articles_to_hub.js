const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'articles.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const newArticles = [
    {
        link: 'ai_tutorial_chatgpt.html',
        icon: 'bx-bot',
        color: '#10b981',
        title: '【2026保姆级教程】国内如何成功注册与使用 ChatGPT (GPT-4o)？附防封号指南',
        desc: 'OpenAI 旗下的现象级 AI 产品，注册和访问需要极度纯净的美国或日本原生 IP。本教程将手把手教你如何绕过手机号验证和区域封锁。',
        read: '4.5w'
    },
    {
        link: 'ai_tutorial_claude.html',
        icon: 'bx-book-open',
        color: '#f59e0b',
        title: '【2026最新】Claude 3.5 Sonnet 保姆级防封号注册教程，写代码神器！',
        desc: '目前对 IP 的封锁力度全网最高，注册极易被秒封号。必须使用绝对纯净的家庭宽带 IP 或顶级 IPLC 专线的原生出口。',
        read: '3.2w'
    },
    {
        link: 'ai_tutorial_midjourney.html',
        icon: 'bx-image-alt',
        color: '#3b82f6',
        title: 'Midjourney v6 新手入门与高级防封使用指南：生成完美画作',
        desc: '全球最顶级的 AI 图像生成工具。无需原生 IP 也能访问，但需要绑定稳定的海外信用卡进行订阅支付以及使用低延迟节点。',
        read: '2.8w'
    },
    {
        link: 'ai_tutorial_perplexity.html',
        icon: 'bx-search-alt',
        color: '#0ea5e9',
        title: 'Perplexity AI 进阶使用技巧：绕过国内 IP 屏蔽，颠覆搜索体验',
        desc: '会直接给出总结好的答案并附上参考链接。目前屏蔽了部分国内与云服务器 IP，推荐使用干净的台湾或新加坡节点。',
        read: '1.9w'
    }
];

let injectedCards = '';
newArticles.forEach(article => {
    injectedCards += `
                    <a href="${article.link}" class="article-card">
                        <div class="article-icon" style="color: ${article.color}; background: ${article.color}15;"><i class='bx ${article.icon}'></i></div>
                        <h3>${article.title}</h3>
                        <p>${article.desc}</p>
                        <div class="article-meta">
                            <span><i class='bx bx-bar-chart'></i> ${article.read} 阅读</span>
                            <span class="article-meta-link" style="color: ${article.color};">阅读全文 <i class='bx bx-right-arrow-alt'></i></span>
                        </div>
                    </a>`;
});

// We want to insert these at the top of the grid.
// Find the <div class="article-grid"> and inject right after it.
html = html.replace('<div class="article-grid">', '<div class="article-grid">' + injectedCards);

fs.writeFileSync(htmlPath, html);
console.log('Successfully added 4 AI tutorial articles to articles.html');
