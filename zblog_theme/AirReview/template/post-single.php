{* Template Name: 文章详情 *}
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
