const fs = require('fs');
const path = require('path');

const ecommerceHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>跨境电商出海导航 - 卖家店铺防关联防封指南</title>
    <meta name="description" content="精选 Amazon、Shopify、Shopee、Etsy 等全球主流跨境电商卖家后台入口，提供最硬核的店铺防关联纯净 IP 解决方案。">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .page-container {
            padding: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .ecom-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .ecom-card {
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
        
        .ecom-card:hover {
            border-color: #f59e0b;
            box-shadow: 0 10px 20px rgba(245, 158, 11, 0.15);
            transform: translateY(-2px);
        }

        .ecom-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #f59e0b, #ef4444);
            opacity: 0;
            transition: 0.3s;
        }
        
        .ecom-card:hover::before {
            opacity: 1;
        }

        .ecom-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .ecom-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #f59e0b;
        }

        .ecom-title h3 {
            font-size: 20px;
            color: #fff;
            margin-bottom: 5px;
        }

        .ecom-title span {
            font-size: 12px;
            color: var(--text-muted);
            background: rgba(255,255,255,0.05);
            padding: 2px 8px;
            border-radius: 10px;
        }

        .ecom-desc {
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

        .ecom-actions {
            display: flex;
            gap: 10px;
        }

        .btn-visit {
            flex-grow: 1;
            background: #f59e0b;
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
            color: #f59e0b;
            border: 1px solid #f59e0b;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: 0.2s;
        }
        
        .btn-proxy:hover {
            background: rgba(245, 158, 11, 0.1);
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
                <a href="social_media.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-world' style="font-size: 20px;"></i> 海外社交媒体
                </a>
                <a href="ecommerce.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-store' style="font-size: 20px; color: #f59e0b;"></i> 跨境电商导航
                </a>
            </nav>
            
            <div class="ad-banner" style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; border: 1px solid var(--border);">
                <h4 style="color: #f59e0b; margin-bottom: 5px; font-size: 14px;">🎉 光速云卖家特惠</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: #f59e0b; user-select: all;">AMM</strong></p>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">防关联纯净 IP，守护你的店铺。</p>
                <button onclick="window.open('index.html', '_blank')" style="width: 100%; padding: 8px; background: #f59e0b; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">立即购买防封专线</button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="social_media.html">社交媒体</a>
                    <a href="ecommerce.html" class="active">跨境电商出海</a>
                </nav>
            </header>

            <div class="page-container">
                <div class="page-header" style="text-align: center; margin-bottom: 40px; margin-top: 20px;">
                    <i class='bx bx-store' style="font-size: 60px; color: #f59e0b; margin-bottom: 15px;"></i>
                    <h1 style="font-size: 32px; margin-bottom: 15px;">全球跨境电商防封导航</h1>
                    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6;">
                        做跨境电商，IP 就是生命。一旦被平台判定为账号关联或欺诈，店铺里的钱可能瞬间被冻结！我们精选了各大平台入口，并提供最硬核的网络防封建议。
                    </p>
                </div>

                <div class="ecom-grid">
                    <!-- Amazon -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #ff9900;"><i class='bx bxl-amazon'></i></div>
                            <div class="ecom-title">
                                <h3>Amazon (亚马逊)</h3>
                                <span>全球第一跨境电商平台</span>
                            </div>
                        </div>
                        <p class="ecom-desc">跨境人绕不开的一座大山。流量极大，但平台规矩极多。店群玩家的终极战场，也是防关联风控最变态的平台。</p>
                        <div class="env-req strict">
                            网络要求：<span>死磕固定纯净 IP</span><br>
                            亚马逊抓“账号关联”是地狱级的！如果你用几千人共享的免费节点登录卖家后台，你的店铺 100% 会被连坐封号。必须购买防关联静态独享 IP。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://sellercentral.amazon.com/" target="_blank" class="btn-visit" style="background: #ff9900; color: #000;">卖家中心</a>
                            <a href="index.html" class="btn-proxy">获取静态独享 IP</a>
                        </div>
                    </div>

                    <!-- Shopify -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #95bf47;"><i class='bx bxl-shopify'></i></div>
                            <div class="ecom-title">
                                <h3>Shopify (独立站)</h3>
                                <span>DTC 品牌出海首选</span>
                            </div>
                        </div>
                        <p class="ecom-desc">不赚平台差价，自己的流量自己做主。最受资深跨境卖家欢迎的独立站建站系统，配合 FB/TikTok 投放效果最佳。</p>
                        <div class="env-req medium">
                            网络要求：<span>后台响应防掉线</span><br>
                            Shopify 后台操作频繁，如上传商品、管理订单等，需要极其稳定的网络连接。节点掉线会导致编辑一半的数据直接丢失。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://www.shopify.com/" target="_blank" class="btn-visit" style="background: #95bf47;">Shopify 后台</a>
                            <a href="index.html" class="btn-proxy">获取不掉线节点</a>
                        </div>
                    </div>

                    <!-- Shopee -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #ee4d2d;"><i class='bx bx-shopping-bag'></i></div>
                            <div class="ecom-title">
                                <h3>Shopee (虾皮)</h3>
                                <span>东南亚电商霸主</span>
                            </div>
                        </div>
                        <p class="ecom-desc">出海东南亚及拉美市场的首选平台。门槛相对较低，适合中小卖家以及无货源一件代发模式铺货起盘。</p>
                        <div class="env-req strict">
                            网络要求：<span>本地化原生节点</span><br>
                            做哪个国家的站点（如台湾、马来、印尼），就必须用对应国家的原生 IP 运营，否则极易被封控为虚假海外卖家。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://shopee.cn/" target="_blank" class="btn-visit" style="background: #ee4d2d;">虾皮卖家中心</a>
                            <a href="index.html" class="btn-proxy">获取亚洲本地节点</a>
                        </div>
                    </div>

                    <!-- Etsy -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #f1641e;"><i class='bx bx-gift'></i></div>
                            <div class="ecom-title">
                                <h3>Etsy</h3>
                                <span>手工艺与原创设计平台</span>
                            </div>
                        </div>
                        <p class="ecom-desc">高客单价、高利润的利基市场！专门销售原创手工、古董复古商品。欧美受众对品质要求极高，极度排斥工厂流水线货。</p>
                        <div class="env-req strict">
                            网络要求：<span>防秒封顶级住宅 IP</span><br>
                            Etsy 对中国卖家极不友好！注册新店“秒封”率高达 90%。绝对禁止使用机房云服务器 IP，只能使用欧美顶级住宅原生宽带 IP 伪装。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://www.etsy.com/sell" target="_blank" class="btn-visit" style="background: #f1641e;">Etsy 卖家入驻</a>
                            <a href="index.html" class="btn-proxy">获取原生住宅 IP</a>
                        </div>
                    </div>

                    <!-- Mercari -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #0066ff;"><i class='bx bx-store-alt'></i></div>
                            <div class="ecom-title">
                                <h3>Mercari (煤炉)</h3>
                                <span>日本最大闲置交易平台</span>
                            </div>
                        </div>
                        <p class="ecom-desc">日本版“闲鱼”，近年来国人闷声发大财的蓝海平台。二手商品、动漫周边和国内廉价小商品在日本极受欢迎。</p>
                        <div class="env-req strict">
                            网络要求：<span>变态级日本原生 IP</span><br>
                            煤炉仅限日本本土用户使用。对 IP 的检测到了令人发指的地步，连大部分付费 VPN 都能识别。必须购买极其小众的日本本土独享家庭 IP。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://jp.mercari.com/" target="_blank" class="btn-visit" style="background: #0066ff;">访问 Mercari</a>
                            <a href="index.html" class="btn-proxy">获取日本家庭 IP</a>
                        </div>
                    </div>

                    <!-- eBay -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #e53238;"><i class='bx bxl-ebay'></i></div>
                            <div class="ecom-title">
                                <h3>eBay</h3>
                                <span>老牌全球拍卖与零售</span>
                            </div>
                        </div>
                        <p class="ecom-desc">覆盖全球 190 个国家的老牌电商巨头。汽车配件、二手翻新电子产品和收藏品类目利润极其丰厚。</p>
                        <div class="env-req medium">
                            网络要求：<span>稳定防止店铺冻结</span><br>
                            eBay 经常秋后算账。如果运营期间频繁更换不同国家的节点 IP，很容易被判定为异地盗号从而直接冻结（Suspension）你的店铺资产。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://sellercenter.ebay.com/" target="_blank" class="btn-visit" style="background: #e53238;">eBay 卖家中心</a>
                            <a href="index.html" class="btn-proxy">获取防冻结专线</a>
                        </div>
                    </div>

                    <!-- Walmart -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #0071ce;"><i class='bx bx-cart'></i></div>
                            <div class="ecom-title">
                                <h3>Walmart (沃尔玛)</h3>
                                <span>北美最高门槛高净值平台</span>
                            </div>
                        </div>
                        <p class="ecom-desc">亚马逊的最强竞争对手。入驻门槛高，需要公司资质与过硬流水。卖家数量相对较少，不用疯狂内卷打价格战。</p>
                        <div class="env-req strict">
                            网络要求：<span>美国本土高净值 IP</span><br>
                            主打北美市场，登录 WFS 后台和处理买家客诉，必须使用干净、长期不变更的美国本土原生网络，确保本土商户信誉。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://marketplace.walmart.com/" target="_blank" class="btn-visit" style="background: #0071ce;">沃尔玛入驻</a>
                            <a href="index.html" class="btn-proxy">获取美国本土 IP</a>
                        </div>
                    </div>

                    <!-- Coupang -->
                    <div class="ecom-card">
                        <div class="ecom-header">
                            <div class="ecom-icon" style="color: #ba000d;"><i class='bx bx-box'></i></div>
                            <div class="ecom-title">
                                <h3>Coupang (酷澎)</h3>
                                <span>韩国电商不可逾越之巅</span>
                            </div>
                        </div>
                        <p class="ecom-desc">韩国最大的电商平台，被称为“韩国亚马逊”。韩国人购买力强，喜欢网购，客单价高，是出海日韩的必争之地。</p>
                        <div class="env-req strict">
                            网络要求：<span>韩国原生节点必备</span><br>
                            无论从前端抓取竞品数据，还是登录后台管理订单（WING），使用海外普通节点延迟极高且容易遭遇访问限制，韩国原生线路是基本盘。
                        </div>
                        <div class="ecom-actions">
                            <a href="https://marketplace.coupangcorp.com/s/" target="_blank" class="btn-visit" style="background: #ba000d;">Coupang 后台</a>
                            <a href="index.html" class="btn-proxy">获取韩国原生节点</a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'ecommerce.html'), ecommerceHtml);
console.log('Created ecommerce.html');

// Inject the nav link into all main files
const filesToUpdate = ['index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 'ai_tools.html', 'social_media.html'];
const newLinkHTML = `                <a href="ecommerce.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-store' style="font-size: 20px;"></i> 跨境电商导航
                </a>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        if (!content.includes('ecommerce.html')) {
            // Find the social_media.html link and inject after it
            const targetStr = `                <a href="social_media.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-world' style="font-size: 20px;"></i> 海外社交媒体
                </a>`;
            
            const targetStrActive = `                <a href="social_media.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-world' style="font-size: 20px; color: #3b82f6;"></i> 海外社交媒体
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
