const fs = require('fs');
const path = require('path');

const aiTools = [
    {
        id: "chatgpt",
        name: "ChatGPT (GPT-4o)",
        icon: "bx-bot",
        color: "#10b981",
        description: "OpenAI 旗下的现象级 AI 产品，注册和访问需要极度纯净的美国或日本原生 IP。本教程将手把手教你如何绕过手机号验证和区域封锁。",
        tips: "不要使用普通的机场节点，极易触发 'Access Denied' 或被大规模封号。"
    },
    {
        id: "claude",
        name: "Claude 3.5 Sonnet",
        icon: "bx-book-open",
        color: "#f59e0b",
        description: "Anthropic 研发的顶级大模型，写代码和写文章的王者。目前对 IP 的封锁力度全网最高，注册极易被秒封号。",
        tips: "必须使用绝对纯净的家庭宽带 IP 或顶级 IPLC 专线的原生出口。"
    },
    {
        id: "midjourney",
        name: "Midjourney v6",
        icon: "bx-image-alt",
        color: "#3b82f6",
        description: "全球最顶级的 AI 图像生成工具。依托于 Discord 平台运行，普通节点即可访问，但生成高分辨率图片时建议使用低延迟节点。",
        tips: "无需原生 IP 也能访问，但需要绑定稳定的海外信用卡进行订阅支付。"
    },
    {
        id: "perplexity",
        name: "Perplexity AI",
        icon: "bx-search-alt",
        color: "#0ea5e9",
        description: "颠覆 Google 的 AI 搜索引擎革命。会直接给出总结好的答案并附上参考链接。目前屏蔽了部分国内与云服务器 IP。",
        tips: "推荐使用干净的台湾或新加坡节点，搜索响应速度最快。"
    }
];

const styleBlock = `
    <style>
        .article-read-container { max-width: 800px; margin: 40px auto; background: var(--bg-card); padding: 40px; border-radius: 12px; border: 1px solid var(--border); }
        .article-header { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }
        .article-header h1 { font-size: 28px; color: #fff; line-height: 1.4; margin-bottom: 15px; }
        .meta-tags { display: flex; gap: 15px; color: var(--text-muted); font-size: 13px; flex-wrap: wrap;}
        .meta-tags span { display: flex; align-items: center; gap: 5px; }

        .article-body { font-size: 16px; line-height: 1.8; color: var(--text-main); }
        .article-body h2 { color: #fff; font-size: 22px; margin: 35px 0 15px 0; border-left: 4px solid #a855f7; padding-left: 12px; }
        .article-body h3 { color: #e2e8f0; font-size: 18px; margin: 25px 0 10px 0; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 8px;}
        .article-body p { margin-bottom: 18px; text-align: justify; }
        
        .warning-box { background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #ef4444; }
        .warning-box strong { color: #f87171; display: block; margin-bottom: 10px; font-size: 18px; }

        .step-box { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 25px; margin: 20px 0; counter-reset: step; }
        .step-item { position: relative; padding-left: 40px; margin-bottom: 20px; }
        .step-item::before { counter-increment: step; content: counter(step); position: absolute; left: 0; top: 2px; width: 28px; height: 28px; background: #a855f7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; }
        .step-item h4 { color: #fff; margin: 0 0 8px 0; font-size: 16px; }
        .step-item p { margin: 0; color: var(--text-muted); font-size: 14px; }
        
        .inline-ad { background: linear-gradient(145deg, #1f2937, #111827); border: 1px solid #374151; border-radius: 12px; padding: 35px 25px; text-align: center; margin: 40px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .inline-ad h3 { color: #10b981; margin: 0 0 15px 0; font-size: 24px; }
        .inline-ad p { color: #9ca3af; font-size: 15px; margin-bottom: 25px; }
        .btn-buy { display: inline-block; background: #10b981; color: #fff; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: bold; font-size: 18px; transition: 0.3s; }
        .btn-buy:hover { background: #059669; transform: translateY(-3px); }

        @media (max-width: 768px) {
            .dashboard-wrapper { flex-direction: column; }
            .sidebar { width: 100% !important; position: static !important; height: auto !important; border-right: none !important; border-bottom: 1px solid var(--border); }
            .main-content { overflow-y: visible !important; height: auto !important; }
            .article-read-container { padding: 20px; margin: 15px; }
            .topbar { padding: 15px; flex-direction: column; gap: 15px; align-items: flex-start; }
            .article-header h1 { font-size: 22px; }
        }
    </style>
`;

aiTools.forEach(tool => {
    const content = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>【2026最新】${tool.name} 保姆级注册与防封号教程 - AIRPORT REVIEWS</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    ${styleBlock}
</head>
<body>
    <div class="dashboard-wrapper">
        <!-- NAV_INJECT_PLACEHOLDER -->
        
        <main class="main-content" style="overflow-y: auto; flex-grow: 1;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="ai_tools.html" style="display: flex; align-items: center; gap: 5px;"><i class='bx bx-arrow-back'></i> 返回 AI 工具箱</a>
                </nav>
            </header>

            <div class="article-read-container">
                <div class="article-header">
                    <h1>【2026保姆级教程】国内如何成功注册与使用 ${tool.name}？附防封号指南</h1>
                    <div class="meta-tags">
                        <span><i class='bx bx-folder'></i> AI 工具教程</span>
                        <span><i class='bx bx-calendar'></i> 2026-06-16</span>
                        <span><i class='bx bx-show'></i> 4.5w 阅读</span>
                    </div>
                </div>

                <div class="article-body">
                    <p>${tool.description}</p>
                    
                    <div class="warning-box">
                        <strong>⚠️ 核心警告：网络环境决定生死！</strong>
                        <p>${tool.tips}</p>
                        <p>很多人在淘宝花钱买的账号，登录一两次就被封，根本原因不在于账号本身，而在于你使用的“梯子”节点太垃圾！官方系统一旦检测到你使用的是高危机房 IP（如很多人共用的万人骑节点），会立刻对账号进行封禁处理。</p>
                    </div>

                    <h2>第一步：准备纯净的网络环境 (最重要的一步)</h2>
                    <p>在开始注册之前，你必须确保你的网络环境是极其干净的。这意味着你不能使用那种 10 块钱一个月的低端机场。</p>
                    <p><strong>解决方案：</strong> 建议前往我们的 <a href="index.html" style="color: #a855f7; text-decoration: underline;">机场测速看板</a>，挑选一家带有 <strong>“原生 IP”</strong> 或 <strong>“解锁流媒体”</strong> 标签的中高端机场。将节点切换至美国、日本或新加坡的冷门专线节点，并开启全局代理模式 (Global)。</p>

                    <h2>第二步：清理浏览器环境</h2>
                    <p>官方除了检测 IP，还会检测你的浏览器指纹和历史缓存。</p>
                    <div class="step-box">
                        <div class="step-item">
                            <h4>开启无痕模式 (Incognito Mode)</h4>
                            <p>打开 Google Chrome 或 Edge 浏览器，按下快捷键 <code>Ctrl + Shift + N</code> (Windows) 或 <code>Cmd + Shift + N</code> (Mac) 开启无痕窗口。</p>
                        </div>
                        <div class="step-item">
                            <h4>设置浏览器语言 (可选但推荐)</h4>
                            <p>在无痕模式下，有时为了进一步降低风控，可以将浏览器的首选语言临时设置为英语 (English-US)。</p>
                        </div>
                    </div>

                    <h2>第三步：开始注册账号</h2>
                    <p>现在，你可以在无痕窗口中打开 ${tool.name} 的官方网站进行注册。强烈建议使用海外邮箱（如 Gmail 或 Outlook）进行注册，国内的 QQ 邮箱和网易邮箱有极大可能会被系统直接拦截，连验证码都收不到。</p>

                    <h2>第四步：海外手机号验证 (如需)</h2>
                    <p>部分 AI 服务（如早期的 ChatGPT 和现在的 Claude）在注册时会强制要求验证海外手机号。国内的 +86 手机号是绝对行不通的。</p>
                    <p><strong>如何解决：</strong> 你可以使用专门的海外接码平台（如 sms-activate.org）。充值一两美金即可获取一个临时的海外虚拟号码用来接收验证码。注意，接码平台的号码国家必须与你当前使用的机场代理节点国家保持一致（例如：你连接的是美国节点，就买美国的号码）。</p>

                    <h2>日常防封号使用建议</h2>
                    <ul>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>固定节点使用：</strong> 注册成功后，尽量固定使用同一个地区、同一个节点的 IP 登录。今天用美国 IP，明天用香港 IP，后天用日本 IP，这种“频繁瞬移”的行为是 100% 会触发风控封号的。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>不要多人共享：</strong> 很多封号是因为把账号分享给多个朋友在不同设备上同时登录。请确保一机一号。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>保持订阅环境一致：</strong> 如果你需要升级高级版（如 Plus 或 Pro），支付绑定的海外信用卡归属地，最好也与你经常使用的 IP 节点地区相匹配。</li>
                    </ul>

                    <div class="inline-ad">
                        <h3>找不到稳定干净的解锁节点？</h3>
                        <p>不要在垃圾机场上浪费时间和账号了！前往我们的测速看板，选择经过我们实测认证、具备纯净原生住宅 IP 的高端专线服务商。告别封号，丝滑体验次世代 AI！</p>
                        <a href="index.html" class="btn-buy" rel="nofollow">👉 立即挑选优质原生 IP 节点 👈</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`;

    const fileName = `ai_tutorial_${tool.id}.html`;
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, content);
    console.log(`✅ 生成 AI 工具教程: ${fileName}`);
});
