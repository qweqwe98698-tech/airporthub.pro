const fs = require('fs');
const path = require('path');

const generatePage = (title, icon, color, desc, data, filename) => {
    let cardsHtml = data.map(item => `
                    <div class="ai-dev-card">
                        <div class="ai-dev-header">
                            <div class="ai-dev-icon" style="color: #fff; background: ${item.color};"><i class='bx ${item.icon}'></i></div>
                            <div class="ai-dev-title">
                                <h3>${item.name}</h3>
                                <span>${item.sub || '必备神器'}</span>
                            </div>
                        </div>
                        <p class="ai-dev-desc">${item.desc}</p>
                        <div class="env-req strict" style="border-left-color: ${color}; background: rgba(255,255,255,0.02);">
                            网络要求：<span style="color: ${color};">${item.req}</span><br>
                            ${item.reqDesc}
                        </div>
                        <div class="ai-dev-actions">
                            <a href="${item.link || '#'}" target="_blank" class="btn-visit" style="background: ${item.color}; border: none;">访问 ${item.name}</a>
                            <a href="index.html" class="btn-proxy" style="color: ${color}; border-color: ${color};">获取专属节点</a>
                        </div>
                    </div>`).join('');

    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - AIRPORT REVIEWS</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <style>
        .page-container { padding: 30px; max-width: 1200px; margin: 0 auto; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin-top: 30px; }
        .ai-dev-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 25px; transition: 0.3s; display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .ai-dev-card:hover { border-color: ${color}; box-shadow: 0 10px 20px rgba(0,0,0, 0.2); transform: translateY(-2px); }
        .ai-dev-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: ${color}; opacity: 0; transition: 0.3s; }
        .ai-dev-card:hover::before { opacity: 1; }
        .ai-dev-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
        .ai-dev-icon { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 28px; }
        .ai-dev-title h3 { font-size: 20px; color: #fff; margin-bottom: 5px; }
        .ai-dev-title span { font-size: 12px; color: var(--text-muted); background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 10px; }
        .ai-dev-desc { color: var(--text-secondary); font-size: 14px; line-height: 1.6; margin-bottom: 25px; flex-grow: 1; }
        .env-req { padding: 10px 15px; border-radius: 4px; margin-bottom: 20px; font-size: 13px; border-left: 3px solid; }
        .ai-dev-actions { display: flex; gap: 10px; }
        .btn-visit { flex-grow: 1; color: white; text-align: center; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; transition: 0.2s; }
        .btn-visit:hover { filter: brightness(1.1); }
        .btn-proxy { flex-grow: 1; background: transparent; text-align: center; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; transition: 0.2s; border: 1px solid; }
        .btn-proxy:hover { background: rgba(255,255,255,0.05); }
    </style>
</head>
<body>
    <div class="dashboard-wrapper">
        <!-- NAV_INJECT_PLACEHOLDER -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="${filename}" class="active">${title}</a>
                </nav>
            </header>
            <div class="page-container">
                <div class="page-header" style="text-align: center; margin-bottom: 40px; margin-top: 20px;">
                    <i class='bx ${icon}' style="font-size: 60px; color: ${color}; margin-bottom: 15px;"></i>
                    <h1 style="font-size: 32px; margin-bottom: 15px;">${title}</h1>
                    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6;">${desc}</p>
                </div>
                <div class="grid">
                    ${cardsHtml}
                </div>
            </div>
        </main>
    </div>
</body>
</html>`;
};

const streamingData = [
    { name: 'Netflix', icon: 'bx-movie', color: '#E50914', sub: '流媒体霸主', desc: '全球最大的流媒体平台，海量 4K HDR 独占神剧。', req: '原生IP解锁', reqDesc: '奈飞对 IP 封杀极严！使用普通节点会报“所在地区不可用”或只能看画质拉胯的自制剧。' },
    { name: 'Disney+', icon: 'bx-camera-movie', color: '#113CCF', sub: '漫威/星战大本营', desc: '漫威、星战、皮克斯和迪士尼独家大片全网最高清首发。', req: '严格区域限制', reqDesc: '对 IP 纯净度要求极高，劣质机场会导致登录页一直转圈或点击播放无反应。' },
    { name: 'Spotify', icon: 'bx-headphone', color: '#1DB954', sub: '全球最大音乐库', desc: '无损音质与最强算法推荐，欧美日韩新歌全球同步首发。', req: '注册与免广IP', reqDesc: '免广告的跨区听歌极其依赖低延迟节点，部分节点甚至连账号都无法注册。' },
    { name: 'HBO Max', icon: 'bx-tv', color: '#5b209a', sub: '美剧神作制造机', desc: '《权力的游戏》、《西部世界》等大尺度高分神剧独家发源地。', req: '高门槛美区节点', reqDesc: '风控极度变态，绝大部分普通中转节点会直接显示 Access Denied（访问被拒绝）。' },
    { name: 'YouTube Premium', icon: 'bxl-youtube', color: '#FF0000', sub: '免广告真 4K', desc: '解锁 4K 高码率画质与后台播放，极客与数码爱好者的天堂。', req: '大带宽拉流', reqDesc: '要流畅拖拽 4K/8K 视频，你的节点速度必须能长期稳定跑满 500Mbps 以上。' },
    { name: 'Hulu', icon: 'bx-play-circle', color: '#1ce783', sub: '北美爆款综艺', desc: '与 Disney+ 捆绑，拥有海量北美本土热播美剧与独家真人秀。', req: '原生美区家庭宽带', reqDesc: '对数据中心 IP（机房 IP）实行一刀切封杀，必须使用真正的美区原生住宅节点。' },
    { name: 'Prime Video', icon: 'bx-package', color: '#00A8E1', sub: '亚马逊流媒体', desc: '亚马逊出品，拥有《黑袍纠察队》等海量自制大尺度神剧。', req: '跨区解锁', reqDesc: '根据 IP 严格限制影片库，没有好的梯子，你看到的电影库将缩水 80%。' },
    { name: 'Apple TV+', icon: 'bxl-apple', color: '#000000', sub: '极致视听体验', desc: '苹果斥巨资打造的流媒体，画质码率全网最高，视听盛宴。', req: '无损画质保障', reqDesc: '超高码率需要极强稳定的下载带宽，垃圾节点会让你疯狂缓冲，破坏沉浸体验。' },
    { name: 'Crunchyroll', icon: 'bx-smile', color: '#F47521', sub: '全球最大动画库', desc: '全球二次元的圣地，同步日本首播所有最新最热的新番动画。', req: '低延迟日美节点', reqDesc: '高清动画播放受地域限制，需要高速的日本或美国节点才能秒开不卡顿。' },
    { name: 'Twitch', icon: 'bxl-twitch', color: '#9146FF', sub: '全球游戏直播', desc: '全球最大的游戏直播平台，电竞比赛、大作首发全在这里。', req: '长连接不断流', reqDesc: '看直播最怕断流卡顿，只有专线节点才能保证 1080P 60帧 的丝滑观看体验。' },
    { name: 'Tiktok Live', icon: 'bxl-tiktok', color: '#000000', sub: '全球潮流风向标', desc: '海外抖音直播，全球网红、跨境带货的最前沿阵地。', req: '零封控住宅 IP', reqDesc: 'TikTok 的风控是世界级难题，被识别出翻墙会直接零播放甚至封禁设备。' },
    { name: 'Paramount+', icon: 'bx-film', color: '#0064FF', sub: '派拉蒙影业', desc: '拥有星际迷航、海绵宝宝等顶级 IP，北美流媒体新贵。', req: '原生解锁', reqDesc: '严格限制北美地区访问，使用被污染的节点将被立刻阻断。' }
];

const gamingData = [
    { name: 'Steam', icon: 'bxl-steam', color: '#171a21', sub: '全球PC游戏平台', desc: '畅玩全球 3A 大作。跨区购买低价游戏（阿根廷/土耳其区）必备。', req: '跨区防红信IP', reqDesc: '频繁切换低质量节点会导致账号被 V 社封禁（红信）。必须使用极度稳定的专线 IP。' },
    { name: 'Valorant', icon: 'bx-target-lock', color: '#ff4655', sub: '无畏契约国际服', desc: '全球最火的 FPS 射击游戏，国际服大神云集。', req: '极致低延迟专线', reqDesc: 'FPS 游戏差 10ms 就会决定生死。没有极速 IPLC 专线，你永远对枪慢人一步。' },
    { name: 'Discord', icon: 'bxl-discord', color: '#5865F2', sub: '游戏语音巨头', desc: '全球游戏玩家的聚集地，频道语音、社区交流必不可少。', req: 'UDP 语音转发', reqDesc: '很多节点不支持 UDP 协议，会导致 Discord 连得上但语音没有声音（黑麦）。' },
    { name: 'Apex Legends', icon: 'bx-crosshair', color: '#da292a', sub: '战术竞技天花板', desc: '极度硬核的吃鸡游戏，日服和港服是最热闹的赛区。', req: '零丢包保障', reqDesc: 'Apex 对丢包极度敏感，1% 的丢包就会导致“橡胶人”疯狂瞬移，根本没法玩。' },
    { name: 'League of Legends', icon: 'bx-sword', color: '#c8aa6e', sub: '英雄联盟韩/美服', desc: '想要提升技术？去韩服被虐是最好的选择。', req: '韩服原生防封', reqDesc: '拳头游戏对韩服账号查封极严，必须使用韩国原生住宅节点伪装本地玩家。' },
    { name: 'Epic Games', icon: 'bx-joystick', color: '#313131', sub: '免费游戏狂魔', desc: '每周免费送 3A 游戏大作。虚幻引擎的缔造者。', req: '大带宽游戏下载', reqDesc: '领游戏容易，下游戏难。上百G的大作，必须用不限速的大带宽节点才能下得动。' },
    { name: 'Battle.net', icon: 'bx-shield', color: '#00aeff', sub: '暴雪国际服', desc: '魔兽世界、暗黑破坏神、守望先锋的海外大本营。', req: '长连接不掉线', reqDesc: '打团本或大秘境时，梯子突然掉线一秒就会导致团灭，你的队友会疯狂骂你。' },
    { name: 'Xbox Cloud', icon: 'bx-cloud', color: '#107C10', sub: '微软云游戏', desc: '不用买高配电脑，通过浏览器直接流畅玩 Xbox 3A 大作。', req: '高频串流带宽', reqDesc: '云游戏本质是超清视频串流，需要节点具备持续极高的吞吐量和极低的抖动。' },
    { name: 'GeForce NOW', icon: 'bx-laptop', color: '#76b900', sub: '英伟达云游戏', desc: '将你的轻薄本变身 RTX 4080 顶级电竞主机。', req: '毫秒级指令响应', reqDesc: '你按键盘到云端渲染画面的延迟必须低于 30ms，这对节点的物理延迟要求达到了极限。' },
    { name: 'PUBG', icon: 'bx-run', color: '#f2a900', sub: '绝地求生', desc: '逃杀游戏的祖师爷，想去亚服/东南亚服虐菜必备。', req: '雷达级网络稳定', reqDesc: '对枪时卡顿0.1秒就会白给，必须使用专门优化过路由的游戏节点。' },
    { name: 'PlayStation', icon: 'bx-station', color: '#003791', sub: 'PSN 国际服', desc: '主机玩家必备，加速商店加载、联机对战以及跨区白嫖会免。', req: '全平台路由器加速', reqDesc: '需要你的机场节点支持在软路由中配置，全面接管主机流量，彻底告别 NAT 限制。' },
    { name: 'Roblox', icon: 'bx-cube-alt', color: '#000000', sub: '元宇宙沙盒', desc: '全球最火的沙盒创作平台，体验无数海外玩家创造的神奇世界。', req: '稳定不卡地图', reqDesc: '游戏内实时加载玩家自制海量模型，劣质节点会导致进图一直卡进度条。' }
];

const designData = [
    { name: 'Pixiv', icon: 'bx-paint', color: '#0096fa', sub: '全球最大插画站', desc: '简称 P站。全球顶尖画师、二次元爱好者、老司机（R18）的圣地。', req: '全天候高速加载', reqDesc: '看几十兆的高清原图和动图，如果节点慢，图片只会是一格格加载，极度扫兴！' },
    { name: 'Pinterest', icon: 'bxl-pinterest', color: '#E60023', sub: '设计师灵感库', desc: '全球最大的图片社交平台，找素材、找灵感、做 Moodboard 必备。', req: '瀑布流极速渲染', reqDesc: '无限向下滚动的瀑布流需要极高的并发拉取能力，垃圾机场一滑就卡。' },
    { name: 'Behance', icon: 'bxl-behance', color: '#1769ff', sub: 'Adobe 创意总站', desc: '全球顶尖视觉设计师的聚集地，UI/UX、平面设计的最高殿堂。', req: '大图无损直连', reqDesc: '包含大量 4K 级别的设计源文件预览，没有百兆带宽根本带不动。' },
    { name: 'ArtStation', icon: 'bx-brush', color: '#13AFF0', sub: 'CG 艺术神坛', desc: '简称 A站。全球 3D、原画、CG 大神求职与发布作品的硬核平台。', req: '流畅视频展示', reqDesc: '除了图片还有大量的 3D 旋转模型和制作过程视频，对节点带宽要求极高。' },
    { name: 'Figma', icon: 'bxl-figma', color: '#F24E1E', sub: 'UI 设计王者', desc: '云端协作设计工具，全球互联网公司的设计标配。', req: 'WebSocket 实时同步', reqDesc: '团队多人协作时严重依赖 WebSocket 长连接。一旦节点断流，你画的图无法保存同步。' },
    { name: 'Midjourney', icon: 'bx-bot', color: '#ffffff', sub: 'AI 绘画天花板', desc: '寄生在 Discord 中的 AI 绘画神级工具，秒出好莱坞级大片。', req: 'Discord 稳定互通', reqDesc: '由于 MJ 必须在 Discord 内使用，因此必须使用能完美解锁 Discord 的高质量节点。' },
    { name: 'Nyaa', icon: 'bx-magnet', color: '#2b90d9', sub: '最强二次元种子站', desc: '全球最新番剧、原画集、本子、资源的终极聚合地。', req: '种子防审查节点', reqDesc: '不仅要能打开网页，在下载 BT 种子时如果被节点审计规则拦截，将会直接封号。' },
    { name: 'DLsite', icon: 'bx-cart-alt', color: '#0059c1', sub: '二次元数字贩售', desc: '同人音声、独立游戏、同人志的最大在线交易平台。', req: '日本原生 IP', reqDesc: '频繁被跨境支付风控，如果不是优质日本节点，根本无法完成结账付款。' },
    { name: 'DeviantArt', icon: 'bx-droplet', color: '#05cc47', sub: '老牌艺术社区', desc: '欧美最大的数字艺术与粉丝绘画创作社区。', req: '无限制内容解锁', reqDesc: '有些内容由于区域政策会被限制展示，只有全局纯净节点才能原汁原味浏览。' },
    { name: 'Vimeo', icon: 'bxl-vimeo', color: '#1AB7EA', sub: '专业影视平台', desc: '没有广告！全球顶尖导演、摄影师、动画师发布高质量作品的地方。', req: '超高码率保障', reqDesc: 'Vimeo 的视频压缩率比 YouTube 低，画质极佳，但更吃你的代理带宽！' },
    { name: 'Patreon', icon: 'bxl-patreon', color: '#FF424D', sub: '创作者众筹', desc: '直接用真金白银支持你喜欢的画师/UP主，并获取独家大尺度回报。', req: '安全的支付通道', reqDesc: '涉及信用卡支付，如果在被万人共用的黑名单 IP 上操作，卡片极易被冻结拦截。' },
    { name: 'Gumroad', icon: 'bx-shopping-bag', color: '#000000', sub: '数字商品杂货铺', desc: '买大师笔刷、工程文件、独立小工具的最佳去处。', req: '全球秒级加载', reqDesc: '很多作者把巨大的压缩包放在这，你需要一条极速专线把它完整拖下来。' }
];

const promosHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>限时优惠与防坑指南 - AIRPORT REVIEWS</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <style>
        .page-container { padding: 30px; max-width: 1000px; margin: 0 auto; }
        .promo-banner { background: linear-gradient(135deg, #f43f5e, #be123c); border-radius: 12px; padding: 40px; text-align: center; color: white; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(244, 63, 94, 0.3); }
        .promo-banner h1 { font-size: 36px; margin-bottom: 15px; }
        .promo-banner p { font-size: 16px; opacity: 0.9; line-height: 1.6; }
        .code-box { background: rgba(0,0,0,0.2); padding: 10px 20px; border-radius: 8px; display: inline-block; font-size: 24px; font-weight: bold; margin-top: 20px; letter-spacing: 2px; user-select: all; cursor: pointer; border: 1px dashed rgba(255,255,255,0.5); }
        
        .promo-list { display: flex; flex-direction: column; gap: 20px; }
        .promo-item { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 25px; display: flex; align-items: center; justify-content: space-between; transition: 0.3s; }
        .promo-item:hover { border-color: #f43f5e; transform: scale(1.01); }
        .p-info { display: flex; align-items: center; gap: 20px; }
        .p-icon { width: 60px; height: 60px; border-radius: 12px; background: #232c3a; display: flex; align-items: center; justify-content: center; font-size: 30px; color: #f43f5e; }
        .p-text h3 { font-size: 20px; margin-bottom: 5px; color: #fff; }
        .p-text p { color: var(--text-muted); font-size: 14px; }
        .p-discount { background: rgba(244, 63, 94, 0.1); color: #f43f5e; padding: 8px 15px; border-radius: 20px; font-weight: bold; font-size: 14px; border: 1px solid rgba(244, 63, 94, 0.3); }
        .p-btn { background: #f43f5e; color: white; text-decoration: none; padding: 12px 25px; border-radius: 8px; font-weight: bold; transition: 0.2s; }
        .p-btn:hover { background: #e11d48; box-shadow: 0 5px 15px rgba(225, 29, 72, 0.4); }

        .scam-warning { background: rgba(245, 158, 11, 0.05); border: 1px solid #f59e0b; border-radius: 12px; padding: 25px; margin-top: 40px; }
        .scam-warning h3 { color: #f59e0b; display: flex; align-items: center; gap: 10px; font-size: 18px; margin-bottom: 15px; }
        .scam-list li { color: var(--text-secondary); margin-bottom: 10px; line-height: 1.6; margin-left: 20px; }
    </style>
</head>
<body>
    <div class="dashboard-wrapper">
        <!-- NAV_INJECT_PLACEHOLDER -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="promos.html" class="active">限时优惠与防坑</a>
                </nav>
            </header>
            <div class="page-container">
                <div class="promo-banner">
                    <h1>🔥 机场专供·内部骨折优惠码</h1>
                    <p>AIRPORT REVIEWS 独家联合顶级机场大佬，为您送上全网最低的订阅折扣。<br>复制下方通用代码，在结账页面粘贴即可立减！</p>
                    <div class="code-box">AMM</div>
                    <div style="font-size: 12px; margin-top: 10px; opacity: 0.7;">(点击全选复制，全场通用 8 折起)</div>
                </div>

                <h2 style="margin-bottom: 20px; font-size: 22px;">合作机场专属福利</h2>
                <div class="promo-list">
                    <div class="promo-item">
                        <div class="p-info">
                            <div class="p-icon"><i class='bx bx-paper-plane'></i></div>
                            <div class="p-text">
                                <h3>光速云 IEPL 专线</h3>
                                <p>全服流媒体解锁 / 延迟低至 15ms / 适合极客与打游戏</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 20px;">
                            <div class="p-discount">年付自动立减 20%</div>
                            <a href="index.html" class="p-btn">去购买 ></a>
                        </div>
                    </div>
                    
                    <div class="promo-item">
                        <div class="p-info">
                            <div class="p-icon"><i class='bx bx-rocket'></i></div>
                            <div class="p-text">
                                <h3>速界 高端跨境专网</h3>
                                <p>原生纯净 IP / 完美匹配 Claude/ChatGPT / 适合外贸与电商</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 20px;">
                            <div class="p-discount">输入优惠码 AMM 享 85 折</div>
                            <a href="index.html" class="p-btn">去购买 ></a>
                        </div>
                    </div>

                    <div class="promo-item">
                        <div class="p-info">
                            <div class="p-icon"><i class='bx bx-meteor'></i></div>
                            <div class="p-text">
                                <h3>宇宙云 大带宽场</h3>
                                <p>千兆带宽 / 极速下载体验 / 适合看 4K 和重度下载玩家</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 20px;">
                            <div class="p-discount">买二送一 / 季付免单</div>
                            <a href="index.html" class="p-btn">去购买 ></a>
                        </div>
                    </div>
                </div>

                <div class="scam-warning">
                    <h3><i class='bx bx-error-triangle'></i> 机场购买避坑指南 (防跑路必看)</h3>
                    <ul class="scam-list">
                        <li><strong>绝对不要买“年付超低价”机场：</strong> 那些打着“10块钱一年1000G”幌子的机场，100% 都是为了圈一波钱就跑路（俗称“一月场”），买完第二天群就解散。</li>
                        <li><strong>远离无网站备案、无 Telegram 售后群的野鸡节点：</strong> 出了问题你连人都找不到。本站收录的所有机场均经过至少半年的稳定测试，且具备万级用户规模的售后群。</li>
                        <li><strong>谨慎对待“一键连”的免费翻墙 APP：</strong> 它们大多在后台偷偷记录你的所有浏览记录甚至截获你的密码。花杯奶茶钱买个专业机场配 Clash/Shadowrocket 才是最安全的。</li>
                        <li><strong>关于 Netflix 掉解锁：</strong> 奈飞经常封锁节点 IP。专业机场会在 24 小时内更换 IP 恢复解锁，而劣质机场会装死，这也是为什么我们要挑剔服务商的原因。</li>
                    </ul>
                </div>

            </div>
        </main>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'streaming.html'), generatePage('全球流媒体影视', 'bx-movie-play', '#E50914', '追剧党福音！告别低画质和缓冲转圈，精选全球顶尖流媒体平台，为您匹配能秒开 4K HDR 且稳定解锁地域限制的极速节点。', streamingData, 'streaming.html'));
fs.writeFileSync(path.join(__dirname, 'gaming.html'), generatePage('国际游戏与电竞', 'bx-game', '#10b981', '0 丢包，拒绝橡胶人！无论你是征战无畏契约国际服，还是跨区购买 Steam 低价游戏，这里只推荐带 IPLC 专线和 UDP 转发的电竞级节点。', gamingData, 'gaming.html'));
fs.writeFileSync(path.join(__dirname, 'design.html'), generatePage('顶尖设计与二次元', 'bx-palette', '#ec4899', '设计师的灵感库与老司机的二次元圣地。超清大图/画集/动图需要极强的高并发下载能力，我们为你准备了加载不卡顿的大带宽专线。', designData, 'design.html'));
fs.writeFileSync(path.join(__dirname, 'promos.html'), promosHtml);

console.log('Created 4 new HTML pages.');

// Injection Logic for the Sidebar
const filesToUpdate = [
    'index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 
    'ai_tools.html', 'ai_dev.html', 'social_media.html', 'ecommerce.html', 
    'crypto.html', 'streaming.html', 'gaming.html', 'design.html', 'promos.html'
];

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        const generateNavForFile = (currentFilename) => {
            const links = [
                { file: 'index.html', icon: 'bx-data', text: '数据看板', color: '' },
                { file: 'tutorials.html', icon: 'bx-book-open', text: '客户端教程', color: '' },
                { file: 'apple_id.html', icon: 'bx-user-circle', text: '免费 Apple ID', color: '' },
                { file: 'free_nodes.html', icon: 'bx-wifi', text: '免费节点订阅', color: '' },
                { file: 'ai_tools.html', icon: 'bx-bot', text: 'AI 工具宝盒', color: '#a855f7' },
                { file: 'ai_dev.html', icon: 'bx-code-alt', text: 'AI 编程开发工具', color: '#8b5cf6' },
                { file: 'social_media.html', icon: 'bx-world', text: '海外社交媒体', color: '#0ea5e9' },
                { file: 'ecommerce.html', icon: 'bx-store', text: '跨境电商导航', color: '#f59e0b' },
                { file: 'crypto.html', icon: 'bx-bitcoin', text: '数字货币导航', color: '#10b981' },
                { type: 'hr' },
                { file: 'streaming.html', icon: 'bx-movie-play', text: '全球流媒体影视', color: '#E50914' },
                { file: 'gaming.html', icon: 'bx-game', text: '国际游戏与电竞', color: '#10b981' },
                { file: 'design.html', icon: 'bx-palette', text: '顶尖设计与二次元', color: '#ec4899' },
                { type: 'hr' },
                { file: 'promos.html', icon: 'bxs-hot', text: '限时优惠与防坑', color: '#f43f5e', isPromo: true }
            ];
            
            let navStr = '<nav class="sidebar-nav" style="margin-top: 30px; padding: 0 15px;">\n';
            links.forEach(l => {
                if (l.type === 'hr') {
                    navStr += '                <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.05); margin: 15px 0;">\n';
                    return;
                }
                
                const isActive = l.file === currentFilename;
                if (l.isPromo) {
                    if (isActive) {
                        navStr += `                <a href="${l.file}" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(244,63,94,0.15); border-left: 3px solid #f43f5e; text-decoration: none; border-radius: 0 8px 8px 0; transition: 0.2s; margin-top: 5px; font-weight: bold;">\n                    <i class='bx ${l.icon}' style="font-size: 20px; color: ${l.color};"></i> ${l.text}\n                </a>\n`;
                    } else {
                        navStr += `                <a href="${l.file}" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class='bx ${l.icon}' style="font-size: 20px; color: ${l.color};"></i> ${l.text}\n                </a>\n`;
                    }
                } else {
                    if (isActive) {
                        navStr += `                <a href="${l.file}" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class='bx ${l.icon}' style="font-size: 20px; color: ${l.color || '#fff'};"></i> ${l.text}\n                </a>\n`;
                    } else {
                        navStr += `                <a href="${l.file}" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class='bx ${l.icon}' style="font-size: 20px; color: ${l.color || 'inherit'};"></i> ${l.text}\n                </a>\n`;
                    }
                }
            });
            navStr += '            </nav>';
            return navStr;
        };

        if (content.includes('<!-- NAV_INJECT_PLACEHOLDER -->')) {
            const fullSidebar = `        <aside class="sidebar">\n            <div class="logo">\n                <i class='bx bx-globe'></i>\n                <span>AIRPORT REVIEWS</span>\n            </div>\n            ${generateNavForFile(file)}\n            <div class="ad-banner" style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; border: 1px solid var(--border);">\n                <h4 style="color: #f43f5e; margin-bottom: 5px; font-size: 14px;">🔥 站长专属神仙机场</h4>\n                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入通用折扣码：<strong style="color: #f43f5e; user-select: all;">AMM</strong></p>\n                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">防跑路稳定首选，全网测速第一。</p>\n                <button onclick="window.location.href='promos.html'" style="width: 100%; padding: 8px; background: #f43f5e; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">查看优惠码大全</button>\n            </div>\n        </aside>`;
            content = content.replace('<!-- NAV_INJECT_PLACEHOLDER -->', fullSidebar);
            fs.writeFileSync(fullPath, content);
            console.log('Processed new file: ' + file);
        } else {
            const navRegex = /<nav class="sidebar-nav"[^>]*>([\s\S]*?)<\/nav>/;
            const newNavHtml = generateNavForFile(file);
            if (navRegex.test(content)) {
                content = content.replace(navRegex, newNavHtml);
                fs.writeFileSync(fullPath, content);
                console.log('Updated existing nav in ' + file);
            } else {
                console.log('Failed to find nav block in ' + file);
            }
        }
    }
});
