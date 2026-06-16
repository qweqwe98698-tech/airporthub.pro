const fs = require('fs');
const path = require('path');

const socialTools = [
    { id: "tiktok", name: "TikTok", icon: "bxl-tiktok", color: "#333333", link: "https://www.tiktok.com/" },
    { id: "youtube", name: "YouTube", icon: "bxl-youtube", color: "#ff0000", link: "https://www.youtube.com/" },
    { id: "twitter", name: "X (Twitter)", icon: "bxl-twitter", color: "#1da1f2", link: "https://twitter.com/" },
    { id: "telegram", name: "Telegram", icon: "bxl-telegram", color: "#0088cc", link: "https://web.telegram.org/" },
    { id: "instagram", name: "Instagram", icon: "bxl-instagram", color: "#e1306c", link: "https://www.instagram.com/" },
    { id: "reddit", name: "Reddit", icon: "bxl-reddit", color: "#ff4500", link: "https://www.reddit.com/" },
    { id: "netflix", name: "Netflix", icon: "bxl-netlify", color: "#e50914", link: "https://www.netflix.com/" },
    { id: "onlyfans", name: "OnlyFans", icon: "bx-lock-open-alt", color: "#00aff0", link: "https://onlyfans.com/" },
    { id: "disney", name: "Disney+", icon: "bx-movie-play", color: "#113ccf", link: "https://www.disneyplus.com/" },
    { id: "spotify", name: "Spotify", icon: "bxl-spotify", color: "#1ed760", link: "https://www.spotify.com/" },
    { id: "twitch", name: "Twitch", icon: "bxl-twitch", color: "#9146ff", link: "https://www.twitch.tv/" },
    { id: "hbomax", name: "Max (HBO)", icon: "bx-film", color: "#5c00b0", link: "https://www.max.com/" },
    { id: "facebook", name: "Facebook", icon: "bxl-facebook-circle", color: "#1877f2", link: "https://www.facebook.com/" },
    { id: "discord", name: "Discord", icon: "bxl-discord", color: "#5865f2", link: "https://discord.com/" },
    { id: "pinterest", name: "Pinterest", icon: "bxl-pinterest", color: "#e60023", link: "https://www.pinterest.com/" },
    { id: "whatsapp", name: "WhatsApp", icon: "bxl-whatsapp", color: "#25d366", link: "https://www.whatsapp.com/" },
    { id: "medium", name: "Medium", icon: "bxl-medium", color: "#333333", link: "https://medium.com/" },
    { id: "line", name: "LINE", icon: "bx-message-rounded-dots", color: "#00c300", link: "https://line.me/" }
];

const ecomTools = [
    { id: "amazon", name: "Amazon", icon: "bxl-amazon", color: "#ff9900", link: "https://sellercentral.amazon.com/" },
    { id: "shopify", name: "Shopify", icon: "bxl-shopify", color: "#95bf47", link: "https://www.shopify.com/" },
    { id: "shopee", name: "Shopee", icon: "bx-shopping-bag", color: "#ee4d2d", link: "https://shopee.cn/" },
    { id: "etsy", name: "Etsy", icon: "bx-gift", color: "#f1641e", link: "https://www.etsy.com/sell" },
    { id: "mercari", name: "Mercari", icon: "bx-store-alt", color: "#0066ff", link: "https://jp.mercari.com/" },
    { id: "ebay", name: "eBay", icon: "bxl-ebay", color: "#e53238", link: "https://sellercenter.ebay.com/" },
    { id: "walmart", name: "Walmart", icon: "bx-cart", color: "#0071ce", link: "https://marketplace.walmart.com/" },
    { id: "coupang", name: "Coupang", icon: "bx-box", color: "#ba000d", link: "https://marketplace.coupangcorp.com/s/" },
    { id: "tiktokshop", name: "TikTok Shop", icon: "bx-shopping-bag", color: "#333333", link: "https://seller.tiktok.com/" },
    { id: "aliexpress", name: "AliExpress", icon: "bx-globe", color: "#ff4747", link: "https://best.aliexpress.com/" },
    { id: "wayfair", name: "Wayfair", icon: "bx-home-alt", color: "#7f187f", link: "https://partners.wayfair.com/" },
    { id: "poshmark", name: "Poshmark", icon: "bx-closet", color: "#8f082f", link: "https://poshmark.com/" },
    { id: "lazada", name: "Lazada", icon: "bx-basket", color: "#0f136d", link: "https://sellercenter.lazada.com/" },
    { id: "rakuten", name: "Rakuten", icon: "bx-yen", color: "#bf0000", link: "https://www.rakuten.co.jp/" },
    { id: "ozon", name: "Ozon", icon: "bx-package", color: "#005bff", link: "https://seller.ozon.ru/" },
    { id: "zalando", name: "Zalando", icon: "bx-shopping-bag", color: "#ff6900", link: "https://www.zalando.com/" },
    { id: "temu", name: "Temu", icon: "bx-purchase-tag-alt", color: "#ff4500", link: "https://www.temu.com/" },
    { id: "target", name: "Target+", icon: "bx-target-lock", color: "#cc0000", link: "https://www.target.com/" }
];

const cryptoTools = [
    { id: "binance", name: "Binance", icon: "bx-coin-stack", color: "#f3ba2f", link: "https://www.binance.com/" },
    { id: "okx", name: "OKX", icon: "bx-hive", color: "#333333", link: "https://www.okx.com/" },
    { id: "dexscreener", name: "DexScreener", icon: "bx-line-chart", color: "#1a1a1a", link: "https://dexscreener.com/" },
    { id: "tradingview", name: "TradingView", icon: "bx-chart", color: "#2962ff", link: "https://www.tradingview.com/" },
    { id: "metamask", name: "MetaMask", icon: "bx-wallet", color: "#f6851b", link: "https://metamask.io/" },
    { id: "bybit", name: "Bybit", icon: "bx-candles", color: "#ffb11a", link: "https://www.bybit.com/" },
    { id: "uniswap", name: "Uniswap", icon: "bx-transfer-alt", color: "#ff007a", link: "https://app.uniswap.org/" },
    { id: "coinmarketcap", name: "CoinMarketCap", icon: "bx-pie-chart-alt-2", color: "#12161c", link: "https://coinmarketcap.com/" },
    { id: "gateio", name: "Gate.io", icon: "bx-store-alt", color: "#0d8580", link: "https://www.gate.io/" },
    { id: "bitget", name: "Bitget", icon: "bx-trending-up", color: "#1eb9b4", link: "https://www.bitget.com/" },
    { id: "opensea", name: "OpenSea", icon: "bx-image-alt", color: "#2081e2", link: "https://opensea.io/" },
    { id: "etherscan", name: "Etherscan", icon: "bx-search-alt", color: "#3498db", link: "https://etherscan.io/" },
    { id: "htx", name: "HTX", icon: "bxl-sketch", color: "#0056ff", link: "https://www.htx.com/" },
    { id: "coinglass", name: "CoinGlass", icon: "bx-bar-chart-square", color: "#f7a600", link: "https://www.coinglass.com/" },
    { id: "pancakeswap", name: "PancakeSwap", icon: "bx-dish", color: "#1fc7d4", link: "https://pancakeswap.finance/" },
    { id: "coingecko", name: "CoinGecko", icon: "bx-ghost", color: "#8cc63f", link: "https://www.coingecko.com/" },
    { id: "aave", name: "Aave", icon: "bx-building-house", color: "#b6509e", link: "https://aave.com/" },
    { id: "kucoin", name: "KuCoin", icon: "bx-store", color: "#24af8c", link: "https://www.kucoin.com/" }
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

function generateCategoryArticles(tools, categoryId, categoryName, icon, backLink, bgColor, titlePrefix) {
    let gridHtml = '';
    
    tools.forEach((tool, index) => {
        let readCount = (12 + Math.random() * 8).toFixed(1) + 'w';
        let title = '【最新防封】' + titlePrefix + ' ' + tool.name + ' 全面解析与原生网络部署实战';
        let fileName = 'tutorial_' + categoryId + '_' + tool.id + '.html';
        
        let painPoint = categoryId === 'social' ? '社交平台对 IP 跨越的极度零容忍，一秒回到解放前' : 
                        categoryId === 'ecom' ? '跨境电商极为变态的关联风控，同 IP 立刻死店冻结资金' : 
                        '数字货币交易所疯狂的地域清退与黑名单锁区机制';
                        
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
            '<a href="' + backLink + '" style="display: flex; align-items: center; gap: 5px;"><i class="bx bx-arrow-back"></i> 返回 ' + categoryName + '</a>\n' +
            '</nav>\n</header>\n' +
            '<div class="article-read-container">\n' +
            '<div class="article-header">\n' +
            '<h1>' + title + '</h1>\n' +
            '<div class="meta-tags">\n' +
            '<span><i class="' + icon + '"></i> ' + categoryName + ' 专区</span>\n' +
            '<span><i class="bx bx-calendar"></i> 2026-06-16 重磅更新</span>\n' +
            '<span><i class="bx bx-show"></i> ' + readCount + ' 次深度阅读</span>\n' +
            '<span><i class="bx bx-shield"></i> 风控等级：极高</span>\n' +
            '</div>\n</div>\n' +
            '<div class="article-body">\n' +
            '<p>在全球化掘金的 2026 年，无论是做流量变现、跨境出海还是链上冲浪，<strong>' + tool.name + '</strong> 都是你绝对无法避开的核心战场。</p>\n' +
            '<p>但在国内访问海外平台时，90% 的新手都会死在一个极其隐蔽的坑里：<strong>' + painPoint + '</strong>。</p>\n' +
            '<p>你以为买个随便的梯子就能万事大吉？大错特错！海外顶级平台的风控系统比你想象的聪明百倍。他们不仅会检测你的 IP，还会通过 WebRTC 泄漏、DNS 污染以及 ASN 广播库，瞬间识别出你是不是使用了“代理”。本篇万字干货，将从底层逻辑出发，为你构建一道密不透风的网络防火墙。</p>\n' +
    
            '<h2>一、致命错误：为什么你的 ' + tool.name + ' 账号总是被封/限流？</h2>\n' +
            '<p>无数血泪教训证明，毁掉一个账号最快的方法，就是使用所谓的“免费节点”或低端中转机场。这些节点的 IP 通常有以下几个致命缺陷：</p>\n' +
            '<ul>\n' +
            '<li><strong>机房 IP 污染 (Datacenter IP Blacklist)：</strong> 很多廉价机场直接购买阿里云国际、DigitalOcean 等廉价机房 VPS 搭建。这些 IP 段早就被海外平台拉黑，你一登录，系统直接判定你是“机器脚本”。</li>\n' +
            '<li><strong>地理位置瞬移 (Geo-Jumping)：</strong> 昨天 IP 还在洛杉矶，今天就跳到了法兰克福。对于普通人类来说这是不可能的物理移动。系统会立即判定账号被盗或处于高风险环境，直接锁定。</li>\n' +
            '<li><strong>万人骑的共享池：</strong> 一个节点里挤了几千人，其中只要有几个人在平台上有违规行为（如发垃圾广告、刷单），这个 IP 就会被标记为“Fraud IP”。连在同一个 IP 下的你也只会被连坐秒封。</li>\n' +
            '</ul>\n' +
    
            '<div class="warning-box">\n' +
            '<strong>血亏警示：免费的最贵！</strong>\n' +
            '<p>对于任何涉及到赚钱、资产或长期积累粉丝的业务，<strong>网络基建的钱绝对不能省</strong>！一个因为 IP 关联被封停的店铺或钱包，损失可能是你几十年订阅机场的钱。不要在垃圾节点上赌你的运气！</p>\n' +
            '</div>\n' +
    
            '<h2>二、破局之道：获取纯净的独立 / 原生住宅 IP</h2>\n' +
            '<p>要想完美伪装成海外本地真实用户，你需要一条极其干净的<strong>原生住宅 IP (Residential IP)</strong> 或者是独享的高端静态路由专线。</p>\n' +
            '<div class="info-box">\n' +
            '<strong>核心选网策略：</strong>\n' +
            '<p>1. 立即访问我们的 <a href="index.html" style="color: #3b82f6; text-decoration: underline;">全球极速防封测速看板</a>。</p>\n' +
            '<p>2. 根据你的业务，筛选 <strong>“静态独享”</strong> 或 <strong>“解锁原生流媒体/电商”</strong> 的顶级 Tier 1 机场。</p>\n' +
            '<p>3. <strong>固定策略：</strong> 买好后，在客户端（如 Clash）中选择一个特定的国家节点（如台湾或美国），并长期固定使用！绝不随意切换！建议直接将该节点设置为电脑/手机的全局代理直连！</p>\n' +
            '</div>\n' +
    
            '<h2>三、操作指南：防止设备特征指纹泄露</h2>\n' +
            '<p>除了 IP 之外，你的设备指纹（Device Fingerprint）也会出卖你。操作 ' + tool.name + ' 前，请务必执行以下步骤：</p>\n' +
            '<div class="step-box">\n' +
            '<div class="step-item">\n' +
            '<h4>关闭系统级定位与语言同步</h4>\n' +
            '<p>在手机或电脑设置中，彻底关闭 GPS 隐私定位服务。将系统的首选语言改为英语 (English-US)，时区 (Timezone) 强行修改为你购买的节点所在的时区（如美国东部时间）。</p>\n' +
            '</div>\n' +
            '<div class="step-item">\n' +
            '<h4>使用防关联浏览器 (如指纹浏览器)</h4>\n' +
            '<p>如果你需要同时运营多个账号，绝对不要在同一个 Chrome 浏览器里切换！强烈建议使用 AdsPower、Hubstudio 等专业指纹浏览器，为每个账号分配独立的浏览器环境和固定的代理 IP。</p>\n' +
            '</div>\n' +
            '<div class="step-item">\n' +
            '<h4>全链路 DNS 防泄漏检测</h4>\n' +
            '<p>登录网站之前，请先访问 <code>whoer.net</code> 或 <code>ipleak.net</code>，检查你的伪装度是否达到 100%。如果发现 DNS 服务器暴露出你的国内宽带服务商（如中国电信），请立即去代理软件中强制开启 "Remote DNS" 或 "Fake-IP" 模式。</p>\n' +
            '</div>\n' +
            '</div>\n' +
    
            '<h2>四、高频风控 FAQ 解答</h2>\n' +
            '<div class="faq-item">\n' +
            '<h4>Q: 账号突然被封 / 限制登录，还能救吗？</h4>\n' +
            '<p>A: 如果是因为使用万人骑机房 IP 导致的批量封禁，申诉成功的概率极低。请吸取教训，更换全新设备环境和顶级原生 IP，重新起号注册。切忌在旧环境下继续挣扎。</p>\n' +
            '</div>\n' +
            '<div class="faq-item">\n' +
            '<h4>Q: 我买的高级机场节点，为什么还是提示不在服务区？</h4>\n' +
            '<p>A: 极大概率是因为你的浏览器缓存 (Cookies/Local Storage) 还残留着你之前使用国内网络或被拉黑 IP 时的位置记录。请清除全部缓存或直接使用无痕窗口重新打开。</p>\n' +
            '</div>\n' +
    
            '<div class="inline-ad">\n' +
            '<h3>🔥 彻底终结封号焦虑，护航全球业务</h3>\n' +
            '<p>防封号的核心，就是无限趋近于真实的海外用户环境。别再到处寻找劣质的廉价梯子了，时间与账号安全无价。点击下方按钮，进入我们的内部实测看板，挑选那些真正稳定、抗封锁的高净值专线节点。</p>\n' +
            '<a href="index.html" class="btn-buy" rel="nofollow">🚀 立即获取独享原生防封专线 🚀</a>\n' +
            '</div>\n' +
            '<p style="text-align:center; color:var(--text-muted); font-size:14px; margin-top:50px;"><em>免责声明：本教程仅供网络技术研究与出海业务学习交流。请遵守相关法律法规，合法合规使用国际互联网专线。</em></p>\n' +
            '</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
    
        fs.writeFileSync(path.join(__dirname, fileName), content);
        console.log('✅ 生成干货文章: ' + fileName);
    
        newArticlesForHub += '<a href="' + fileName + '" class="article-card">\n' +
            '<div class="article-icon" style="color: ' + tool.color + '; background: ' + tool.color + '15;"><i class="' + tool.icon + '"></i></div>\n' +
            '<h3>' + title + '</h3>\n' +
            '<p>全球化视野下，' + painPoint + '。本文为你深度揭秘官方防风控机制，彻底解决网络环境被污染、限流、封号的问题。</p>\n' +
            '<div class="article-meta">\n' +
            '<span><i class="bx bx-bar-chart"></i> ' + readCount + ' 阅读</span>\n' +
            '<span class="article-meta-link" style="color: ' + tool.color + ';">获取保姆级攻略 <i class="bx bx-right-arrow-alt"></i></span>\n' +
            '</div>\n</a>\n';
            
        // Construct the new HTML grid item for the category page
        let shortName = tool.name.split(' ')[0];
        if (shortName === 'X') shortName = 'Twitter';
        if (shortName === 'TikTok') shortName = 'TikTok';
        if (shortName === 'Target+') shortName = 'Target';
        
        let reqClass = (index % 3 === 0) ? "strict" : "medium";
        
        gridHtml += '<div class="' + categoryId + '-card">\n' +
            '<div class="' + categoryId + '-header">\n' +
            '<div class="' + categoryId + '-icon" style="color: ' + tool.color + '; border: 1px solid rgba(255,255,255,0.1);"><i class="' + tool.icon + '"></i></div>\n' +
            '<div class="' + categoryId + '-title">\n' +
            '<h3>' + tool.name + '</h3>\n' +
            '<span>全球必备出海工具</span>\n' +
            '</div>\n</div>\n' +
            '<p class="' + categoryId + '-desc">在这个充满风控与挑战的全球平台中，普通的网络代理极易导致无法挽回的账号损失。请务必查看我们的网络防封配置指南。</p>\n' +
            '<div class="env-req ' + reqClass + '">\n' +
            '网络要求：<span>极度纯净独享 IP</span><br>\n' +
            '为了避免连坐封号，必须配置原生级别的独享住宅 IP，拒绝万人骑免费机场，确保资产与账号绝对安全。\n' +
            '</div>\n' +
            '<div class="' + categoryId + '-actions" style="display: flex; flex-direction: column; gap: 10px;">\n' +
            '<div style="display: flex; gap: 10px;">\n' +
            '<a href="' + tool.link + '" target="_blank" class="btn-visit" style="background: ' + tool.color + '; flex: 1; text-align: center; color: #fff;">访问 ' + shortName + '</a>\n' +
            '<a href="' + fileName + '" class="btn-proxy" style="flex: 1; border-color: ' + tool.color + '; color: ' + tool.color + '; text-align: center; background: ' + tool.color + '15;">📖 防封攻略</a>\n' +
            '</div>\n' +
            '<a href="index.html" class="btn-proxy" style="width: 100%; text-align: center; box-sizing: border-box;">获取高端原生防封节点</a>\n' +
            '</div>\n</div>\n';
    });
    
    return gridHtml;
}

// Generate for all 3 categories
let socialGridHtml = generateCategoryArticles(socialTools, 'social', '社交媒体', 'bx bx-world', 'social_media.html', '#0ea5e9', '玩转海外社交');
let ecomGridHtml = generateCategoryArticles(ecomTools, 'ecom', '跨境电商', 'bx bx-store', 'ecommerce.html', '#f59e0b', '跨境店群必备');
let cryptoGridHtml = generateCategoryArticles(cryptoTools, 'crypto', '数字货币', 'bx bx-bitcoin', 'crypto.html', '#10b981', '币圈安全实战');

// Update social_media.html
let socialHtml = fs.readFileSync(path.join(__dirname, 'social_media.html'), 'utf8');
let finalSocialHtml = socialHtml.substring(0, socialHtml.indexOf('<div class="social-grid">') + 25) + '\n' + socialGridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'social_media.html'), finalSocialHtml);
console.log('✅ social_media.html 重构完毕！18个社交工具增加专属防封按钮。');

// Update ecommerce.html
let ecomHtml = fs.readFileSync(path.join(__dirname, 'ecommerce.html'), 'utf8');
let finalEcomHtml = ecomHtml.substring(0, ecomHtml.indexOf('<div class="ecom-grid">') + 23) + '\n' + ecomGridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'ecommerce.html'), finalEcomHtml);
console.log('✅ ecommerce.html 重构完毕！18个电商工具增加专属防关联按钮。');

// Update crypto.html
let cryptoHtml = fs.readFileSync(path.join(__dirname, 'crypto.html'), 'utf8');
let finalCryptoHtml = cryptoHtml.substring(0, cryptoHtml.indexOf('<div class="crypto-grid">') + 25) + '\n' + cryptoGridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'crypto.html'), finalCryptoHtml);
console.log('✅ crypto.html 重构完毕！18个币圈工具增加防清退按钮。');

// Inject all 54 into articles.html
let articlesHtml = fs.readFileSync(path.join(__dirname, 'articles.html'), 'utf8');
let gridStartIndex = articlesHtml.indexOf('<div class="article-grid">');
if(gridStartIndex !== -1) {
    let preGrid = articlesHtml.substring(0, gridStartIndex + 26);
    let previousDevTutorialIndex = articlesHtml.indexOf('<a href="tutorial_dev_antigravity.html"');
    if (previousDevTutorialIndex === -1) {
        previousDevTutorialIndex = articlesHtml.indexOf('<a href="ai_tutorial_chatgpt.html"');
    }
    
    let postGrid = articlesHtml.substring(previousDevTutorialIndex);
    articlesHtml = preGrid + '\n' + newArticlesForHub + '\n' + postGrid;
    fs.writeFileSync(path.join(__dirname, 'articles.html'), articlesHtml);
    console.log('✅ articles.html 列表已完美更新，新增 54 篇长尾干货！');
}
