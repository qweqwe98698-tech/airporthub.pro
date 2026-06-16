{* Template Name: 文章列表 *}
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
