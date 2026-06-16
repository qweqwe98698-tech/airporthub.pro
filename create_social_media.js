const fs = require('fs');
const path = require('path');

const socialMediaHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>海外社交媒体导航 - 全球热门社区解锁指南</title>
    <meta name="description" content="精选 YouTube、X (Twitter)、TikTok、Instagram、Telegram 等全球最火爆社交媒体平台入口，及原生 IP 解锁方案。">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .page-container {
            padding: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .social-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .social-card {
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
        
        .social-card:hover {
            border-color: #3b82f6;
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.15);
            transform: translateY(-2px);
        }

        .social-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6, #14b8a6);
            opacity: 0;
            transition: 0.3s;
        }
        
        .social-card:hover::before {
            opacity: 1;
        }

        .social-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .social-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #3b82f6;
        }

        .social-title h3 {
            font-size: 20px;
            color: #fff;
            margin-bottom: 5px;
        }

        .social-title span {
            font-size: 12px;
            color: var(--text-muted);
            background: rgba(255,255,255,0.05);
            padding: 2px 8px;
            border-radius: 10px;
        }

        .social-desc {
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

        .social-actions {
            display: flex;
            gap: 10px;
        }

        .btn-visit {
            flex-grow: 1;
            background: #3b82f6;
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
                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px;"></i> AI 工具宝盒
                </a>
                <a href="social_media.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-world' style="font-size: 20px; color: #3b82f6;"></i> 海外社交媒体
                </a>
            </nav>
            
            <div class="ad-banner" style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; border: 1px solid var(--border);">
                <h4 style="color: #f59e0b; margin-bottom: 5px; font-size: 14px;">🎉 光速云新用户特惠</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: #f59e0b; user-select: all;">AMM</strong></p>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">完美解锁本页所有流媒体。</p>
                <button onclick="window.open('index.html', '_blank')" style="width: 100%; padding: 8px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">立即使用优惠</button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="ai_tools.html">AI 工具</a>
                    <a href="social_media.html" class="active">海外社交媒体</a>
                </nav>
            </header>

            <div class="page-container">
                <div class="page-header" style="text-align: center; margin-bottom: 40px; margin-top: 20px;">
                    <i class='bx bx-world' style="font-size: 60px; color: #3b82f6; margin-bottom: 15px;"></i>
                    <h1 style="font-size: 32px; margin-bottom: 15px;">全球热门社交流媒体导航</h1>
                    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6;">
                        跨越信息鸿沟，拥抱全球生态。无论是 TikTok 跨境带货、YouTube 4K 追剧，还是在 X (Twitter) 获取第一手吃瓜资讯，优质的海外专线都是畅游世界的前提。
                    </p>
                </div>

                <div class="social-grid">
                    <!-- TikTok -->
                    <div class="social-card">
                        <div class="social-header">
                            <div class="social-icon" style="color: #000000; background: #ffffff; border: 1px solid #333;"><i class='bx bxl-tiktok'></i></div>
                            <div class="social-title">
                                <h3>TikTok (国际版抖音)</h3>
                                <span>跨境电商/短视频之王</span>
                            </div>
                        </div>
                        <p class="social-desc">全球最具影响力的短视频平台。无数跨境电商卖家、外贸人和创作者都在这里赚到了第一桶金，流量即是金钱。</p>
                        <div class="env-req strict">
                            网络要求：<span>最严厉的 IP 锁区</span><br>
                            TikTok 会严格检测 SIM 卡和 IP 归属地。千万不能用几万人合用的免费节点，一旦被标记为“黑 IP”，账号立刻被限流/封禁！强烈建议使用 TikTok 独享原生节点。
                        </div>
                        <div class="social-actions">
                            <a href="https://www.tiktok.com/" target="_blank" class="btn-visit" style="background: #333333;">访问 TikTok</a>
                            <a href="index.html" class="btn-proxy">获取原生独享 IP</a>
                        </div>
                    </div>

                    <!-- YouTube -->
                    <div class="social-card">
                        <div class="social-header">
                            <div class="social-icon" style="color: #ff0000;"><i class='bx bxl-youtube'></i></div>
                            <div class="social-title">
                                <h3>YouTube (油管)</h3>
                                <span>全球最大视频金矿</span>
                            </div>
                        </div>
                        <p class="social-desc">世界级的知识库和娱乐中心。无论是 8K 风景大片、游戏解说、硬核科普还是英语学习，这里应有尽有。</p>
                        <div class="env-req medium">
                            网络要求：<span>极致下行带宽</span><br>
                            看 1080P 勉强可以用免费节点，但如果你想体验秒开 4K/8K 视频且随意拖拽进度条的快感，你绝对需要一条 10Gbps 的旗舰级高速专线。
                        </div>
                        <div class="social-actions">
                            <a href="https://www.youtube.com/" target="_blank" class="btn-visit" style="background: #ff0000;">访问 YouTube</a>
                            <a href="index.html" class="btn-proxy">获取 4K 秒开专线</a>
                        </div>
                    </div>

                    <!-- Twitter / X -->
                    <div class="social-card">
                        <div class="social-header">
                            <div class="social-icon" style="color: #1da1f2;"><i class='bx bxl-twitter'></i></div>
                            <div class="social-title">
                                <h3>X (原 Twitter)</h3>
                                <span>全球第一手资讯前线</span>
                            </div>
                        </div>
                        <p class="social-desc">埃隆·马斯克旗下的社交帝国。全球科技圈、加密货币(Web3)、新闻吃瓜的第一发源地，信息流刷新速度极快。</p>
                        <div class="env-req medium">
                            网络要求：<span>低延迟防阻断</span><br>
                            X 会频繁拉取海量图文视频信息流。劣质节点会导致图片裂开、视频转圈。为了顺滑的刷帖体验，推荐使用无丢包的稳定节点。
                        </div>
                        <div class="social-actions">
                            <a href="https://twitter.com/" target="_blank" class="btn-visit" style="background: #1da1f2;">访问 X (Twitter)</a>
                            <a href="index.html" class="btn-proxy">获取低延迟节点</a>
                        </div>
                    </div>

                    <!-- Telegram -->
                    <div class="social-card">
                        <div class="social-header">
                            <div class="social-icon" style="color: #0088cc;"><i class='bx bxl-telegram'></i></div>
                            <div class="social-title">
                                <h3>Telegram (电报)</h3>
                                <span>最强隐私加密聊天</span>
                            </div>
                        </div>
                        <p class="social-desc">全球最具极客精神的加密聊天软件。内含无数无审核的神秘频道、技术群组、福利资源圈和强大的机器人助手。</p>
                        <div class="env-req strict">
                            网络要求：<span>全天候不断流</span><br>
                            TG 的消息收发必须保持长连接。如果使用垃圾节点，你经常会看到顶部显示 "Updating..." 却迟迟收不到消息。必须选择高 SLA 的优质机场。
                        </div>
                        <div class="social-actions">
                            <a href="https://web.telegram.org/" target="_blank" class="btn-visit" style="background: #0088cc;">访问 Telegram</a>
                            <a href="index.html" class="btn-proxy">获取高 SLA 专线</a>
                        </div>
                    </div>
                    
                    <!-- Instagram -->
                    <div class="social-card">
                        <div class="social-header">
                            <div class="social-icon" style="color: #e1306c;"><i class='bx bxl-instagram'></i></div>
                            <div class="social-title">
                                <h3>Instagram (IG)</h3>
                                <span>潮流生活与美学聚集地</span>
                            </div>
                        </div>
                        <p class="social-desc">年轻人最爱用的图文与快拍分享平台。追踪全球明星、网红、艺术家的日常生活，发现最前沿的穿搭与美妆趋势。</p>
                        <div class="env-req medium">
                            网络要求：<span>高并发图文拉取</span><br>
                            IG 的主页瀑布流和快拍 (Stories) 对瞬间带宽要求极高。如果不想看到模糊的马赛克照片，请使用优质节点。
                        </div>
                        <div class="social-actions">
                            <a href="https://www.instagram.com/" target="_blank" class="btn-visit" style="background: #e1306c;">访问 Instagram</a>
                            <a href="index.html" class="btn-proxy">获取优质宽带节点</a>
                        </div>
                    </div>
                    
                    <!-- Reddit -->
                    <div class="social-card">
                        <div class="social-header">
                            <div class="social-icon" style="color: #ff4500;"><i class='bx bxl-reddit'></i></div>
                            <div class="social-title">
                                <h3>Reddit (红迪)</h3>
                                <span>北美最大的贴吧百科</span>
                            </div>
                        </div>
                        <p class="social-desc">真正的全球互联网“前沿阵地”。无论你玩多冷门的游戏、研究多偏门的技术，都能在这里找到最硬核的老外讨论群 (Subreddit)。</p>
                        <div class="env-req medium">
                            网络要求：<span>北美原生加速</span><br>
                            Reddit 有严格的反爬虫机制，使用被滥用的廉价节点往往会导致页面无法渲染或无法发言。推荐北美原生节点。
                        </div>
                        <div class="social-actions">
                            <a href="https://www.reddit.com/" target="_blank" class="btn-visit" style="background: #ff4500;">访问 Reddit</a>
                            <a href="index.html" class="btn-proxy">获取北美原生节点</a>
                        </div>
                    </div>
                    
                    <!-- Netflix -->
                    <div class="social-card">
                        <div class="social-header">
                            <div class="social-icon" style="color: #e50914;"><i class='bx bxl-netlify'></i></div>
                            <div class="social-title">
                                <h3>Netflix (奈飞)</h3>
                                <span>流媒体影视霸主</span>
                            </div>
                        </div>
                        <p class="social-desc">全网最高质量的原创剧集、电影大作。无广告、超高清，带来真正极致的家庭影院体验。</p>
                        <div class="env-req strict">
                            网络要求：<span>原生解锁与大带宽</span><br>
                            Netflix 极其严厉的 IP 封锁闻名全球！普通节点只会显示“您似乎使用了代理”。必须要买标注了【流媒体解锁】的旗舰机场才能看。
                        </div>
                        <div class="social-actions">
                            <a href="https://www.netflix.com/" target="_blank" class="btn-visit" style="background: #e50914;">访问 Netflix</a>
                            <a href="index.html" class="btn-proxy">获取原生解锁节点</a>
                        </div>
                    </div>

                    <!-- OnlyFans -->
                    <div class="social-card" style="border-color: rgba(0, 175, 240, 0.3);">
                        <div class="social-header">
                            <div class="social-icon" style="color: #00aff0; background: rgba(0, 175, 240, 0.1);"><i class='bx bx-lock-open-alt'></i></div>
                            <div class="social-title">
                                <h3>OnlyFans</h3>
                                <span>全球最大私密创作者平台</span>
                            </div>
                        </div>
                        <p class="social-desc">成人与私密内容创作者订阅平台。支持你最喜爱的模特和创作者，获取独家定制的私密图文与视频内容。</p>
                        <div class="env-req strict">
                            网络要求：<span>原生住宅 IP 防封禁</span><br>
                            OF 对信用卡的风控和登录 IP 要求堪比银行级别。使用万人骑免费节点极易触发账号锁定或支付失败，必须使用纯净原生 IP 访问。
                        </div>
                        <div class="social-actions">
                            <a href="https://onlyfans.com/" target="_blank" class="btn-visit" style="background: #00aff0;">访问 OnlyFans</a>
                            <a href="index.html" class="btn-proxy">获取纯净原生 IP</a>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'social_media.html'), socialMediaHtml);
console.log('Created social_media.html');

// Inject the nav link into all main files
const filesToUpdate = ['index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 'ai_tools.html'];
const newLinkHTML = `                <a href="social_media.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-world' style="font-size: 20px;"></i> 海外社交媒体
                </a>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        if (!content.includes('social_media.html')) {
            // Find the ai_tools.html link and inject after it
            const targetStr = `                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px;"></i> AI 工具宝盒
                </a>`;
            
            const targetStrActive = `                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px; color: #a855f7;"></i> AI 工具宝盒
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
