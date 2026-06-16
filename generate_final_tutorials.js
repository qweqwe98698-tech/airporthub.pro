const fs = require('fs');
const path = require('path');

const streamingTools = [
    { id: "netflix", name: "Netflix", icon: "bx-movie", color: "#E50914", link: "https://www.netflix.com/" },
    { id: "disney", name: "Disney+", icon: "bx-camera-movie", color: "#113CCF", link: "https://www.disneyplus.com/" },
    { id: "spotify", name: "Spotify", icon: "bx-headphone", color: "#1DB954", link: "https://www.spotify.com/" },
    { id: "hbomax", name: "HBO Max", icon: "bx-tv", color: "#5b209a", link: "https://www.max.com/" },
    { id: "youtube", name: "YouTube Premium", icon: "bxl-youtube", color: "#FF0000", link: "https://www.youtube.com/premium" },
    { id: "hulu", name: "Hulu", icon: "bx-play-circle", color: "#1ce783", link: "https://www.hulu.com/" },
    { id: "primevideo", name: "Prime Video", icon: "bx-package", color: "#00A8E1", link: "https://www.primevideo.com/" },
    { id: "appletv", name: "Apple TV+", icon: "bxl-apple", color: "#000000", link: "https://tv.apple.com/" },
    { id: "crunchyroll", name: "Crunchyroll", icon: "bx-smile", color: "#F47521", link: "https://www.crunchyroll.com/" },
    { id: "twitch", name: "Twitch", icon: "bxl-twitch", color: "#9146FF", link: "https://www.twitch.tv/" },
    { id: "tiktoklive", name: "Tiktok Live", icon: "bxl-tiktok", color: "#000000", link: "https://www.tiktok.com/live" },
    { id: "paramount", name: "Paramount+", icon: "bx-film", color: "#0064FF", link: "https://www.paramountplus.com/" }
];

const gamingTools = [
    { id: "steam", name: "Steam", icon: "bxl-steam", color: "#171a21", link: "https://store.steampowered.com/" },
    { id: "valorant", name: "Valorant", icon: "bx-target-lock", color: "#ff4655", link: "https://playvalorant.com/" },
    { id: "discord", name: "Discord", icon: "bxl-discord", color: "#5865F2", link: "https://discord.com/" },
    { id: "apex", name: "Apex Legends", icon: "bx-crosshair", color: "#da292a", link: "https://www.ea.com/games/apex-legends" },
    { id: "lol", name: "League of Legends", icon: "bx-sword", color: "#c8aa6e", link: "https://www.leagueoflegends.com/" },
    { id: "epic", name: "Epic Games", icon: "bx-joystick", color: "#313131", link: "https://store.epicgames.com/" },
    { id: "battlenet", name: "Battle.net", icon: "bx-shield", color: "#00aeff", link: "https://us.shop.battle.net/" },
    { id: "xboxcloud", name: "Xbox Cloud", icon: "bx-cloud", color: "#107C10", link: "https://www.xbox.com/play" },
    { id: "geforcenow", name: "GeForce NOW", icon: "bx-laptop", color: "#76b900", link: "https://www.nvidia.com/en-us/geforce-now/" },
    { id: "pubg", name: "PUBG", icon: "bx-run", color: "#f2a900", link: "https://pubg.com/" },
    { id: "playstation", name: "PlayStation", icon: "bx-station", color: "#003791", link: "https://store.playstation.com/" },
    { id: "roblox", name: "Roblox", icon: "bx-cube-alt", color: "#000000", link: "https://www.roblox.com/" }
];

const designTools = [
    { id: "pixiv", name: "Pixiv", icon: "bx-paint", color: "#0096fa", link: "https://www.pixiv.net/" },
    { id: "pinterest", name: "Pinterest", icon: "bxl-pinterest", color: "#E60023", link: "https://www.pinterest.com/" },
    { id: "behance", name: "Behance", icon: "bxl-behance", color: "#1769ff", link: "https://www.behance.net/" },
    { id: "artstation", name: "ArtStation", icon: "bx-brush", color: "#13AFF0", link: "https://www.artstation.com/" },
    { id: "figma", name: "Figma", icon: "bxl-figma", color: "#F24E1E", link: "https://www.figma.com/" },
    { id: "midjourney", name: "Midjourney", icon: "bx-bot", color: "#666666", link: "https://www.midjourney.com/" },
    { id: "nyaa", name: "Nyaa", icon: "bx-magnet", color: "#2b90d9", link: "https://nyaa.si/" },
    { id: "dlsite", name: "DLsite", icon: "bx-cart-alt", color: "#0059c1", link: "https://www.dlsite.com/" },
    { id: "deviantart", name: "DeviantArt", icon: "bx-droplet", color: "#05cc47", link: "https://www.deviantart.com/" },
    { id: "vimeo", name: "Vimeo", icon: "bxl-vimeo", color: "#1AB7EA", link: "https://vimeo.com/" },
    { id: "patreon", name: "Patreon", icon: "bxl-patreon", color: "#FF424D", link: "https://www.patreon.com/" },
    { id: "gumroad", name: "Gumroad", icon: "bx-shopping-bag", color: "#000000", link: "https://gumroad.com/" }
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
        let readCount = (15 + Math.random() * 5).toFixed(1) + 'w';
        let title = '【硬核干货】' + titlePrefix + ' ' + tool.name + ' 全面解锁与专线配置实战';
        let fileName = 'tutorial_' + categoryId + '_' + tool.id + '.html';
        
        let painPoint = categoryId === 'stream' ? '流媒体平台的 4K 降级、无尽的缓冲以及变态的区域 IP 解锁限制' : 
                        categoryId === 'game' ? '电竞游戏致命的卡顿、丢包橡胶人、以及动辄几百的 Ping 延迟' : 
                        '高并发加载海量超清原图/视频时极度的卡顿与网络审计阻断';
                        
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
            '<span><i class="bx bx-tachometer"></i> 带宽要求：极高</span>\n' +
            '</div>\n</div>\n' +
            '<div class="article-body">\n' +
            '<p>随着全球数字娱乐的全面升级，无论是沉浸在影视盛宴、畅享电竞激情，还是寻找设计灵感，<strong>' + tool.name + '</strong> 都是不可或缺的顶级工具。</p>\n' +
            '<p>然而，国内用户在访问时，最大的痛点就是：<strong>' + painPoint + '</strong>。</p>\n' +
            '<p>如果你还在忍受“转圈圈”、“访问被拒绝”或是“红信封号”的折磨，那么你缺少的不是更好的电脑，而是一条真正符合业务需求的顶级网络专线。本文将带你彻底打破网络壁垒，实现零延迟、真 4K 的畅快体验。</p>\n' +
    
            '<h2>一、为什么你的 ' + tool.name + ' 体验如此糟糕？</h2>\n' +
            '<p>劣质的机场或所谓的“免费加速器”往往存在以下致命缺陷：</p>\n' +
            '<ul>\n' +
            '<li><strong>没有原生 IP (Non-Native IP)：</strong> 对于流媒体或部分严格的社区，一旦发现你的 IP 属于数据中心 (Datacenter)，就会直接屏蔽，显示“您所在的地区不可用”或剥夺高清画质。</li>\n' +
            '<li><strong>无 QoS 保障与超售带宽：</strong> 几千人挤在一条 1Gbps 的线路上。到了晚高峰，带宽被严重挤占，你的视频连 480P 都卡，游戏更是疯狂丢包。</li>\n' +
            '<li><strong>没有 IPLC/IEPL 专线：</strong> 跨国网络经过无数个公网路由节点，物理距离带来的延迟和丢包无法避免。对于 FPS 游戏或高频同步，这是致命伤。</li>\n' +
            '</ul>\n' +
    
            '<div class="warning-box">\n' +
            '<strong>体验警示：别让劣质网络毁了你的娱乐时光！</strong>\n' +
            '<p>你花了几百块买游戏，充了高级会员，甚至买了上万的显卡，却因为舍不得每个月几十块钱的优质网络而疯狂坐牢？这不是省钱，这是在浪费你宝贵的生命！</p>\n' +
            '</div>\n' +
    
            '<h2>二、硬核破局：获取专属的电竞级 / 流媒体原生专线</h2>\n' +
            '<p>想要完美驾驭 <strong>' + tool.name + '</strong>，你需要的是对症下药的网络解决方案：</p>\n' +
            '<div class="info-box">\n' +
            '<strong>网络选型指南：</strong>\n' +
            '<p>1. 如果是影视流媒体：必须选择标注了 <strong>“原生解锁”</strong> 或 <strong>“家宽 IP”</strong> 的节点，首选美国、新加坡、香港。</p>\n' +
            '<p>2. 如果是电竞游戏：必须选择 <strong>“IPLC / IEPL 专线”</strong>，且必须支持 <strong>UDP 转发</strong>，确保语音不黑麦，子弹无延迟。</p>\n' +
            '<p>3. 如果是设计与二次元图库：必须选择 <strong>大带宽 (Gbps级别)</strong> 节点，保证瀑布流图片秒开不转圈。</p>\n' +
            '</div>\n' +
    
            '<h2>三、操作实战指南</h2>\n' +
            '<p>配置好顶级网络后，请按以下步骤优化你的客户端体验：</p>\n' +
            '<div class="step-box">\n' +
            '<div class="step-item">\n' +
            '<h4>客户端路由分流设置 (Rule-Based Routing)</h4>\n' +
            '<p>不要使用全局代理！在 Clash/V2ray 客户端中开启“规则模式 (Rule)”。这样国内流量走直连，只有访问海外平台时才走专线，既不影响微信/淘宝，又能保证专线速度最大化。</p>\n' +
            '</div>\n' +
            '<div class="step-item">\n' +
            '<h4>强制开启 UDP 代理 (针对游戏玩家)</h4>\n' +
            '<p>在代理软件的高级设置中，找到并勾选 "Enable UDP" 或 "UDP Proxy"。这对于游戏联机、Discord 语音和云游戏串流是绝对的刚需！</p>\n' +
            '</div>\n' +
            '<div class="step-item">\n' +
            '<h4>硬件级加速：配置软路由 (可选)</h4>\n' +
            '<p>如果你是主机玩家 (PS5/Xbox/Switch) 或者智能电视用户，最好的方案是将机场订阅配置在 OpenWrt 软路由中，实现全屋网络接管，设备开机即享极速网络。</p>\n' +
            '</div>\n' +
            '</div>\n' +
    
            '<h2>四、常见问题解答 FAQ</h2>\n' +
            '<div class="faq-item">\n' +
            '<h4>Q: 购买了原生节点，为什么网页还是显示区域限制？</h4>\n' +
            '<p>A: 1. 浏览器的位置缓存未清除。2. DNS 被污染，请在代理软件中配置 DNS 防泄漏。3. 电脑系统的时区和语言没有与节点保持一致。</p>\n' +
            '</div>\n' +
            '<div class="faq-item">\n' +
            '<h4>Q: 专线和普通中转有什么区别？</h4>\n' +
            '<p>A: 普通中转就像是坐公交车，随时可能堵车；而 IPLC 专线就像是为你单独修了一条从中国直达海外的高速公路，绝不堵车，且不受防火墙干扰。</p>\n' +
            '</div>\n' +
    
            '<div class="inline-ad">\n' +
            '<h3>🔥 彻底告别转圈与高延迟，极速冲浪</h3>\n' +
            '<p>别再浪费时间寻找那些虚假宣传的劣质梯子了。点击下方按钮，进入我们的内部实测看板，挑选全网公认最稳定、速度最快、解锁最全的高端机场专线。</p>\n' +
            '<a href="index.html" class="btn-buy" rel="nofollow">🚀 立即获取全网顶尖解锁专线 🚀</a>\n' +
            '</div>\n' +
            '<p style="text-align:center; color:var(--text-muted); font-size:14px; margin-top:50px;"><em>免责声明：本教程仅供网络技术研究与交流。请遵守相关法律法规，合法合规使用国际互联网专线。</em></p>\n' +
            '</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
    
        fs.writeFileSync(path.join(__dirname, fileName), content);
        console.log('✅ 生成干货文章: ' + fileName);
    
        newArticlesForHub += '<a href="' + fileName + '" class="article-card">\n' +
            '<div class="article-icon" style="color: ' + tool.color + '; background: ' + tool.color + '15;"><i class="' + tool.icon + '"></i></div>\n' +
            '<h3>' + title + '</h3>\n' +
            '<p>深度解析 ' + painPoint + '。本文为你提供最硬核的网络配置方案，彻底解决访问受限、高延迟与无限加载的问题。</p>\n' +
            '<div class="article-meta">\n' +
            '<span><i class="bx bx-bar-chart"></i> ' + readCount + ' 阅读</span>\n' +
            '<span class="article-meta-link" style="color: ' + tool.color + ';">获取保姆级攻略 <i class="bx bx-right-arrow-alt"></i></span>\n' +
            '</div>\n</a>\n';
            
        // Construct the new HTML grid item for the category page
        let shortName = tool.name.split(' ')[0];
        if (shortName === 'X') shortName = 'Twitter';
        if (shortName === 'TikTok') shortName = 'TikTok';
        if (tool.name === 'Apple TV+') shortName = 'Apple TV';
        if (tool.name === 'YouTube Premium') shortName = 'YouTube';
        if (tool.name === 'Apex Legends') shortName = 'Apex';
        if (tool.name === 'League of Legends') shortName = 'LOL';
        
        let reqClass = (index % 3 === 0) ? "strict" : "medium";
        
        // Different layout logic since the AI dev card HTML structure in streaming/gaming/design is a bit different
        gridHtml += '<div class="ai-dev-card">\n' +
            '<div class="ai-dev-header">\n' +
            '<div class="ai-dev-icon" style="color: ' + (tool.color === '#ffffff' ? '#000' : '#fff') + '; background: ' + tool.color + '; border: 1px solid rgba(255,255,255,0.1);"><i class="' + tool.icon + '"></i></div>\n' +
            '<div class="ai-dev-title">\n' +
            '<h3>' + tool.name + '</h3>\n' +
            '<span>' + categoryName + '必选平台</span>\n' +
            '</div>\n</div>\n' +
            '<p class="ai-dev-desc">在这个对网络要求极高的平台中，普通的梯子极易导致无法挽回的体验灾难。请务必查看我们的网络解锁与优化指南。</p>\n' +
            '<div class="env-req ' + reqClass + '" style="border-left-color: ' + tool.color + '; background: rgba(255,255,255,0.02);">\n' +
            '网络要求：<span style="color: ' + tool.color + ';">极速/原生/低延迟 IP</span><br>\n' +
            '为了获得 100% 的无阻碍体验，必须配置对应的专线节点，拒绝劣质线路。\n' +
            '</div>\n' +
            '<div class="ai-dev-actions" style="display: flex; flex-direction: column; gap: 10px;">\n' +
            '<div style="display: flex; gap: 10px;">\n' +
            '<a href="' + tool.link + '" target="_blank" class="btn-visit" style="background: ' + tool.color + '; flex: 1; text-align: center; color: ' + (tool.color === '#ffffff' || tool.color === '#000000' ? (tool.color === '#ffffff' ? '#000' : '#fff') : '#fff') + ';">访问 ' + shortName + '</a>\n' +
            '<a href="' + fileName + '" class="btn-proxy" style="flex: 1; border-color: ' + tool.color + '; color: ' + (tool.color === '#ffffff' ? '#ccc' : tool.color) + '; text-align: center; background: rgba(255,255,255,0.05);">📖 专线/解锁攻略</a>\n' +
            '</div>\n' +
            '<a href="index.html" class="btn-proxy" style="width: 100%; text-align: center; box-sizing: border-box; border-color: var(--border);">获取极致测速第一名节点</a>\n' +
            '</div>\n</div>\n';
    });
    
    return gridHtml;
}

// Generate for all 3 categories
let streamGridHtml = generateCategoryArticles(streamingTools, 'stream', '全球流媒体影视', 'bx bx-movie-play', 'streaming.html', '#E50914', '流媒体解锁');
let gameGridHtml = generateCategoryArticles(gamingTools, 'game', '国际游戏与电竞', 'bx bx-game', 'gaming.html', '#10b981', '电竞专线');
let designGridHtml = generateCategoryArticles(designTools, 'design', '顶尖设计与二次元', 'bx bx-palette', 'design.html', '#ec4899', '无阻尼大带宽');

// Update streaming.html
let streamHtml = fs.readFileSync(path.join(__dirname, 'streaming.html'), 'utf8');
let finalStreamHtml = streamHtml.substring(0, streamHtml.indexOf('<div class="grid">') + 18) + '\n' + streamGridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'streaming.html'), finalStreamHtml);
console.log('✅ streaming.html 重构完毕！');

// Update gaming.html
let gameHtml = fs.readFileSync(path.join(__dirname, 'gaming.html'), 'utf8');
let finalGameHtml = gameHtml.substring(0, gameHtml.indexOf('<div class="grid">') + 18) + '\n' + gameGridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'gaming.html'), finalGameHtml);
console.log('✅ gaming.html 重构完毕！');

// Update design.html
let designHtml = fs.readFileSync(path.join(__dirname, 'design.html'), 'utf8');
let finalDesignHtml = designHtml.substring(0, designHtml.indexOf('<div class="grid">') + 18) + '\n' + designGridHtml + '\n</div>\n</div>\n</main>\n</div>\n</body>\n</html>';
fs.writeFileSync(path.join(__dirname, 'design.html'), finalDesignHtml);
console.log('✅ design.html 重构完毕！');

// Inject all 36 into articles.html
let articlesHtml = fs.readFileSync(path.join(__dirname, 'articles.html'), 'utf8');
let gridStartIndex = articlesHtml.indexOf('<div class="article-grid">');
if(gridStartIndex !== -1) {
    let preGrid = articlesHtml.substring(0, gridStartIndex + 26);
    // Find the first article from the last batch we inserted, which started with tutorial_social_tiktok.html, or just the first a tag
    let previousTutorialIndex = articlesHtml.indexOf('<a href="tutorial_social_tiktok.html"');
    if (previousTutorialIndex === -1) {
        previousTutorialIndex = articlesHtml.indexOf('<a href="tutorial_dev_antigravity.html"');
    }
    if (previousTutorialIndex === -1) {
        previousTutorialIndex = articlesHtml.indexOf('<a href="ai_tutorial_chatgpt.html"');
    }
    
    let postGrid = articlesHtml.substring(previousTutorialIndex);
    articlesHtml = preGrid + '\n' + newArticlesForHub + '\n' + postGrid;
    fs.writeFileSync(path.join(__dirname, 'articles.html'), articlesHtml);
    console.log('✅ articles.html 列表再次完美更新，新增 36 篇终极干货！');
}
