const fs = require('fs');
const path = require('path');

const aiToolsHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 工具宝盒 - 2026 必备人工智能提效神器</title>
    <meta name="description" content="精选 2026 年最新最强 AI 工具导航：ChatGPT、Claude 3、Midjourney 等官方入口，提供最稳定的解锁环境指北。">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .page-container {
            padding: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .ai-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .ai-card {
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
        
        .ai-card:hover {
            border-color: #a855f7;
            box-shadow: 0 10px 20px rgba(168, 85, 247, 0.15);
            transform: translateY(-2px);
        }

        .ai-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #a855f7, #ec4899);
            opacity: 0;
            transition: 0.3s;
        }
        
        .ai-card:hover::before {
            opacity: 1;
        }

        .ai-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .ai-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #a855f7;
        }

        .ai-title h3 {
            font-size: 20px;
            color: #fff;
            margin-bottom: 5px;
        }

        .ai-title span {
            font-size: 12px;
            color: var(--text-muted);
            background: rgba(255,255,255,0.05);
            padding: 2px 8px;
            border-radius: 10px;
        }

        .ai-desc {
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
            background: rgba(245, 158, 11, 0.05);
            border-color: #f59e0b;
        }
        .env-req.medium span { color: #f59e0b; font-weight: bold; }

        .ai-actions {
            display: flex;
            gap: 10px;
        }

        .btn-visit {
            flex-grow: 1;
            background: #a855f7;
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
            background: #9333ea;
        }

        .btn-proxy {
            flex-grow: 1;
            background: transparent;
            color: #3b82f6;
            border: 1px solid #3b82f6;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: 0.2s;
        }
        
        .btn-proxy:hover {
            background: rgba(59, 130, 246, 0.1);
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
                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px; color: #a855f7;"></i> AI 工具宝盒
                </a>
            </nav>
            
            <div class="ad-banner" style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; border: 1px solid var(--border);">
                <h4 style="color: #f59e0b; margin-bottom: 5px; font-size: 14px;">🎉 光速云新用户特惠</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: #f59e0b; user-select: all;">AMM</strong></p>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">完美解锁本页所有 AI 工具。</p>
                <button onclick="window.open('index.html', '_blank')" style="width: 100%; padding: 8px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">立即使用优惠</button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="free_nodes.html">免费节点</a>
                    <a href="ai_tools.html" class="active">AI 工具宝盒</a>
                </nav>
            </header>

            <div class="page-container">
                <div class="page-header" style="text-align: center; margin-bottom: 40px; margin-top: 20px;">
                    <i class='bx bx-brain' style="font-size: 60px; color: #a855f7; margin-bottom: 15px;"></i>
                    <h1 style="font-size: 32px; margin-bottom: 15px;">全球顶尖 AI 工具宝盒</h1>
                    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6;">
                        在 2026 年，会不会使用 AI 将决定你的工作效率。我们为您整理了目前地表最强的人工智能入口。由于严格的 IP 封锁政策，访问这些工具需要极其纯净的海外节点环境。
                    </p>
                </div>

                <div class="ai-grid">
                    <!-- ChatGPT -->
                    <div class="ai-card">
                        <div class="ai-header">
                            <div class="ai-icon" style="color: #10a37f;"><i class='bx bx-message-dots'></i></div>
                            <div class="ai-title">
                                <h3>ChatGPT (GPT-4o)</h3>
                                <span>文本/编程/全能助手</span>
                            </div>
                        </div>
                        <p class="ai-desc">OpenAI 旗下的现象级 AI 产品。拥有最强的逻辑推理、代码编写和多语言处理能力。支持语音对话和实时视觉分析。</p>
                        <div class="env-req strict">
                            网络要求：<span>极度严格</span><br>
                            需要高质量的美国、日本等非受限地区原生 IP。普通节点极易触发 "Access Denied" 或大面积封号。
                        </div>
                        <div class="ai-actions">
                            <a href="https://chat.openai.com/" target="_blank" class="btn-visit" style="background: #10a37f;">访问 ChatGPT</a>
                            <a href="index.html" class="btn-proxy">获取解锁专线</a>
                        </div>
                    </div>

                    <!-- Claude -->
                    <div class="ai-card">
                        <div class="ai-header">
                            <div class="ai-icon" style="color: #d97706;"><i class='bx bx-book-open'></i></div>
                            <div class="ai-title">
                                <h3>Claude 3.5 Sonnet</h3>
                                <span>长文本/论文/代码之王</span>
                            </div>
                        </div>
                        <p class="ai-desc">Anthropic 开发的顶级大模型，上下文窗口极大，写出来的文章比 GPT 更有人味。程序员写代码、打工人写长报告的最佳选择。</p>
                        <div class="env-req strict">
                            网络要求：<span>最严苛封控</span><br>
                            全网封锁最狠的 AI。注册极易被封，必须使用绝对纯净的美国/英国原生家庭宽带 IP 或顶级 IPLC 专线。
                        </div>
                        <div class="ai-actions">
                            <a href="https://claude.ai/" target="_blank" class="btn-visit" style="background: #d97706;">访问 Claude</a>
                            <a href="index.html" class="btn-proxy">获取解锁专线</a>
                        </div>
                    </div>

                    <!-- Midjourney -->
                    <div class="ai-card">
                        <div class="ai-header">
                            <div class="ai-icon" style="color: #3b82f6;"><i class='bx bx-image-alt'></i></div>
                            <div class="ai-title">
                                <h3>Midjourney v6</h3>
                                <span>照片级 AI 绘画霸主</span>
                            </div>
                        </div>
                        <p class="ai-desc">目前全球最顶级的 AI 图像生成工具。输入几句描述词，即可生成电影级质感、完美光影的超高清摄影级别图片。</p>
                        <div class="env-req medium">
                            网络要求：<span>中等</span><br>
                            基于 Discord 平台运行，普通节点即可访问，但生成高分辨率图片时需要消耗较大带宽，建议使用低延迟节点。
                        </div>
                        <div class="ai-actions">
                            <a href="https://www.midjourney.com/" target="_blank" class="btn-visit" style="background: #3b82f6;">访问 Midjourney</a>
                            <a href="index.html" class="btn-proxy">获取低延迟节点</a>
                        </div>
                    </div>

                    <!-- Perplexity -->
                    <div class="ai-card">
                        <div class="ai-header">
                            <div class="ai-icon" style="color: #0ea5e9;"><i class='bx bx-search-alt'></i></div>
                            <div class="ai-title">
                                <h3>Perplexity AI</h3>
                                <span>AI 搜索引擎革命</span>
                            </div>
                        </div>
                        <p class="ai-desc">替代 Google 的最佳选择。直接给你总结好的答案，并附带所有真实网页引用来源，彻底告别满屏的搜索引擎广告。</p>
                        <div class="env-req medium">
                            网络要求：<span>中等</span><br>
                            屏蔽了部分国内与云服务器 IP。推荐使用干净的台湾或新加坡节点，搜索响应速度最快。
                        </div>
                        <div class="ai-actions">
                            <a href="https://www.perplexity.ai/" target="_blank" class="btn-visit" style="background: #0ea5e9;">访问 Perplexity</a>
                            <a href="index.html" class="btn-proxy">获取专线节点</a>
                        </div>
                    </div>
                    
                    <!-- Poe -->
                    <div class="ai-card">
                        <div class="ai-header">
                            <div class="ai-icon" style="color: #8b5cf6;"><i class='bx bx-layer'></i></div>
                            <div class="ai-title">
                                <h3>Poe</h3>
                                <span>多合一 AI 聚合平台</span>
                            </div>
                        </div>
                        <p class="ai-desc">Quora 推出的聚合平台。在一个网页里，你可以随意切换使用 GPT-4、Claude 3、Gemini 等几百个不同的顶级 AI 模型。</p>
                        <div class="env-req medium">
                            网络要求：<span>中等</span><br>
                            对 IP 纯净度要求比官方稍低，是国内用户体验多种大模型最方便的入口，但仍需全局代理访问。
                        </div>
                        <div class="ai-actions">
                            <a href="https://poe.com/" target="_blank" class="btn-visit" style="background: #8b5cf6;">访问 Poe</a>
                            <a href="index.html" class="btn-proxy">获取专线节点</a>
                        </div>
                    </div>
                    
                    <!-- Github Copilot -->
                    <div class="ai-card">
                        <div class="ai-header">
                            <div class="ai-icon" style="color: #f1f5f9; background:#1e293b;"><i class='bx bxl-github'></i></div>
                            <div class="ai-title">
                                <h3>GitHub Copilot</h3>
                                <span>程序员自动补全神器</span>
                            </div>
                        </div>
                        <p class="ai-desc">集成在 VSCode 中的 AI 编程助手。你写一行注释，它自动帮你写出几百行完美运行的代码，开发效率提升 100%。</p>
                        <div class="env-req medium">
                            网络要求：<span>速度优先</span><br>
                            对 IP 纯净度要求极低，但对延迟（Ping值）要求极高！如果节点延迟超过 200ms，代码补全会严重卡顿。
                        </div>
                        <div class="ai-actions">
                            <a href="https://github.com/features/copilot" target="_blank" class="btn-visit" style="background: #1e293b;">访问 Copilot</a>
                            <a href="index.html" class="btn-proxy">获取极低延迟节点</a>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'ai_tools.html'), aiToolsHtml);
console.log('Created ai_tools.html');

// 注入导航栏链接到 index.html, tutorials.html, apple_id.html, free_nodes.html, review.html
const filesToUpdate = ['index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 'review.html'];
const newLinkHTML = `                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px;"></i> AI 工具宝盒
                </a>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        if (file === 'review.html') {
            return; // skip review.html since it has different layout
        }
        
        if (!content.includes('ai_tools.html')) {
            const targetStr = `                <a href="free_nodes.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-wifi' style="font-size: 20px;"></i> 免费节点订阅
                </a>`;
            
            const targetStrActive = `                <a href="free_nodes.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-wifi' style="font-size: 20px; color: #10b981;"></i> 免费节点订阅
                </a>`;

            if (content.includes(targetStr)) {
                content = content.replace(targetStr, targetStr + '\n' + newLinkHTML);
            } else if (content.includes(targetStrActive)) {
                content = content.replace(targetStrActive, targetStrActive + '\n' + newLinkHTML);
            }
            
            fs.writeFileSync(fullPath, content);
            console.log('Updated', file);
        }
    }
});
