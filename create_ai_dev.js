const fs = require('fs');
const path = require('path');

const aiDevHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 编程开发工具 - 程序员专属低延迟防封节点</title>
    <meta name="description" content="精选 Cursor、GitHub Copilot、Claude 3.5、v0 等全球顶尖 AI 编程工具。专为程序员提供超低延迟的代码补全与防封锁 API 访问专线。">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .page-container {
            padding: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .ai-dev-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .ai-dev-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 25px;
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }
        
        .ai-dev-card:hover {
            border-color: #8b5cf6;
            box-shadow: 0 10px 20px rgba(139, 92, 246, 0.15);
            transform: translateY(-2px);
        }

        .ai-dev-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #8b5cf6, #3b82f6);
            opacity: 0;
            transition: 0.3s;
        }
        
        .ai-dev-card:hover::before {
            opacity: 1;
        }

        .ai-dev-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .ai-dev-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #8b5cf6;
        }

        .ai-dev-title h3 {
            font-size: 20px;
            color: #fff;
            margin-bottom: 5px;
        }

        .ai-dev-title span {
            font-size: 12px;
            color: var(--text-muted);
            background: rgba(255,255,255,0.05);
            padding: 2px 8px;
            border-radius: 10px;
        }

        .ai-dev-desc {
            color: var(--text-secondary);
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }

        .env-req {
            background: rgba(239, 68, 68, 0.05);
            border-left: 3px solid #ef4444;
            padding: 10px 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 13px;
        }
        
        .env-req.strict {
            background: rgba(239, 68, 68, 0.05);
            border-color: #ef4444;
        }
        .env-req.strict span { color: #ef4444; font-weight: bold; }
        
        .env-req.medium {
            background: rgba(139, 92, 246, 0.05);
            border-color: #8b5cf6;
        }
        .env-req.medium span { color: #8b5cf6; font-weight: bold; }

        .ai-dev-actions {
            display: flex;
            gap: 10px;
        }

        .btn-visit {
            flex-grow: 1;
            background: #8b5cf6;
            color: white;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: 0.2s;
        }
        
        .btn-visit:hover {
            filter: brightness(1.1);
        }

        .btn-proxy {
            flex-grow: 1;
            background: transparent;
            color: #8b5cf6;
            border: 1px solid #8b5cf6;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: 0.2s;
        }
        
        .btn-proxy:hover {
            background: rgba(139, 92, 246, 0.1);
        }

    </style>
</head>
<body>
    <div class="dashboard-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="logo">
                <i class='bx bx-globe'></i>
                <span>NODE ANALYTICS</span>
            </div>
            
            <nav class="sidebar-nav" style="margin-top: 30px; padding: 0 15px;">
                <a href="index.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s;">
                    <i class='bx bx-data' style="font-size: 20px;"></i> 数据看板
                </a>
                <a href="tutorials.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-book-open' style="font-size: 20px;"></i> 客户端教程
                </a>
                <a href="apple_id.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-user-circle' style="font-size: 20px;"></i> 免费 Apple ID
                </a>
                <a href="free_nodes.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-wifi' style="font-size: 20px;"></i> 免费节点订阅
                </a>
                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px;"></i> AI 工具宝盒
                </a>
                <a href="ai_dev.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-code-alt' style="font-size: 20px; color: #8b5cf6;"></i> AI 编程开发工具
                </a>
                <a href="social_media.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-world' style="font-size: 20px;"></i> 海外社交媒体
                </a>
                <a href="ecommerce.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-store' style="font-size: 20px;"></i> 跨境电商导航
                </a>
                <a href="crypto.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bitcoin' style="font-size: 20px;"></i> 数字货币导航
                </a>
            </nav>
            
            <div class="ad-banner" style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; border: 1px solid var(--border);">
                <h4 style="color: #8b5cf6; margin-bottom: 5px; font-size: 14px;">⚡ 程序员专属加速</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: #8b5cf6; user-select: all;">AMM</strong></p>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">超低延迟 API，代码补全秒级响应。</p>
                <button onclick="window.open('index.html', '_blank')" style="width: 100%; padding: 8px; background: #8b5cf6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">获取极速专线</button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="ai_tools.html">AI 大模型</a>
                    <a href="ai_dev.html" class="active">AI 编程开发</a>
                </nav>
            </header>

            <div class="page-container">
                <div class="page-header" style="text-align: center; margin-bottom: 40px; margin-top: 20px;">
                    <i class='bx bx-code-block' style="font-size: 60px; color: #8b5cf6; margin-bottom: 15px;"></i>
                    <h1 style="font-size: 32px; margin-bottom: 15px;">AI 编程与开发工具链</h1>
                    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6;">
                        10倍开发效率的秘密全在这里！但在国内使用 AI IDE 最痛苦的莫过于“代码补全转圈圈”和“API 被封锁”。以下是全球顶尖的 AI 编程工具，我们为你提供最低延迟的解锁方案。
                    </p>
                </div>

                <div class="ai-dev-grid">
                    <!-- Cursor -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #ffffff; background: #000000; border: 1px solid #333;"><i class='bx bx-terminal'></i></div>
                            <div class="ai-dev-title">
                                <h3>Cursor</h3>
                                <span>当前最强 AI IDE</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">火爆全球的 AI 编辑器，基于 VS Code 开发。它的 Composer 功能可以直接根据需求生成整个项目结构，懂代码的人直接起飞。</p>
                        <div class="env-req strict">
                            网络要求：<span>超低延迟的美区 IP</span><br>
                            Cursor 对网络延迟极其敏感！当你敲代码时，每次补全请求都要发往海外服务器。如果节点延迟高，你的补全永远慢半拍，极度影响编码心流！
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://cursor.sh/" target="_blank" class="btn-visit" style="background: #333; color: #fff;">下载 Cursor</a>
                            <a href="index.html" class="btn-proxy">获取低延迟专线</a>
                        </div>
                    </div>

                    <!-- Claude 3.5 Sonnet -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #d97757;"><i class='bx bx-brain'></i></div>
                            <div class="ai-dev-title">
                                <h3>Claude 3.5 Sonnet</h3>
                                <span>程序员心中的代码神</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">Anthropic 出品。目前公认的“代码能力最强”的大模型。Artifacts 功能可以直接在网页端预览 React/Vue 等前端组件代码的运行效果。</p>
                        <div class="env-req strict">
                            网络要求：<span>地狱级防封锁纯净 IP</span><br>
                            Claude 的风控是全宇宙最严的！只要你用烂大街的免费机场，甚至部分付费机场，账号也会瞬间被连坐封禁（Ban号）。只有原生家庭宽带 IP 才能保命。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://claude.ai/" target="_blank" class="btn-visit" style="background: #d97757; color: #fff;">访问 Claude</a>
                            <a href="index.html" class="btn-proxy">获取原生住宅 IP</a>
                        </div>
                    </div>

                    <!-- GitHub Copilot -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #ffffff; background: #24292e;"><i class='bx bxl-github'></i></div>
                            <div class="ai-dev-title">
                                <h3>GitHub Copilot</h3>
                                <span>老牌 AI 代码助手</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">由 GitHub 和 OpenAI 联合打造的插件，覆盖几乎所有主流 IDE。虽然被 Cursor 抢了风头，但依然是无数公司级开发者的标配。</p>
                        <div class="env-req medium">
                            网络要求：<span>稳定不断线的全局代理</span><br>
                            Copilot 经常出现 "Authentication failed" 或者无响应，大部分是因为国内网络直接屏蔽了验证服务器。必须在 IDE 级别配置稳定的代理。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://github.com/features/copilot" target="_blank" class="btn-visit" style="background: #24292e; color: #fff;">了解 Copilot</a>
                            <a href="index.html" class="btn-proxy">获取不掉线节点</a>
                        </div>
                    </div>

                    <!-- v0.dev -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #000; background: #fff; border: 1px solid #ccc;"><i class='bx bx-layout'></i></div>
                            <div class="ai-dev-title">
                                <h3>v0.dev</h3>
                                <span>一句话生成精美 UI</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">前端王者 Vercel 推出的生成式 UI 工具。输入自然语言，立刻生成基于 React 和 TailwindCSS 的精美前端组件代码，并提供在线预览。</p>
                        <div class="env-req medium">
                            网络要求：<span>高并发拉取带宽</span><br>
                            生成界面时需要加载大量的组件库和样式资源，劣质节点会导致组件渲染卡住，或者无法导出代码包。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://v0.dev/" target="_blank" class="btn-visit" style="background: #000; color: #fff;">访问 v0.dev</a>
                            <a href="index.html" class="btn-proxy">获取大带宽专线</a>
                        </div>
                    </div>

                    <!-- Bolt.new -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #facc15; background: #111;"><i class='bx bx-bolt-circle'></i></div>
                            <div class="ai-dev-title">
                                <h3>Bolt.new</h3>
                                <span>浏览器里的全栈 AI</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">直接在浏览器里从零开始生成、运行并部署一个完整的全栈 Web 应用（借助 WebContainers 技术）。极其硬核且惊艳。</p>
                        <div class="env-req medium">
                            网络要求：<span>长连接不中断</span><br>
                            在浏览器内运行 Node.js 环境并持续向 AI 请求修改，如果梯子中间断流一秒钟，整个容器环境可能会重载，导致刚才的修改丢失。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://bolt.new/" target="_blank" class="btn-visit" style="background: #111; color: #facc15; border: 1px solid #facc15;">访问 Bolt</a>
                            <a href="index.html" class="btn-proxy">获取高稳定性节点</a>
                        </div>
                    </div>

                    <!-- Codeium -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #09b6a2;"><i class='bx bx-code'></i></div>
                            <div class="ai-dev-title">
                                <h3>Codeium</h3>
                                <span>免费且极速的补全神器</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">Copilot 的最强免费平替！支持 70 多种语言和 40 多个 IDE，其自研模型的代码补全速度极快，受到全球个人开发者追捧。</p>
                        <div class="env-req medium">
                            网络要求：<span>毫秒级响应专线</span><br>
                            既然主打“极速”，如果你的本地翻墙网络延迟高达 200ms 以上，那它自研模型的速度优势就荡然无存了。需要一条日韩/港台的高速线路。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://codeium.com/" target="_blank" class="btn-visit" style="background: #09b6a2;">下载 Codeium</a>
                            <a href="index.html" class="btn-proxy">获取高速专线</a>
                        </div>
                    </div>

                    <!-- Supermaven -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #fbbf24;"><i class='bx bx-meteor'></i></div>
                            <div class="ai-dev-title">
                                <h3>Supermaven</h3>
                                <span>百万上下文的最快补全</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">号称拥有 100 万 token 上下文窗口的代码补全工具，这意味着它可以理解你整个仓库的底层逻辑，而不是瞎猜当前页面的代码。</p>
                        <div class="env-req strict">
                            网络要求：<span>高速大文件传输限制</span><br>
                            初次索引项目时，需要将大量的代码特征传给云端模型。如果代理速度慢且限制多连接并发，索引大型项目时会直接超时失败。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://supermaven.com/" target="_blank" class="btn-visit" style="background: #fbbf24; color: #000;">了解 Supermaven</a>
                            <a href="index.html" class="btn-proxy">获取不限速专线</a>
                        </div>
                    </div>

                    <!-- Replit -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #f26207;"><i class='bx bx-cloud'></i></div>
                            <div class="ai-dev-title">
                                <h3>Replit</h3>
                                <span>带 AI 的云端开发机</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">直接在网页上写代码、运行服务器，不需要配置任何本地环境。内置的 Ghostwriter AI 功能极其强大。</p>
                        <div class="env-req medium">
                            网络要求：<span>全球机房直连</span><br>
                            因为你操作的是海外服务器，使用 SSH 或者网页终端时，国内直连会巨卡无比。必须通过优质代理接管全局流量才能顺畅敲代码。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://replit.com/" target="_blank" class="btn-visit" style="background: #f26207;">访问 Replit</a>
                            <a href="index.html" class="btn-proxy">获取海外机房专线</a>
                        </div>
                    </div>

                    <!-- Devin / OpenDevin -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #ffffff; background: #000;"><i class='bx bx-bot'></i></div>
                            <div class="ai-dev-title">
                                <h3>Devin / OpenDevin</h3>
                                <span>自主 AI 软件工程师</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">不再是“补全代码”，而是你下指令，它自己去查文档、写代码、排 BUG、甚至部署。未来的终极形态。</p>
                        <div class="env-req strict">
                            网络要求：<span>顶级 API 并发请求</span><br>
                            无论是用 Devin 还是开源版的 OpenDevin，后台都会疯狂调用 GPT-4 或 Claude API。普通梯子会被频繁熔断或报错 API Connection Refused。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://github.com/OpenDevin/OpenDevin" target="_blank" class="btn-visit" style="background: #333;">查看 OpenDevin</a>
                            <a href="index.html" class="btn-proxy">获取顶级 API 专线</a>
                        </div>
                    </div>

                    <!-- Windsurf -->
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #0ea5e9;"><i class='bx bx-water'></i></div>
                            <div class="ai-dev-title">
                                <h3>Windsurf</h3>
                                <span>新星 AI IDE</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">由 Codeium 团队推出的全新 AI IDE，以极其顺滑的开发体验和上下文感知能力，正面硬刚 Cursor 的强力挑战者。</p>
                        <div class="env-req medium">
                            网络要求：<span>顺滑无感网络保障</span><br>
                            既然追求“冲浪般的顺滑体验”，怎么能让代码补全因为网络墙的阻拦而卡顿？买一个优质节点，才是程序员最好的投资。
                        </div>
                        <div class="ai-dev-actions">
                            <a href="https://codeium.com/windsurf" target="_blank" class="btn-visit" style="background: #0ea5e9;">下载 Windsurf</a>
                            <a href="index.html" class="btn-proxy">获取顺滑无感专线</a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'ai_dev.html'), aiDevHtml);
console.log('Created ai_dev.html');

// Inject the nav link into all main files
const filesToUpdate = ['index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 'ai_tools.html', 'social_media.html', 'ecommerce.html', 'crypto.html'];
const newLinkHTML = `                <a href="ai_dev.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-code-alt' style="font-size: 20px;"></i> AI 编程开发工具
                </a>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        if (!content.includes('ai_dev.html')) {
            // Find the ai_tools.html link and inject after it
            const targetStr = `                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px;"></i> AI 工具宝盒
                </a>`;
            
            const targetStrActive = `                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px; color: #10b981;"></i> AI 工具宝盒
                </a>`;

            if (content.includes(targetStr)) {
                content = content.replace(targetStr, targetStr + '\n' + newLinkHTML);
                fs.writeFileSync(fullPath, content);
                console.log('Updated', file);
            } else if (content.includes(targetStrActive)) {
                content = content.replace(targetStrActive, targetStrActive + '\n' + newLinkHTML);
                fs.writeFileSync(fullPath, content);
                console.log('Updated', file);
            } else {
                console.log('Could not find injection target in', file);
            }
        }
    }
});
