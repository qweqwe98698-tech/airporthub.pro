const fs = require('fs');
const path = require('path');

const themeName = 'AirReview';
const themeDir = path.join(__dirname, 'zblog_theme', themeName);

// 创建目录结构
const dirs = [
    themeDir,
    path.join(themeDir, 'style'),
    path.join(themeDir, 'script'),
    path.join(themeDir, 'template')
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. 生成 theme.xml
const themeXml = `<?xml version="1.0" encoding="utf-8"?>
<theme version="php">
  <id>${themeName}</id>
  <name>硬核看板主题</name>
  <url>https://jichangpingce.club</url>
  <note>为 AIRPORT REVIEWS 独家定制的极简高转化主题</note>
  <description>黑科技数据看板主题</description>
  <path></path>
  <include>include.php</include>
  <level>1</level>
  <author>
    <name>Yexiodi98K</name>
    <email></email>
    <url></url>
  </author>
  <source>
    <name></name>
    <email></email>
    <url></url>
  </source>
  <adapted>173000</adapted>
  <version>1.0</version>
  <pubdate>2026-06-16</pubdate>
  <modified>2026-06-16</modified>
  <price>0</price>
  <advanced>
    <dependency></dependency>
    <conflict></conflict>
    <rewritefunctions></rewritefunctions>
  </advanced>
</theme>`;
fs.writeFileSync(path.join(themeDir, 'theme.xml'), themeXml);

// 2. 生成 include.php
const includePhp = `<?php
#注册插件
RegisterPlugin("${themeName}","ActivePlugin_${themeName}");

function ActivePlugin_${themeName}() {
    global $zbp;
    $zbp->LoadLanguage('theme', '${themeName}');
}
function InstallPlugin_${themeName}() {}
function UninstallPlugin_${themeName}() {}
?>`;
fs.writeFileSync(path.join(themeDir, 'include.php'), includePhp);

// 3. 读取本地静态文件资源
const styleCss = fs.readFileSync(path.join(__dirname, 'css', 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf8');

// 修改 CSS 里的本地路径（如果有的化）适配 Z-Blog
fs.writeFileSync(path.join(themeDir, 'style', 'style.css'), styleCss);
fs.writeFileSync(path.join(themeDir, 'script', 'app.js'), appJs);

// ============================================
// 4. 生成 Z-Blog 模板文件
// ============================================

// --- header.php ---
const headerPhp = `{* Template Name: 公共头部 *}
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{$name}-{$title}</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{$host}zb_users/theme/{$theme}/style/style.css">
    <!-- Icon Font (Boxicons) -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <style>
        .article-read-container { max-width: 800px; margin: 40px auto; background: var(--bg-card); padding: 40px; border-radius: 12px; border: 1px solid var(--border); }
        .article-header { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }
        .article-header h1 { font-size: 28px; color: #fff; line-height: 1.4; margin-bottom: 15px; }
        .meta-tags { display: flex; gap: 15px; color: var(--text-muted); font-size: 13px; }
        .meta-tags span { display: flex; align-items: center; gap: 5px; }
        .article-body { font-size: 16px; line-height: 1.8; color: var(--text-main); }
        .article-body h2 { color: #fff; font-size: 22px; margin: 35px 0 15px 0; border-left: 4px solid #8b5cf6; padding-left: 10px; }
        .article-body img { max-width: 100%; border-radius: 8px; margin: 20px 0; border: 1px solid var(--border); }
        @media (max-width: 768px) {
            .dashboard-wrapper { flex-direction: column; }
            .sidebar { width: 100% !important; position: static !important; height: auto !important; border-right: none !important; border-bottom: 1px solid var(--border); }
            .main-content { overflow-y: visible !important; height: auto !important; }
            .article-read-container { padding: 20px; margin: 15px; }
            .topbar { padding: 15px; flex-direction: column; gap: 15px; align-items: flex-start; }
        }
    </style>
</head>
<body>
    <div class="dashboard-wrapper">
`;
fs.writeFileSync(path.join(themeDir, 'template', 'header.php'), headerPhp);

// --- sidebar.php ---
const sidebarPhp = `{* Template Name: 公共侧边栏 *}
        <aside class="sidebar">
            <div class="logo">
                <i class='bx bx-globe'></i>
                <span>AIRPORT REVIEWS</span>
            </div>
            
            <nav class="sidebar-nav" style="margin-top: 30px; padding: 0 15px;">
                <a href="{$host}" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-data' style="font-size: 20px; color: #fff;"></i> 数据看板
                </a>
                <a href="{$host}?cate=1" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); background: transparent; text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-news' style="font-size: 20px; color: inherit;"></i> 最新文章
                </a>
            </nav>

            <div class="ad-banner" style="margin-top: auto; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; margin-bottom: 20px; border: 1px solid var(--border);">
                <h4 style="color: #f43f5e; margin-bottom: 5px; font-size: 14px;">🔥 站长专属神仙机场</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: #f43f5e; user-select: all;">AMM</strong></p>
                <button onclick="window.location.href='{$host}'" style="width: 100%; padding: 8px; background: #f43f5e; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">立即抢购专属节点</button>
            </div>
        </aside>
`;
fs.writeFileSync(path.join(themeDir, 'template', 'sidebar.php'), sidebarPhp);

// --- footer.php ---
const footerPhp = `{* Template Name: 公共底部 *}
    </div> <!-- end of dashboard-wrapper -->
    <script src="{$host}zb_users/theme/{$theme}/script/app.js"></script>
</body>
</html>`;
fs.writeFileSync(path.join(themeDir, 'template', 'footer.php'), footerPhp);

// --- index.php (主页看板) ---
const indexPhp = `{* Template Name: 首页 *}
{template:header}
{template:sidebar}

        <main class="main-content">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="{$host}" class="active">看板 (Dashboard)</a>
                    <a href="{$host}?cate=1">最新文章</a>
                </nav>
            </header>

            <div class="data-container">
                <div class="table-header-info">
                    <div class="title-area">
                        <h2>全球节点测速与评测看板</h2>
                        <p class="subtitle" id="server-count">正在加载服务商数据...</p>
                    </div>
                </div>

                <div class="data-table">
                    <div class="tr th">
                        <div class="td td-provider">服务商 (PROVIDER)</div>
                        <div class="td td-protocol">协议</div>
                        <div class="td td-uptime">可用率 (UPTIME)</div>
                        <div class="td td-ping">晚高峰延迟</div>
                        <div class="td td-speed">解锁能力</div>
                        <div class="td td-price">价格</div>
                        <div class="td td-action">操作</div>
                    </div>
                    
                    <div id="table-body">
                        <!-- 数据由 app.js 动态渲染 -->
                    </div>
                </div>
            </div>
        </main>
{template:footer}
`;
fs.writeFileSync(path.join(themeDir, 'template', 'index.php'), indexPhp);

// --- catalog.php (文章列表页) ---
const catalogPhp = `{* Template Name: 文章列表 *}
{template:header}
{template:sidebar}

        <main class="main-content" style="overflow-y: auto; flex-grow: 1;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="{$host}">看板 (Dashboard)</a>
                    <a href="{$host}?cate=1" class="active">最新文章</a>
                </nav>
            </header>

            <div class="articles-container" style="max-width: 1000px; margin: 40px auto; padding: 0 20px;">
                <div class="hub-header" style="text-align: center; margin-bottom: 40px;">
                    <h1 style="color: #fff; font-size: 32px; margin-bottom: 10px;">技术硬核文章库</h1>
                    <p style="color: var(--text-muted);">最前沿的科学上网教程、机场深度测评与避坑指南</p>
                </div>

                <div class="articles-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px;">
                    {foreach $articles as $article}
                    <a href="{$article.Url}" class="article-card" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 25px; text-decoration: none; display: flex; flex-direction: column; transition: 0.3s;">
                        <h3 style="color: #fff; font-size: 18px; line-height: 1.4; margin: 15px 0 10px 0;">{$article.Title}</h3>
                        <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6; margin-bottom: 20px; flex-grow: 1;">{$article.Intro}</p>
                        <div class="card-footer" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px;">
                            <span class="read-stats" style="color: var(--text-muted); font-size: 13px;"><i class='bx bx-time'></i> {$article.Time('Y-m-d')}</span>
                            <span class="read-more" style="color: #f43f5e; font-size: 13px; font-weight: 500;">阅读全文 →</span>
                        </div>
                    </a>
                    {/foreach}
                </div>
                <div class="pagebar">{template:pagebar}</div>
            </div>
        </main>
{template:footer}
`;
fs.writeFileSync(path.join(themeDir, 'template', 'catalog.php'), catalogPhp);

// --- single.php (文章详情页) ---
const singlePhp = `{* Template Name: 文章详情 *}
{template:header}
{template:sidebar}

        <main class="main-content" style="overflow-y: auto; flex-grow: 1;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="{$host}?cate=1" style="display: flex; align-items: center; gap: 5px;"><i class='bx bx-arrow-back'></i> 返回列表</a>
                </nav>
            </header>

            <div class="article-read-container">
                <div class="article-header">
                    <h1>{$article.Title}</h1>
                    <div class="meta-tags">
                        <span><i class='bx bx-folder'></i> {$article.Category.Name}</span>
                        <span><i class='bx bx-calendar'></i> {$article.Time('Y-m-d')}</span>
                        <span><i class='bx bx-show'></i> {$article.ViewNums} 阅读</span>
                    </div>
                </div>

                <div class="article-body">
                    {$article.Content}
                </div>
            </div>
        </main>
{template:footer}
`;
fs.writeFileSync(path.join(themeDir, 'template', 'single.php'), singlePhp);
fs.writeFileSync(path.join(themeDir, 'template', 'post-single.php'), singlePhp);
fs.writeFileSync(path.join(themeDir, 'template', 'post-page.php'), singlePhp);

console.log("✅ Z-Blog 原生主题编译成功！保存在 zblog_theme/AirReview 目录");
