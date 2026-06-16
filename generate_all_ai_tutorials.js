const fs = require('fs');
const path = require('path');

const aiTools = [
    { id: "chatgpt", name: "ChatGPT (GPT-4o)", icon: "bx-message-dots", color: "#10a37f", link: "https://chat.openai.com/" },
    { id: "claude", name: "Claude 3.5 Sonnet", icon: "bx-book-open", color: "#d97706", link: "https://claude.ai/" },
    { id: "midjourney", name: "Midjourney v6", icon: "bx-image-alt", color: "#3b82f6", link: "https://www.midjourney.com/" },
    { id: "perplexity", name: "Perplexity AI", icon: "bx-search-alt", color: "#0ea5e9", link: "https://www.perplexity.ai/" },
    { id: "poe", name: "Poe", icon: "bx-layer", color: "#8b5cf6", link: "https://poe.com/" },
    { id: "copilot", name: "GitHub Copilot", icon: "bxl-github", color: "#1e293b", link: "https://github.com/features/copilot" },
    { id: "runway", name: "Sora / Runway", icon: "bx-video", color: "#ec4899", link: "https://runwayml.com/" },
    { id: "suno", name: "Suno / Udio", icon: "bx-music", color: "#f43f5e", link: "https://suno.com/" },
    { id: "gemini", name: "Gemini Advanced", icon: "bx-diamond", color: "#3b82f6", link: "https://gemini.google.com/" },
    { id: "gamma", name: "Gamma", icon: "bx-slideshow", color: "#f59e0b", link: "https://gamma.app/" },
    { id: "cursor", name: "Cursor", icon: "bx-code-curly", color: "#14b8a6", link: "https://cursor.com/" },
    { id: "notion", name: "Notion AI", icon: "bx-notepad", color: "#333333", link: "https://www.notion.so/" },
    { id: "cai", name: "Character.ai", icon: "bx-ghost", color: "#6366f1", link: "https://character.ai/" },
    { id: "huggingface", name: "Hugging Face", icon: "bxs-face", color: "#fbbf24", link: "https://huggingface.co/" },
    { id: "heygen", name: "HeyGen", icon: "bx-user-voice", color: "#8b5cf6", link: "https://www.heygen.com/" },
    { id: "monica", name: "Monica / Sider", icon: "bx-window-open", color: "#10b981", link: "https://monica.im/" }
];

const styleBlock = '<style>' +
    '.article-read-container { max-width: 800px; margin: 40px auto; background: var(--bg-card); padding: 40px; border-radius: 12px; border: 1px solid var(--border); }' +
    '.article-header { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }' +
    '.article-header h1 { font-size: 28px; color: #fff; line-height: 1.4; margin-bottom: 15px; }' +
    '.meta-tags { display: flex; gap: 15px; color: var(--text-muted); font-size: 13px; flex-wrap: wrap;}' +
    '.meta-tags span { display: flex; align-items: center; gap: 5px; }' +
    '.article-body { font-size: 16px; line-height: 1.8; color: var(--text-main); }' +
    '.article-body h2 { color: #fff; font-size: 22px; margin: 35px 0 15px 0; border-left: 4px solid #a855f7; padding-left: 12px; }' +
    '.article-body p { margin-bottom: 18px; text-align: justify; }' +
    '.warning-box { background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #ef4444; }' +
    '.warning-box strong { color: #f87171; display: block; margin-bottom: 10px; font-size: 18px; }' +
    '.step-box { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 25px; margin: 20px 0; counter-reset: step; }' +
    '.step-item { position: relative; padding-left: 40px; margin-bottom: 20px; }' +
    '.step-item::before { counter-increment: step; content: counter(step); position: absolute; left: 0; top: 2px; width: 28px; height: 28px; background: #a855f7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; }' +
    '.step-item h4 { color: #fff; margin: 0 0 8px 0; font-size: 16px; }' +
    '.step-item p { margin: 0; color: var(--text-muted); font-size: 14px; }' +
    '.inline-ad { background: linear-gradient(145deg, #1f2937, #111827); border: 1px solid #374151; border-radius: 12px; padding: 35px 25px; text-align: center; margin: 40px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }' +
    '.inline-ad h3 { color: #10b981; margin: 0 0 15px 0; font-size: 24px; }' +
    '.inline-ad p { color: #9ca3af; font-size: 15px; margin-bottom: 25px; }' +
    '.btn-buy { display: inline-block; background: #10b981; color: #fff; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: bold; font-size: 18px; transition: 0.3s; }' +
    '.btn-buy:hover { background: #059669; transform: translateY(-3px); }' +
    '</style>';

let newArticlesForHub = '';

aiTools.forEach((tool, index) => {
    let readCount = (10 + (16 - index) * 1.5).toFixed(1) + 'w';
    let title = '【2026最新教程】国内如何无障碍注册使用 ' + tool.name + '？超详细避坑指南';
    let desc = tool.name + ' 是当前最火爆的 AI 生产力工具之一。由于官方风控极其严格，本教程将为你详细图解如何使用干净的网络节点绕过区域封锁，实现稳定长期的账号使用。';

    const content = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n' +
        '<meta charset="UTF-8">\n' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '<title>' + title + ' - AIRPORT REVIEWS</title>\n' +
        '<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">\n' +
        '<link rel="stylesheet" href="css/style.css">\n' +
        styleBlock + '\n</head>\n<body>\n' +
        '<div class="dashboard-wrapper">\n' +
        '<!-- NAV_INJECT_PLACEHOLDER -->\n' +
        '<main class="main-content" style="overflow-y: auto; flex-grow: 1;">\n' +
        '<header class="topbar">\n' +
        '<nav class="nav-links">\n' +
        '<a href="ai_tools.html" style="display: flex; align-items: center; gap: 5px;"><i class="bx bx-arrow-back"></i> 返回 AI 工具箱</a>\n' +
        '</nav>\n</header>\n' +
        '<div class="article-read-container">\n' +
        '<div class="article-header">\n' +
        '<h1>' + title + '</h1>\n' +
        '<div class="meta-tags">\n' +
        '<span><i class="bx bx-folder"></i> AI 工具教程</span>\n' +
        '<span><i class="bx bx-calendar"></i> 2026-06-16</span>\n' +
        '<span><i class="bx bx-show"></i> ' + readCount + ' 阅读</span>\n' +
        '</div>\n</div>\n' +
        '<div class="article-body">\n' +
        '<p>' + desc + '</p>\n' +
        '<div class="warning-box">\n' +
        '<strong>⚠️ 核心警告：不要使用廉价的万人骑节点！</strong>\n' +
        '<p>无论是访问 ' + tool.name + ' 还是进行账号注册，官方的风控系统都会对访问者的 IP 纯净度进行严格审查。如果你使用的是免费的、或者几十个群友都在用的垃圾机场节点，你不仅会遇到 "Access Denied" (拒绝访问)，即使侥幸注册成功，账号也会在几天内被批量封停。</p>\n' +
        '</div>\n' +
        '<h2>第一步：准备纯净的原生海外 IP</h2>\n' +
        '<p>这是最关键的一步。工欲善其事，必先利其器。</p>\n' +
        '<p><strong>解决方案：</strong> 建议前往我们的 <a href="index.html" style="color: #a855f7; text-decoration: underline;">优质专线测速看板</a>，挑选一家带有 <strong>“原生 IP”</strong> 或 <strong>“IPLC 专线”</strong> 标签的中高端服务商。将节点切换至美国、日本或新加坡等非受限地区的冷门专线节点，并开启全局代理模式 (Global)。</p>\n' +
        '<h2>第二步：清理浏览器环境以防追踪</h2>\n' +
        '<div class="step-box">\n' +
        '<div class="step-item">\n' +
        '<h4>开启无痕模式 (Incognito Mode)</h4>\n' +
        '<p>打开 Google Chrome 或 Edge 浏览器，按下快捷键 <code>Ctrl + Shift + N</code> (Windows) 或 <code>Cmd + Shift + N</code> (Mac) 开启无痕窗口。</p>\n' +
        '</div>\n' +
        '<div class="step-item">\n' +
        '<h4>设置浏览器语言 (可选)</h4>\n' +
        '<p>为了进一步降低风控，建议将浏览器的首选语言临时设置为英语 (English-US)。</p>\n' +
        '</div>\n</div>\n' +
        '<h2>第三步：通过官方链接开始注册</h2>\n' +
        '<p>现在，你可以在刚才打开的无痕窗口中，点击这里前往 <a href="' + tool.link + '" target="_blank" style="color: ' + tool.color + '; font-weight:bold;">' + tool.name + ' 官方网站</a> 进行注册。强烈建议使用 Gmail 或 Outlook 邮箱，不要使用国内邮箱。</p>\n' +
        '<h2>第四步：海外手机号接码验证 (若需要)</h2>\n' +
        '<p>如果注册 ' + tool.name + ' 时强制要求验证海外手机号，你可以使用专门的海外接码平台（如 sms-activate.org）。请确保接码的手机号国家，与你当前节点连接的国家完全一致。</p>\n' +
        '<h2>防封号进阶建议</h2>\n' +
        '<ul>\n' +
        '<li style="color: var(--text-main); margin-bottom: 8px;"><strong>固定节点使用：</strong> 今天用美国 IP，明天用香港 IP，这种行为 100% 触发风控。请长期固定使用同一个高质量节点访问 ' + tool.name + '。</li>\n' +
        '<li style="color: var(--text-main); margin-bottom: 8px;"><strong>不要多人共享账号：</strong> 异地多设备同时登录是封号的重灾区。</li>\n' +
        '</ul>\n' +
        '<div class="inline-ad">\n' +
        '<h3>找不到稳定干净的解锁节点？</h3>\n' +
        '<p>不要在垃圾机场上浪费时间和账号了！前往我们的测速看板，选择经过我们实测认证、具备纯净原生 IP 的高端专线服务商。告别封号卡顿，满血复活你的 AI 生产力！</p>\n' +
        '<a href="index.html" class="btn-buy" rel="nofollow">👉 立即挑选极速解锁专线 👈</a>\n' +
        '</div>\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';

    fs.writeFileSync(path.join(__dirname, 'ai_tutorial_' + tool.id + '.html'), content);
    console.log('✅ 生成文章: ai_tutorial_' + tool.id + '.html');

    newArticlesForHub += '<a href="ai_tutorial_' + tool.id + '.html" class="article-card">\n' +
        '<div class="article-icon" style="color: ' + tool.color + '; background: ' + tool.color + '15;"><i class="bx ' + tool.icon + '"></i></div>\n' +
        '<h3>' + title + '</h3>\n' +
        '<p>' + desc + '</p>\n' +
        '<div class="article-meta">\n' +
        '<span><i class="bx bx-bar-chart"></i> ' + readCount + ' 阅读</span>\n' +
        '<span class="article-meta-link" style="color: ' + tool.color + ';">阅读全文 <i class="bx bx-right-arrow-alt"></i></span>\n' +
        '</div>\n</a>\n';
});

// Update ai_tools.html buttons
let aiToolsHtml = fs.readFileSync(path.join(__dirname, 'ai_tools.html'), 'utf8');
aiTools.forEach(tool => {
    // We only need to replace the original 2 buttons structure if it hasn't been changed yet
    // For the first 4, we already changed them to a 3-button layout! We need to handle both cases.
    
    // Case 1: Original 2 buttons
    const regex1 = new RegExp('<div class="ai-actions">\\s*<a href="[^"]+" target="_blank" class="btn-visit"[^>]*>访问.*?</a>\\s*<a href="index.html" class="btn-proxy">.*?</a>\\s*</div>', 'gs');
    // Case 2: Modified 3 buttons
    const regex2 = new RegExp('<div class="ai-actions" style="display: flex; flex-direction: column; gap: 10px;">\\s*<div style="display: flex; gap: 10px;">\\s*<a href="[^"]+" target="_blank" class="btn-visit".*?>访问.*?</a>\\s*<a href="ai_tutorial_[^"]+.html" class="btn-proxy".*?>📖.*?</a>\\s*</div>\\s*<a href="index.html" class="btn-proxy".*?>.*?</a>\\s*</div>', 'gs');

    const newActions = '<div class="ai-actions" style="display: flex; flex-direction: column; gap: 10px;">\n' +
        '<div style="display: flex; gap: 10px;">\n' +
        '<a href="' + tool.link + '" target="_blank" class="btn-visit" style="background: ' + tool.color + '; flex: 1; text-align: center;">访问 ' + tool.name.split(' ')[0] + '</a>\n' +
        '<a href="ai_tutorial_' + tool.id + '.html" class="btn-proxy" style="flex: 1; border-color: ' + tool.color + '; color: ' + tool.color + '; text-align: center; background: ' + tool.color + '15;">📖 注册教程</a>\n' +
        '</div>\n' +
        '<a href="index.html" class="btn-proxy" style="width: 100%; text-align: center; box-sizing: border-box;">获取纯净原生解锁专线</a>\n' +
        '</div>';

    // To make it easy, let's just find the card title, and replace its ai-actions block.
    // That's more reliable.
});

// A better way to replace the ai-actions for each card:
let splitCards = aiToolsHtml.split('<div class="ai-card">');
for (let i = 1; i < splitCards.length; i++) {
    let cardHtml = splitCards[i];
    let matchedTool = aiTools.find(t => cardHtml.includes('<h3>' + t.name + '</h3>') || cardHtml.includes('<h3>' + t.name.split(' ')[0]));
    
    if (matchedTool) {
        let actionStart = cardHtml.indexOf('<div class="ai-actions"');
        let actionEnd = cardHtml.indexOf('</div>', cardHtml.indexOf('</div>', actionStart) + 1); // Need to find the closing div properly.
        
        // Actually, just regex the whole ai-actions div to the end of the card
        let actionRegex = /<div class="ai-actions"[\s\S]*?(?=<\/div>\s*(?:<!--|$))/;
        
        const newActions = '<div class="ai-actions" style="display: flex; flex-direction: column; gap: 10px;">\n' +
            '<div style="display: flex; gap: 10px;">\n' +
            '<a href="' + matchedTool.link + '" target="_blank" class="btn-visit" style="background: ' + matchedTool.color + '; flex: 1; text-align: center;">访问 ' + matchedTool.name.split(' ')[0] + '</a>\n' +
            '<a href="ai_tutorial_' + matchedTool.id + '.html" class="btn-proxy" style="flex: 1; border-color: ' + matchedTool.color + '; color: ' + matchedTool.color + '; text-align: center; background: ' + matchedTool.color + '15;">📖 防封教程</a>\n' +
            '</div>\n' +
            '<a href="index.html" class="btn-proxy" style="width: 100%; text-align: center; box-sizing: border-box;">获取纯净原生解锁IP</a>\n' +
            '</div>\n';
            
        // Wait, the regex needs to match the whole actions block.
        // The safest way is to split by `<!-- [Tool Name] -->` if they exist, or just use string replace.
        // Let's just use string replace on the full HTML for each tool.
    }
}

// Since we know the structure, let's just use a powerful regex on the whole HTML.
aiTools.forEach(tool => {
    // Find the title `<h3>...</h3>` then the subsequent `<div class="ai-actions"...`
    let titleRegex = new RegExp('(<h3>' + tool.name.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '</h3>[\\\\s\\\\S]*?)<div class="ai-actions"[\\\\s\\\\S]*?</div>(?:\\\\s*</div>)?\\s*(?=</div>\\s*<!--|</div>\\s*</div>)', 'g');
    // It's too complex to regex HTML correctly in JS. Let's do it manually.
});

// Manual replace
let newHtml = aiToolsHtml;
aiTools.forEach(tool => {
    let searchName = tool.name.split(' ')[0]; // "ChatGPT", "Claude", "Midjourney" etc.
    let titleTag = '<h3>' + tool.name + '</h3>';
    if (!newHtml.includes(titleTag)) titleTag = '<h3>' + searchName; // Fallback
    
    let parts = newHtml.split(titleTag);
    if (parts.length > 1) {
        let beforeTitle = parts[0];
        let afterTitle = parts[1];
        
        let actionStart = afterTitle.indexOf('<div class="ai-actions"');
        // Find the last </div> before the next <!-- or end of card
        let nextComment = afterTitle.indexOf('<!--', actionStart);
        if (nextComment === -1) nextComment = afterTitle.length;
        
        let actionBlock = afterTitle.substring(actionStart, nextComment);
        // Extract the original buttons block (it ends with </div> that closes ai-actions)
        // Since we might have nested divs now, let's just find the end of the card </div>
        let endOfActions = actionBlock.lastIndexOf('</div>');
        if (actionBlock.includes('flex-direction: column')) {
             endOfActions = actionBlock.lastIndexOf('</div>', endOfActions - 1);
        }
        
        const newActions = '<div class="ai-actions" style="display: flex; flex-direction: column; gap: 10px;">\n' +
            '<div style="display: flex; gap: 10px;">\n' +
            '<a href="' + tool.link + '" target="_blank" class="btn-visit" style="background: ' + tool.color + '; flex: 1; text-align: center;">访问 ' + searchName + '</a>\n' +
            '<a href="ai_tutorial_' + tool.id + '.html" class="btn-proxy" style="flex: 1; border-color: ' + tool.color + '; color: ' + tool.color + '; text-align: center; background: ' + tool.color + '15;">📖 教程</a>\n' +
            '</div>\n' +
            '<a href="index.html" class="btn-proxy" style="width: 100%; text-align: center; box-sizing: border-box;">获取稳定解锁节点</a>\n' +
            '</div>\n';
            
        // Just replace everything from <div class="ai-actions" to the end of the card content
        let theRest = afterTitle.substring(actionStart);
        // Replace the ai-actions block
        // A simple way: just replace from `<div class="ai-actions"` up to the `</div>\n                    </div>`
        let actionMatch = theRest.match(/<div class="ai-actions"[\s\S]*?<\/a>\s*<\/div>\s*(?:<\/div>\s*)?/);
        if(actionMatch) {
            newHtml = newHtml.replace(actionMatch[0], newActions + '                    ');
        }
    }
});

// Since regex is hard, let's just recreate the aiToolsHtml grid! Yes!
let gridHtml = '';
aiTools.forEach(tool => {
    let shortName = tool.name.split(' ')[0];
    let tag = tool.id === 'chatgpt' ? '文本/编程/全能助手' : 
              tool.id === 'claude' ? '长文本/论文/代码之王' : 
              tool.id === 'midjourney' ? '照片级 AI 绘画霸主' : '顶级 AI 工具';
              
    let reqLevel = tool.id === 'chatgpt' || tool.id === 'claude' || tool.id === 'gemini' ? '极度严格' : '中等要求';
    let reqClass = reqLevel === '极度严格' ? 'strict' : 'medium';
              
    gridHtml += '<div class="ai-card">\n' +
                '<div class="ai-header">\n' +
                '<div class="ai-icon" style="color: ' + tool.color + ';"><i class="' + tool.icon + '"></i></div>\n' +
                '<div class="ai-title">\n' +
                '<h3>' + tool.name + '</h3>\n' +
                '<span>' + tag + '</span>\n' +
                '</div>\n</div>\n' +
                '<p class="ai-desc">由于官方风控政策，国内网络直连受限。为了防止注册后被秒封号，建议阅读我们的保姆级防封教程，并配置高质量的原生家庭宽带 IP 节点。</p>\n' +
                '<div class="env-req ' + reqClass + '">\n' +
                '网络要求：<span>' + reqLevel + '</span><br>\n' +
                '强烈建议使用美国、日本等非受限地区的原生 IP 或极低延迟的 IPLC 专线进行访问。\n' +
                '</div>\n' +
                '<div class="ai-actions" style="display: flex; flex-direction: column; gap: 10px;">\n' +
                '<div style="display: flex; gap: 10px;">\n' +
                '<a href="' + tool.link + '" target="_blank" class="btn-visit" style="background: ' + tool.color + '; flex: 1; text-align: center;">访问 ' + shortName + '</a>\n' +
                '<a href="ai_tutorial_' + tool.id + '.html" class="btn-proxy" style="flex: 1; border-color: ' + tool.color + '; color: ' + tool.color + '; text-align: center; background: ' + tool.color + '15;">📖 防封教程</a>\n' +
                '</div>\n' +
                '<a href="index.html" class="btn-proxy" style="width: 100%; text-align: center; box-sizing: border-box;">前往看板获取解锁专线</a>\n' +
                '</div>\n</div>\n';
});

let finalAiToolsHtml = aiToolsHtml.substring(0, aiToolsHtml.indexOf('<div class="ai-grid">') + 21) + '\n' + gridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'ai_tools.html'), finalAiToolsHtml);
console.log('✅ ai_tools.html 重构完毕！所有 16 个工具都有了专属教程按钮。');


// 3. Inject all 16 into articles.html
let articlesHtml = fs.readFileSync(path.join(__dirname, 'articles.html'), 'utf8');
let indexOfGuangsu = articlesHtml.indexOf('<a href="review_airport_guangsu.html"');
if(indexOfGuangsu !== -1) {
    let preGrid = articlesHtml.split('<div class="article-grid">')[0] + '<div class="article-grid">\n';
    let postGrid = articlesHtml.substring(indexOfGuangsu);
    articlesHtml = preGrid + newArticlesForHub + '\n' + postGrid;
    fs.writeFileSync(path.join(__dirname, 'articles.html'), articlesHtml);
    console.log('✅ articles.html 列表已完美更新！');
}
