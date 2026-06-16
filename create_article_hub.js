const fs = require('fs');
const path = require('path');

function createArticlesHub() {
const airports = [
        { id: "guangsu", provider: "光速云", icon: "bxs-rocket", color: "#10b981", read: "1.5w" },
        { id: "feimao", provider: "飞猫云", icon: "bx-cloud-lightning", color: "#fb923c", read: "9.2k" },
        { id: "sujie", provider: "速界", icon: "bx-globe", color: "#2dd4bf", read: "8.8k" },
        { id: "jilian", provider: "极连云", icon: "bx-wind", color: "#ef4444", read: "1.1w" },
        { id: "yuzhou", provider: "宇宙云", icon: "bx-planet", color: "#0ea5e9", read: "7.5k" },
        { id: "xingdao", provider: "星岛梦", icon: "bx-star", color: "#8b5cf6", read: "6.2k" },
        { id: "weitu", provider: "唯兔云", icon: "bxs-rabbit", color: "#f43f5e", read: "1.3w" },
        { id: "ermao", provider: "二猫云", icon: "bxs-cat", color: "#f59e0b", read: "5.4k" },
        { id: "quanqiu", provider: "全球云", icon: "bx-world", color: "#3b82f6", read: "4.8k" },
        { id: "guangnian", provider: "光年梯", icon: "bx-trending-up", color: "#a855f7", read: "3.9k" },
        { id: "kexin", provider: "可信云(山水云)", icon: "bx-shield-quarter", color: "#14b8a6", read: "2.1k" },
        { id: "u1s1", provider: "u1s1", icon: "bx-joystick", color: "#f472b6", read: "5.5k" },
        { id: "yifan", provider: "一翻云(秒秒云)", icon: "bx-timer", color: "#6366f1", read: "1.8k" },
        { id: "kuaili", provider: "快狸", icon: "bx-bolt-circle", color: "#d946ef", read: "3.3k" },
        { id: "sogo", provider: "SOGO狗云", icon: "bx-dog", color: "#eab308", read: "1.2k" },
        { id: "bianyuan", provider: "边缘节点", icon: "bx-server", color: "#64748b", read: "800" }
    ];

    let dynamicArticlesHtml = '';
    airports.forEach(airport => {
        dynamicArticlesHtml += \`
                    <a href="review_airport_\${airport.id}.html" class="article-card">
                        <div class="article-icon" style="color: \${airport.color}; background: \${airport.color}15;"><i class='bx \${airport.icon}'></i></div>
                        <h3>【2026最新】\${airport.provider} 深度评测：真实测速与购买建议</h3>
                        <p>独家网络测速与流媒体解锁报告，深度扒皮 \${airport.provider} 的线路质量，买前必看的防坑避雷指南。</p>
                        <div class="article-meta">
                            <span><i class='bx bx-bar-chart'></i> \${airport.read} 阅读</span>
                            <span class="article-meta-link" style="color: \${airport.color};">阅读全文 <i class='bx bx-right-arrow-alt'></i></span>
                        </div>
                    </a>\`;
    });

    const html = \`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>最新文章与干货教程 - AIRPORT REVIEWS</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .articles-container { padding: 40px; max-width: 1000px; margin: 0 auto; }
        .page-header { margin-bottom: 40px; }
        .page-header h1 { font-size: 28px; color: #fff; margin-bottom: 10px; }
        .page-header p { color: var(--text-muted); }

        .article-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .article-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 25px; transition: 0.3s; display: flex; flex-direction: column; text-decoration: none !important; }
        .article-card:hover { transform: translateY(-5px); border-color: #8b5cf6; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        .article-icon { font-size: 40px; color: #8b5cf6; margin-bottom: 20px; background: rgba(139, 92, 246, 0.1); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 12px; }
        .article-card h3 { color: #fff !important; font-size: 18px; margin-bottom: 10px; line-height: 1.4; }
        .article-card p { color: var(--text-muted) !important; font-size: 14px; margin-bottom: 20px; flex-grow: 1; line-height: 1.6; }
        .article-meta { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 15px; }
        .article-meta span { font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 5px; }
        .article-meta-link { color: #8b5cf6; font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 5px; transition: 0.2s; }
        .article-card:hover .article-meta-link { color: #a78bfa; }

        @media (max-width: 768px) {
            .dashboard-wrapper { flex-direction: column; }
            .sidebar { width: 100% !important; position: static !important; height: auto !important; border-right: none !important; border-bottom: 1px solid var(--border); }
            .main-content { overflow-y: visible !important; height: auto !important; }
            .articles-container { padding: 15px; }
            .topbar { padding: 15px; flex-direction: column; gap: 15px; align-items: flex-start; }
            .article-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="dashboard-wrapper">
        <!-- NAV_INJECT_PLACEHOLDER -->
        
        <main class="main-content" style="overflow-y: auto; flex-grow: 1;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="articles.html" class="active" style="color: #fff;">最新文章</a>
                </nav>
                <div class="top-right">
                    <div class="search-bar">
                        <i class='bx bx-search'></i>
                        <input type="text" placeholder="搜索干货教程...">
                    </div>
                </div>
            </header>

            <div class="articles-container">
                <div class="page-header">
                    <h1>最新文章与干货教程</h1>
                    <p>为你提供最前沿的科学上网技术、流媒体解锁方案及行业深度避坑指南。</p>
                </div>

                <div class="article-grid">
                    <!-- Article 1 -->
                    <a href="article_demo.html" class="article-card">
                        <div class="article-icon" style="color: #f43f5e; background: rgba(244, 63, 94, 0.1);"><i class='bx bxs-rocket'></i></div>
                        <h3>【2026最新】电脑端 Clash Verge Rev 保姆级配置教程与常见报错解决</h3>
                        <p>Clash for Windows 停更后该用什么？本文手把手教你安装配置目前最火的 Clash Verge Rev 客户端，附带解决 90% 新手常见报错。</p>
                        <div class="article-meta">
                            <span><i class='bx bx-bar-chart'></i> 1.2w 阅读</span>
                            <span class="article-meta-link" style="color: #f43f5e;">阅读全文 <i class='bx bx-right-arrow-alt'></i></span>
                        </div>
                    </a>

                    <!-- Article 2 -->
                    <a href="article_netflix.html" class="article-card">
                        <div class="article-icon" style="color: #e50914; background: rgba(229, 9, 20, 0.1);"><i class='bx bxs-movie-play'></i></div>
                        <h3>Netflix 提示“您似乎使用了代理”怎么解决？2026年防封锁指南</h3>
                        <p>网飞大面积封杀代理 IP？不要慌，教你如何辨别原生 IP 和解锁广播 IP，彻底告别看剧被拉黑的烦恼。</p>
                        <div class="article-meta">
                            <span><i class='bx bx-bar-chart'></i> 8.5k 阅读</span>
                            <span class="article-meta-link" style="color: #e50914;">阅读全文 <i class='bx bx-right-arrow-alt'></i></span>
                        </div>
                    </a>

                    <!-- Article 3 -->
                    <a href="article_scam.html" class="article-card">
                        <div class="article-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.1);"><i class='bx bxs-shield-x'></i></div>
                        <h3>揭秘：为什么几十块钱一年的“便宜机场”千万不能买？</h3>
                        <p>深度扒皮那些主打“10元包年/无限流量”的灵车机场套路。贪小便宜吃大亏，你的隐私数据可能正在被倒卖！</p>
                        <div class="article-meta">
                            <span><i class='bx bx-bar-chart'></i> 2.1w 阅读</span>
                            <span class="article-meta-link" style="color: #f59e0b;">阅读全文 <i class='bx bx-right-arrow-alt'></i></span>
                        </div>
                    </a>

                    \${dynamicArticlesHtml}
                </div>
            </div>
        </main>
    </div>
</body>
</html>\`;

    fs.writeFileSync(path.join(__dirname, 'articles.html'), html, 'utf8');
    console.log('Created articles.html');
}

function createArticleDemo() {
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>【2026最新】电脑端 Clash Verge Rev 保姆级配置教程 - AIRPORT REVIEWS</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .article-read-container { max-width: 800px; margin: 40px auto; background: var(--bg-card); padding: 40px; border-radius: 12px; border: 1px solid var(--border); }
        .article-header { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }
        .article-header h1 { font-size: 28px; color: #fff; line-height: 1.4; margin-bottom: 15px; }
        .meta-tags { display: flex; gap: 15px; color: var(--text-muted); font-size: 13px; }
        .meta-tags span { display: flex; align-items: center; gap: 5px; }

        .article-body { font-size: 16px; line-height: 1.8; color: var(--text-main); }
        .article-body h2 { color: #fff; font-size: 22px; margin: 30px 0 15px 0; border-left: 4px solid #8b5cf6; padding-left: 10px; }
        .article-body h3 { color: #e2e8f0; font-size: 18px; margin: 25px 0 10px 0; }
        .article-body p { margin-bottom: 15px; }
        .article-body strong { color: #fff; }
        .article-body img { max-width: 100%; border-radius: 8px; margin: 20px 0; border: 1px solid var(--border); box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
        
        .code-block { background: #1e1e2e; padding: 15px; border-radius: 8px; font-family: monospace; color: #a6accd; border: 1px solid rgba(255,255,255,0.05); overflow-x: auto; margin-bottom: 15px; }
        
        .inline-ad { margin: 40px 0; background: linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(139, 92, 246, 0.1)); border: 1px solid rgba(244, 63, 94, 0.3); border-radius: 12px; padding: 25px; position: relative; overflow: hidden; }
        .inline-ad::before { content: '赞助/推荐'; position: absolute; top: 0; right: 0; background: rgba(244, 63, 94, 0.2); color: #f43f5e; font-size: 11px; padding: 3px 10px; border-bottom-left-radius: 8px; }
        .inline-ad h3 { color: #f43f5e; margin: 0 0 10px 0; display: flex; align-items: center; gap: 8px; font-size: 20px;}
        .inline-ad p { color: #e2e8f0; font-size: 14px; margin-bottom: 15px; }
        .inline-ad .discount-box { background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 8px; display: inline-flex; align-items: center; gap: 10px; margin-bottom: 20px; border: 1px dashed #f43f5e;}
        .inline-ad .btn-buy { background: #f43f5e; color: #fff; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; display: inline-block; transition: 0.3s; }
        .inline-ad .btn-buy:hover { background: #e11d48; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(244, 63, 94, 0.4); }

        .spider-web { margin-top: 50px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); }
        .spider-web h3 { color: #fff; font-size: 18px; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
        .spider-web-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .spider-web a { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; text-decoration: none; color: var(--text-muted); transition: 0.3s; border: 1px solid transparent; }
        .spider-web a:hover { background: rgba(255,255,255,0.08); color: #fff; border-color: var(--border); transform: translateX(5px); }
        .spider-web i { color: #8b5cf6; font-size: 20px; }

        @media (max-width: 768px) {
            .dashboard-wrapper { flex-direction: column; }
            .sidebar { width: 100% !important; position: static !important; height: auto !important; border-right: none !important; border-bottom: 1px solid var(--border); }
            .main-content { overflow-y: visible !important; height: auto !important; }
            .article-read-container { padding: 20px; margin: 15px; }
            .topbar { padding: 15px; flex-direction: column; gap: 15px; align-items: flex-start; }
            .spider-web-grid { grid-template-columns: 1fr; }
            .article-header h1 { font-size: 22px; }
        }
    </style>
</head>
<body>
    <div class="dashboard-wrapper">
        <!-- NAV_INJECT_PLACEHOLDER -->
        
        <main class="main-content" style="overflow-y: auto; flex-grow: 1;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="articles.html" style="display: flex; align-items: center; gap: 5px;"><i class='bx bx-arrow-back'></i> 返回列表</a>
                </nav>
                <div class="top-right">
                    <div class="search-bar">
                        <i class='bx bx-search'></i>
                        <input type="text" placeholder="搜索...">
                    </div>
                </div>
            </header>

            <div class="article-read-container">
                
                <div class="article-header">
                    <h1>【2026最新】电脑端 Clash Verge Rev 保姆级配置教程与常见报错解决</h1>
                    <div class="meta-tags">
                        <span><i class='bx bx-folder'></i> 客户端教程</span>
                        <span><i class='bx bx-calendar'></i> 2026-06-16</span>
                        <span><i class='bx bx-show'></i> 12,450 阅读</span>
                        <span><i class='bx bx-time-five'></i> 预计阅读：5分钟</span>
                    </div>
                </div>

                <div class="article-body">
                    <p>随着原版 Clash for Windows 彻底停止维护（删库跑路），很多新手小白不知道电脑端该用什么软件翻墙。目前，开源社区最活跃、UI 最现代化、支持内核最丰富的替代品就是 <strong>Clash Verge Rev</strong>。</p>
                    <p>这篇文章将手把手教你如何下载、安装并导入节点订阅，100% 成功，哪怕你是毫无技术基础的小白也能在 3 分钟内搞定。我们将从为什么选择这款软件，到每一个细枝末节的配置，提供保姆级的深度解析。</p>

                    <h2>为什么选择 Clash Verge Rev？</h2>
                    <p>在众多的代理工具中，Clash Verge Rev 脱颖而出，主要因为以下几点核心优势：</p>
                    <ul>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>颜值即正义：</strong> 采用了全新的 Tauri 框架编写，界面极度现代化，支持毛玻璃效果和多种主题色。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>多内核支持：</strong> 完美支持 Clash Meta (mihomo) 内核，意味着它能兼容当下所有最新的加密协议（如 Vless, Reality, Hysteria2 等）。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>自带中文：</strong> 开箱即用的原生中文支持，再也不需要像以前那样到处找汉化包覆盖了。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>轻量且安全：</strong> 相比于老旧的基于 Electron 的客户端，它的内存占用极低，且完全开源，没有后门风险。</li>
                    </ul>

                    <h2>第一步：安全下载与安装</h2>
                    <p>请务必前往官方 GitHub 仓库下载，不要在任何第三方网站下载来路不明的压缩包，极大概率会被植入木马！很多所谓的“XX软件园”、“XX下载站”提供的都是被二次打包的加料版本。</p>
                    <div class="code-block">官方开源下载地址: https://github.com/clash-verge-rev/clash-verge-rev/releases</div>
                    
                    <h3>如何选择适合自己电脑的版本？</h3>
                    <p>在 Release 页面中，你会看到一大堆文件，不要慌，按照你的电脑系统对号入座：</p>
                    <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 3px solid #3b82f6; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0;"><strong>Windows 用户：</strong></p>
                        <ul style="margin: 0; padding-left: 20px; color: var(--text-muted);">
                            <li>如果你是普通的 64 位电脑（Intel 或 AMD 处理器，99%的人都是这个）：请下载 <code>Clash.Verge_xxx_x64-setup.exe</code></li>
                            <li>如果你是 ARM 架构的 Windows 电脑（如某些轻薄本）：下载 <code>arm64-setup.exe</code></li>
                        </ul>
                    </div>
                    
                    <p>下载完成后，双击 <code>.exe</code> 文件。如果 Windows 弹出“Windows 已保护你的电脑”的蓝色警告，点击<strong>“更多信息”</strong>，然后点击<strong>“仍要运行”</strong>。接下来的安装过程只需无脑点击“下一步”直到完成即可。</p>

                    <!-- 横向强插转化广告 (印钞机模块) -->
                    <div class="inline-ad">
                        <h3>🔥 教程必备神级节点：光速云专线</h3>
                        <p>软件再好，没有顶级节点也是白搭。很多报错（如 Timeout、Network Error）其实是因为你用了劣质“一元机场”或免费节点导致的。站长强烈推荐 <strong>光速云全 IPLC 专线</strong>：</p>
                        <ul style="color: #e2e8f0; margin-bottom: 15px; font-size: 14px;">
                            <li>晚高峰 YouTube 8K 视频秒开，毫无缓冲感。</li>
                            <li>纯正流媒体原生 IP，完美解锁 Netflix / Disney+ / ChatGPT。</li>
                            <li>支持全局 TUN 模式玩海外游戏，真正做到物理级零丢包。</li>
                        </ul>
                        <div class="discount-box">
                            <span style="color: #fff;">今日限量专属 8 折口令：</span>
                            <strong style="color: #f43f5e; font-size: 18px; user-select: all; cursor: pointer;" onclick="navigator.clipboard.writeText('AMM').then(() => alert('优惠码 AMM 复制成功！去测速面板购买吧！'));">AMM</strong>
                            <i class='bx bx-copy' style="color: #f43f5e; cursor: pointer;"></i>
                        </div>
                        <br>
                        <a href="index.html" class="btn-buy">👉 立即前往光速云官网抢购专属节点 👈</a>
                    </div>

                    <h2>第二步：设置中文与内核</h2>
                    <p>第一次打开软件可能是英文界面，我们需要先进行简单的基础设置。</p>
                    <ol>
                        <li style="color: var(--text-main); margin-bottom: 8px;">点击左侧导航栏最下方的 <strong>「Settings」</strong>（设置）。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;">在右侧找到 <strong>Language</strong> 选项，将其从 English 切换为 <strong>中文</strong>。软件界面会瞬间变为中文。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;">向下滑动，找到 <strong>「Clash 内核」</strong> 选项。点击右侧的齿轮图标，建议选择 <strong>Meta 内核</strong>（图标通常是蓝色底的 mihomo），因为 Meta 内核对新协议的兼容性最完美。重启软件生效。</li>
                    </ol>

                    <h2>第三步：导入机场订阅链接</h2>
                    <p>代理软件只是一把枪，订阅链接才是子弹。请按照以下步骤上膛：</p>
                    <p>1. 登录你的机场后台（如果你还没有稳定节点，请务必返回上方购买光速云）。</p>
                    <p>2. 在机场的用户中心找到“一键订阅”按钮，选择 <strong>复制 Clash 订阅链接</strong>。</p>
                    <p>3. 打开 Clash Verge Rev 软件，点击左侧导航栏的 <strong>「订阅 (Profiles)」</strong>。</p>
                    <p>4. 在顶部的输入框中，粘贴你刚刚复制的订阅链接（是以 http 或 https 开头的一串长网址）。</p>
                    <p>5. 点击 <strong>导入 (Import)</strong> 按钮。稍微等待几秒钟，下方会出现一个带有你机场名字的配置文件块。点击这个配置文件，让其变成<strong>高亮选中状态</strong>。</p>

                    <h2>第四步：选择节点并开启代理</h2>
                    <p>这是最后一步，也是决定你能否翻墙成功的关键：</p>
                    <p>1. 点击左侧的 <strong>「代理 (Proxies)」</strong> 面板。</p>
                    <p>2. 在最上方的模式栏中，务必选择 <strong>规则 (Rule)</strong> 模式。<br>
                       <span style="font-size: 13px; color: var(--text-muted);">（科普：规则模式指国内网站直连，国外网站走代理，最省流量；全局模式则所有流量全部翻墙；直连模式则等于不翻墙。）</span></p>
                    <p>3. 展开下方的“节点选择”组，这里会列出机场所有的服务器线路。你可以点击右上角的闪电图标进行 <strong>延迟测速</strong>，随便挑选一个绿色的、延迟低的节点（比如 香港/新加坡/日本 节点）。</p>
                    <p>4. <strong>终极启动：</strong>回到左侧导航栏的 <strong>「设置 (Settings)」</strong>，找到最顶部的 <strong>系统代理 (System Proxy)</strong> 开关，将其打开！</p>
                    <p>此时，屏幕右下角会弹出代理已开启的提示。恭喜你！现在打开浏览器，访问 YouTube.com 享受自由的互联网吧！</p>

                    <h2>进阶玩法：开启 TUN 模式（虚拟网卡）</h2>
                    <p>普通的系统代理只能代理浏览器的流量。如果你需要玩外服游戏、或者某些顽固的软件（如 Telegram 桌面版）死活连不上网，你就需要开启 TUN 模式。</p>
                    <p>在「设置」界面，找到 <strong>TUN 模式</strong> 并开启。第一次开启时，Windows 会弹出一个 UAC 盾牌提示，要求管理员权限，点击“是”。开启后，软件会虚拟出一张网卡，接管电脑上的<strong>所有软件流量</strong>，实现真正的 100% 翻墙。</p>

                    <h2>新手常见报错深度排查 (FAQ)</h2>
                    
                    <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 15px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
                        <h3 style="color: #ef4444; margin-top: 0; font-size: 16px;">❌ 报错 1：导入订阅时提示 "Network Error" 或 "Timeout"</h3>
                        <p style="color: var(--text-main); margin-bottom: 5px; font-size: 14px;"><strong>原因排查：</strong></p>
                        <ol style="margin: 0; padding-left: 20px; font-size: 14px; color: var(--text-muted);">
                            <li>你的本地时间与服务器时间误差超过了 2 分钟。右键电脑右下角的时间 -> 调整日期/时间 -> 点击“立即同步”。</li>
                            <li>你的旧版翻墙软件（如 v2rayN）还没关，端口冲突了。请彻底退出其他所有代理软件。</li>
                            <li>你机场的订阅服务器本身已经被墙（劣质机场常见）。</li>
                        </ol>
                    </div>

                    <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 15px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
                        <h3 style="color: #ef4444; margin-top: 0; font-size: 16px;">❌ 报错 2：开启系统代理后，浏览器提示“代理服务器拒绝连接”</h3>
                        <p style="color: var(--text-main); margin-bottom: 5px; font-size: 14px;"><strong>原因排查：</strong></p>
                        <ol style="margin: 0; padding-left: 20px; font-size: 14px; color: var(--text-muted);">
                            <li>某些流氓杀毒软件（点名 360 安全卫士、腾讯电脑管家）拦截了系统代理注册表修改。建议退出杀软，或直接开启 <strong>TUN 模式</strong> 绕过拦截。</li>
                            <li>如果你刚强行结束了软件进程，系统代理可能没来得及关。打开电脑自带的“设置 -> 网络和 Internet -> 代理”，手动关闭“使用代理服务器”开关。</li>
                        </ol>
                    </div>

                    <div style="margin-top: 40px; padding: 25px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; color: #e2e8f0;">
                        <h3 style="color: #10b981; margin-top: 0; display: flex; align-items: center; gap: 8px;"><i class='bx bxs-bulb'></i> 站长终极建议</h3>
                        <p>翻墙折腾的尽头是花钱买稳定。如果你严格按照以上数千字的保姆级教程操作后，依然无法上网，或者节点全部显示 <code>Timeout</code>，那么 <strong>99.9% 的概率是你的节点服务商太拉垮了</strong>。</p>
                        <p style="margin-bottom: 0;">生命苦短，别把大好时光浪费在排错上。直接换用 <a href="index.html" style="color: #10b981; font-weight: bold; text-decoration: underline;">光速云全专线节点</a>，不但有极致的丝滑体验，客服还能 1对1 帮你远程远程配好，让你彻底告别网络焦虑！</p>
                    </div>

                </div>

                <!-- SEO 内部蜘蛛网系统 -->
                <div class="spider-web">
                    <h3><i class='bx bx-network-chart'></i> 猜你需要 / 拓展阅读</h3>
                    <div class="spider-web-grid">
                        <a href="article_demo.html">
                            <i class='bx bx-mobile-alt'></i>
                            <span>安卓端 v2rayNG 下载与详细配置教程</span>
                        </a>
                        <a href="review.html">
                            <i class='bx bx-star'></i>
                            <span>2026 年最新机场评测：哪家最适合打游戏？</span>
                        </a>
                        <a href="apple_id.html">
                            <i class='bx bxl-apple'></i>
                            <span>免费获取美区 Apple ID 与小火箭下载教程</span>
                        </a>
                        <a href="index.html">
                            <i class='bx bx-bar-chart-alt-2'></i>
                            <span>前往全网测速看板，查看最新机场跑分</span>
                        </a>
                    </div>
                </div>

            </div>
        </main>
    </div>
</body>
</html>`;

    fs.writeFileSync(path.join(__dirname, 'article_demo.html'), html, 'utf8');
    console.log('Created article_demo.html');
}

createArticlesHub();
createArticleDemo();
