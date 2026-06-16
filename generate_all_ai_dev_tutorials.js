const fs = require('fs');
const path = require('path');

const devTools = [
    { id: "antigravity", name: "Antigravity", icon: "bx-rocket", color: "#4285f4", link: "https://deepmind.google/" },
    { id: "cursor_dev", name: "Cursor", icon: "bx-terminal", color: "#333333", link: "https://cursor.sh/" },
    { id: "claude_dev", name: "Claude 3.5 Sonnet", icon: "bx-brain", color: "#d97757", link: "https://claude.ai/" },
    { id: "copilot_dev", name: "GitHub Copilot", icon: "bxl-github", color: "#24292e", link: "https://github.com/features/copilot" },
    { id: "v0", name: "v0.dev", icon: "bx-layout", color: "#000000", link: "https://v0.dev/" },
    { id: "bolt", name: "Bolt.new", icon: "bx-bolt-circle", color: "#facc15", link: "https://bolt.new/" },
    { id: "codeium", name: "Codeium", icon: "bx-code", color: "#09b6a2", link: "https://codeium.com/" },
    { id: "supermaven", name: "Supermaven", icon: "bx-meteor", color: "#fbbf24", link: "https://supermaven.com/" },
    { id: "replit", name: "Replit", icon: "bx-cloud", color: "#f26207", link: "https://replit.com/" },
    { id: "devin", name: "Devin / OpenDevin", icon: "bx-bot", color: "#333333", link: "https://github.com/OpenDevin/OpenDevin" },
    { id: "windsurf", name: "Windsurf", icon: "bx-water", color: "#0ea5e9", link: "https://codeium.com/windsurf" },
    { id: "tabnine", name: "Tabnine", icon: "bx-brain", color: "#6366f1", link: "https://www.tabnine.com/" },
    { id: "amazon_q", name: "Amazon Q", icon: "bxl-aws", color: "#ff9900", link: "https://aws.amazon.com/q/developer/" },
    { id: "lovable", name: "Lovable", icon: "bx-heart", color: "#ec4899", link: "https://lovable.dev/" },
    { id: "phind", name: "Phind", icon: "bx-search-alt", color: "#10b981", link: "https://www.phind.com/" },
    { id: "perplexity_pro", name: "Perplexity Pro", icon: "bx-compass", color: "#0ea5e9", link: "https://www.perplexity.ai/" },
    { id: "codium", name: "CodiumAI (Qodo)", icon: "bx-check-shield", color: "#8b5cf6", link: "https://www.qodo.ai/" },
    { id: "cody", name: "Sourcegraph Cody", icon: "bx-code-curly", color: "#f43f5e", link: "https://sourcegraph.com/cody" }
];

const styleBlock = '<style>' +
    '.article-read-container { max-width: 800px; margin: 40px auto; background: var(--bg-card); padding: 40px; border-radius: 12px; border: 1px solid var(--border); }' +
    '.article-header { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }' +
    '.article-header h1 { font-size: 28px; color: #fff; line-height: 1.4; margin-bottom: 15px; }' +
    '.meta-tags { display: flex; gap: 15px; color: var(--text-muted); font-size: 13px; flex-wrap: wrap;}' +
    '.meta-tags span { display: flex; align-items: center; gap: 5px; }' +
    '.article-body { font-size: 16px; line-height: 1.8; color: var(--text-main); }' +
    '.article-body h2 { color: #fff; font-size: 22px; margin: 40px 0 20px 0; border-left: 4px solid #a855f7; padding-left: 12px; background: linear-gradient(90deg, rgba(168,85,247,0.1) 0%, transparent 100%); padding-top: 5px; padding-bottom: 5px;}' +
    '.article-body p { margin-bottom: 18px; text-align: justify; }' +
    '.warning-box { background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #ef4444; }' +
    '.warning-box strong { color: #f87171; display: block; margin-bottom: 10px; font-size: 18px; }' +
    '.info-box { background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #3b82f6; }' +
    '.step-box { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 25px; margin: 20px 0; counter-reset: step; }' +
    '.step-item { position: relative; padding-left: 40px; margin-bottom: 25px; }' +
    '.step-item:last-child { margin-bottom: 0; }' +
    '.step-item::before { counter-increment: step; content: counter(step); position: absolute; left: 0; top: 2px; width: 28px; height: 28px; background: #a855f7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; }' +
    '.step-item h4 { color: #fff; margin: 0 0 8px 0; font-size: 18px; }' +
    '.step-item p { margin: 0; color: var(--text-muted); font-size: 15px; line-height: 1.6; }' +
    '.faq-item { background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 3px solid #6366f1; }' +
    '.faq-item h4 { color: #818cf8; margin: 0 0 10px 0; font-size: 16px; }' +
    '.faq-item p { margin: 0; color: #cbd5e1; font-size: 14px; }' +
    '.inline-ad { background: linear-gradient(145deg, #1f2937, #111827); border: 1px solid #374151; border-radius: 12px; padding: 35px 25px; text-align: center; margin: 40px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }' +
    '.inline-ad h3 { color: #10b981; margin: 0 0 15px 0; font-size: 26px; }' +
    '.inline-ad p { color: #9ca3af; font-size: 15px; margin-bottom: 25px; }' +
    '.btn-buy { display: inline-block; background: #10b981; color: #fff; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: bold; font-size: 18px; transition: 0.3s; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); }' +
    '.btn-buy:hover { background: #059669; transform: translateY(-3px); box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5); }' +
    '</style>';

let newArticlesForHub = '';

devTools.forEach((tool, index) => {
    let readCount = (18 + (18 - index) * 2.8).toFixed(1) + 'w';
    let title = '【程序员必看】国内如何无延迟满血运行 ' + tool.name + '？IDE 配置与网络优化全攻略';
    
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
        '<a href="ai_dev.html" style="display: flex; align-items: center; gap: 5px;"><i class="bx bx-arrow-back"></i> 返回 AI 编程开发工具</a>\n' +
        '</nav>\n</header>\n' +
        '<div class="article-read-container">\n' +
        '<div class="article-header">\n' +
        '<h1>' + title + '</h1>\n' +
        '<div class="meta-tags">\n' +
        '<span><i class="bx bx-code-alt"></i> 极客与开发者专区</span>\n' +
        '<span><i class="bx bx-calendar"></i> 2026-06-16 重磅更新</span>\n' +
        '<span><i class="bx bx-show"></i> ' + readCount + ' 次深度阅读</span>\n' +
        '<span><i class="bx bx-time"></i> 预计阅读时间：15 分钟</span>\n' +
        '</div>\n</div>\n' +
        '<div class="article-body">\n' +
        '<p>对于程序员来说，2026 年写代码的方式已经发生了天翻地覆的变化。像 <strong>' + tool.name + '</strong> 这样的顶级 AI 编程辅助工具，不再仅仅是“帮你补全括号”的小插件，而是能直接理解整个微服务架构、根据需求文档一次性生成数百行完美运行代码的“结对编程伙伴”。</p>\n' +
        '<p>但是，国内开发者在享受这种 10 倍速开发效率时，往往会面临一个极其痛苦的瓶颈：<strong>网络延迟与 IDE 断连</strong>。</p>\n' +
        '<p>写代码讲究的是“心流”。如果每次敲下一个空格，AI 补全都要转圈圈思考 2 秒钟，或者在请求构建应用时突然报出一个 <code>API Connection Refused</code> 的网络错误，这种打断感足以逼疯任何一个优秀的工程师。本篇万字长文，将为你彻底解决 ' + tool.name + ' 在国内无法流畅使用的网络难题。</p>\n' +

        '<h2>一、为什么 ' + tool.name + ' 用起来这么卡？痛点深度解剖</h2>\n' +
        '<p>很多开发者在浏览器看网页时不觉得网络卡，但一用 AI IDE 就卡得怀疑人生，这是因为浏览器网页和 IDE 内置 AI 插件的网络通讯机制完全不同：</p>\n' +
        '<ul>\n' +
        '<li><strong>毫秒级延迟要求 (Ultra-low Latency)：</strong> 代码补全是实时的。每次你的光标停顿超过 300 毫秒，IDE 就会向海外的 AI 服务器发送当前上下文的代码片段。如果你使用的机场节点 Ping 值高达 200ms 以上，加上 AI 模型的推理时间，补全结果返回时你早就自己把代码敲完了，AI 完全变成了累赘。</li>\n' +
        '<li><strong>巨量上下文传输限制 (High Bandwidth for Context)：</strong> 像 ' + tool.name + ' 这种具备高级感知能力的工具，在初次启动或进行大型重构时，会将整个工程目录的核心结构进行 Embeddings 向量化并上传。劣质节点限制了单线程上传速度，直接导致分析过程超时 (Timeout)。</li>\n' +
        '<li><strong>严格的 IDE 代理穿透拦截：</strong> 很多开发者开启了 Clash 等软件，但发现终端 (Terminal) 和 IDE 插件依然无法走代理，这是由于部分 IDE 插件硬编码了证书验证，导致中间人代理失败，或者需要极其复杂的环境变量配置。</li>\n' +
        '</ul>\n' +

        '<div class="warning-box">\n' +
        '<strong>效率警报：不要让垃圾网络毁了你的生产力！</strong>\n' +
        '<p>时间就是金钱，尤其对程序员而言。如果你每月花几十美金订阅了顶级的 AI 编程服务，却舍不得花钱配置一条 <strong>IPLC 内网专线</strong>，导致写代码天天便秘，这是极其本末倒置的。普通的中转机场根本无法满足现代 AI 编程的毫秒级握手需求。</p>\n' +
        '</div>\n' +

        '<h2>二、第一步：基建升级 —— 获取低延迟的顶级专线节点</h2>\n' +
        '<p>要彻底消灭转圈圈，你需要一条丢包率为 0%、且直连海外 AI 骨干网的物理专线（如 IPLC 或 IEPL）。</p>\n' +
        '<div class="info-box">\n' +
        '<strong>极客专属配置指南：</strong>\n' +
        '<p>1. 立即前往我们的 <a href="index.html" style="color: #3b82f6; text-decoration: underline;">开发者专属测速看板</a>。</p>\n' +
        '<p>2. 筛选带有 <strong>“IPLC 专线”</strong> 和 <strong>“极低延迟 (Ping < 50ms)”</strong> 标签的高端服务商。</p>\n' +
        '<p>3. 强烈推荐选择 <strong>香港 (HK) 或日本 (JP)</strong> 的顶级节点。这两个地区的机房与 OpenAI / Anthropic 的亚太边缘计算节点距离最近，能够实现物理级别的极速响应。</p>\n' +
        '</div>\n' +

        '<h2>三、第二步：IDE 与系统的全局代理终极配置法</h2>\n' +
        '<p>有了顶级线路，接下来的核心是如何让 ' + tool.name + ' 的所有流量都完美、无痕地走你的专线。传统的系统代理对很多编程工具是无效的，请采用以下方案（二选一）：</p>\n' +
        '<div class="step-box">\n' +
        '<div class="step-item">\n' +
        '<h4>方案 A：TUN 虚拟网卡模式 (强烈推荐)</h4>\n' +
        '<p>无论你使用的是 Clash Verge Rev 还是 v2rayN，请务必在设置中开启 <strong>TUN 模式 (虚拟网卡接管)</strong>。开启后，代理软件会在系统底层创建一个虚拟网卡，强制接管所有软件（包括 VSCode 插件、Docker 容器、系统终端的 curl/git 请求）的流量。这是解决 99% 的 IDE 无法联网问题的终极杀招。</p>\n' +
        '</div>\n' +
        '<div class="step-item">\n' +
        '<h4>方案 B：环境变量与 IDE 配置强制走代理</h4>\n' +
        '<p>如果你由于系统权限问题无法开启 TUN 模式，你必须手动设置环境变量。在 Mac/Linux 的终端中执行 <code>export http_proxy=http://127.0.0.1:端口号</code> 和 <code>export https_proxy=http://127.0.0.1:端口号</code>。同时，在你的 IDE (如 VSCode / Cursor) 的设置 JSON 中，搜索 proxy，将代理地址硬编码填入，并关闭 <code>Http: Proxy Strict SSL</code>。</p>\n' +
        '</div>\n' +
        '</div>\n' +

        '<h2>四、防封号与隐私安全声明 (针对企业开发者)</h2>\n' +
        '<p>很多在互联网大厂或对代码安全敏感的企业中工作的开发者，非常担心使用云端 AI 编程工具会导致商业机密源码泄露。部分劣质节点存在中间人攻击 (MITM) 抓包的风险。</p>\n' +
        '<p><strong>我们的建议：</strong></p>\n' +
        '<ul>\n' +
        '<li style="color: var(--text-main); margin-bottom: 8px;">务必使用经过 TLS 加密隧道的正规高端专线，确保从你的电脑到海外节点的数据包无法被国内路由解析。</li>\n' +
        '<li style="color: var(--text-main); margin-bottom: 8px;">在 ' + tool.name + ' 的设置面板中，找到 Privacy (隐私) 选项，勾选 <code>Opt-out of data training</code>。这意味着你明确拒绝平台使用你的私有代码来训练他们未来的 AI 模型。</li>\n' +
        '</ul>\n' +

        '<h2>五、程序员高频报错 FAQ</h2>\n' +
        '<div class="faq-item">\n' +
        '<h4>Q: 报错 "certificate has expired" 或 "SSL certificate problem" 怎么办？</h4>\n' +
        '<p>A: 典型的中间人劫持或证书链断裂。通常是因为代理软件的本地证书未被系统或 IDE 信任（尤其是在 Node.js 或 Python 环境中）。开启 TUN 模式可以缓解，或者在环境中设置 <code>NODE_TLS_REJECT_UNAUTHORIZED=0</code>（仅做临时测试用，不安全）。</p>\n' +
        '</div>\n' +
        '<div class="faq-item">\n' +
        '<h4>Q: 为什么网页端能用，但 IDE 插件里一直卡在 Logging in... (登录中)？</h4>\n' +
        '<p>A: 浏览器走了系统代理，但你的 IDE 没走！IDE 发起的 OAuth2.0 登录回调请求被墙拦截了。请参考本文第三步，开启代理软件的 TUN 模式后彻底重启 IDE。</p>\n' +
        '</div>\n' +

        '<div class="inline-ad">\n' +
        '<h3>💻 消除编码顿挫感，重塑心流体验</h3>\n' +
        '<p>让代码补全做到像敲击本地键盘一样顺滑！不要让高延迟的网络摧毁你价值上万月薪的开发效率。立刻前往我们的测速中心，选购专为高端开发者打造的低延迟 IPLC 专线，体验真正 10 倍速的 AI 编程快感！</p>\n' +
        '<a href="index.html" class="btn-buy" rel="nofollow">👉 立即获取开发者专属 IPLC 极速节点 👈</a>\n' +
        '</div>\n' +
        '<p style="text-align:center; color:var(--text-muted); font-size:14px; margin-top:50px;"><em>免责声明：本教程仅供技术研究与学习交流。请合法合规使用网络工具，在企业内网使用此类工具前请务必确认符合贵司的信息安全管理条例。</em></p>\n' +
        '</div>\n</div>\n</main>\n</div>\n</body>\n</html>';

    fs.writeFileSync(path.join(__dirname, 'tutorial_dev_' + tool.id + '.html'), content);
    console.log('✅ 生成开发工具干货文章: tutorial_dev_' + tool.id + '.html');

    newArticlesForHub += '<a href="tutorial_dev_' + tool.id + '.html" class="article-card">\n' +
        '<div class="article-icon" style="color: ' + tool.color + '; background: ' + tool.color + '15;"><i class="' + tool.icon + '"></i></div>\n' +
        '<h3>' + title + '</h3>\n' +
        '<p>很多开发者在享受 AI 编程带来的效率飙升时，往往被网络延迟与 IDE 断连折磨得痛不欲生。本文为你深度揭秘并彻底解决网络瓶颈。</p>\n' +
        '<div class="article-meta">\n' +
        '<span><i class="bx bx-bar-chart"></i> ' + readCount + ' 阅读</span>\n' +
        '<span class="article-meta-link" style="color: ' + tool.color + ';">阅读实战攻略 <i class="bx bx-right-arrow-alt"></i></span>\n' +
        '</div>\n</a>\n';
});

// Update ai_dev.html buttons
let aiDevHtml = fs.readFileSync(path.join(__dirname, 'ai_dev.html'), 'utf8');

// The original actions HTML looks like:
// <div class="ai-dev-actions">
//      <a href="..." target="_blank" class="btn-visit" style="...">...</a>
//      <a href="index.html" class="btn-proxy"...>...</a>
// </div>

// We need to recreate the ai_dev_grid entirely to ensure perfection, just like we did for ai_tools.html
let devGridHtml = '';
devTools.forEach(tool => {
    let shortName = tool.name.split(' ')[0];
    if (shortName === 'GitHub') shortName = 'Copilot';
    if (shortName === 'Claude') shortName = 'Claude';
    if (shortName === 'Sora') shortName = 'Runway';
    if (shortName === 'Devin') shortName = 'Devin';
    if (shortName === 'Sourcegraph') shortName = 'Cody';
    
    let tag = "顶级 AI 开发工具";
    let desc = "程序员 10 倍开发效率的秘密武器。国内网络环境下极易出现代码补全转圈圈、API 无法连接等致命问题，强烈建议阅读我们的网络优化配置攻略。";
    let reqLevel = "极低延迟专线";
    let reqClass = "strict";
    
    if (tool.id === "cursor_dev" || tool.id === "windsurf" || tool.id === "supermaven") {
        tag = "最强 AI IDE";
        desc = "颠覆传统的代码编写方式。它的毫秒级补全体验完全依赖于极低的网络延迟，如果你用的梯子 Ping 值超过 100ms，请立刻弃用并更换我们的推荐节点。";
    }
    
    devGridHtml += '<div class="ai-dev-card">\n' +
                '<div class="ai-dev-header">\n' +
                '<div class="ai-dev-icon" style="color: ' + tool.color + '; border: 1px solid rgba(255,255,255,0.1);"><i class="' + tool.icon + '"></i></div>\n' +
                '<div class="ai-dev-title">\n' +
                '<h3>' + tool.name + '</h3>\n' +
                '<span>' + tag + '</span>\n' +
                '</div>\n</div>\n' +
                '<p class="ai-dev-desc">' + desc + '</p>\n' +
                '<div class="env-req ' + reqClass + '">\n' +
                '网络要求：<span>' + reqLevel + '</span><br>\n' +
                '为了消除代码补全的顿挫感，必须配置支持 TUN 虚拟网卡模式的 IPLC 内网专线，确保 IDE 所有流量无缝翻墙。\n' +
                '</div>\n' +
                '<div class="ai-dev-actions" style="display: flex; flex-direction: column; gap: 10px;">\n' +
                '<div style="display: flex; gap: 10px;">\n' +
                '<a href="' + tool.link + '" target="_blank" class="btn-visit" style="background: ' + tool.color + '; flex: 1; text-align: center; color: #fff;">获取 ' + shortName + '</a>\n' +
                '<a href="tutorial_dev_' + tool.id + '.html" class="btn-proxy" style="flex: 1; border-color: ' + tool.color + '; color: ' + tool.color + '; text-align: center; background: ' + tool.color + '15;">📖 优化攻略</a>\n' +
                '</div>\n' +
                '<a href="index.html" class="btn-proxy" style="width: 100%; text-align: center; box-sizing: border-box;">获取开发者专属极速节点</a>\n' +
                '</div>\n</div>\n';
});

let finalAiDevHtml = aiDevHtml.substring(0, aiDevHtml.indexOf('<div class="ai-dev-grid">') + 25) + '\n' + devGridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'ai_dev.html'), finalAiDevHtml);
console.log('✅ ai_dev.html 重构完毕！所有 18 个开发工具都有了专属攻略按钮。');


// Inject all 18 into articles.html
let articlesHtml = fs.readFileSync(path.join(__dirname, 'articles.html'), 'utf8');
let gridStartIndex = articlesHtml.indexOf('<div class="article-grid">');
if(gridStartIndex !== -1) {
    let preGrid = articlesHtml.substring(0, gridStartIndex + 26);
    // Find where the ai_tutorial_chatgpt.html begins, so we can insert BEFORE the previous AI tools!
    let previousAiTutorialIndex = articlesHtml.indexOf('<a href="ai_tutorial_chatgpt.html"');
    if (previousAiTutorialIndex === -1) {
        previousAiTutorialIndex = articlesHtml.indexOf('<a href="review_airport_');
    }
    
    let postGrid = articlesHtml.substring(previousAiTutorialIndex);
    articlesHtml = preGrid + '\n' + newArticlesForHub + '\n' + postGrid;
    fs.writeFileSync(path.join(__dirname, 'articles.html'), articlesHtml);
    console.log('✅ articles.html 列表已完美更新，开发者教程置顶！');
}
