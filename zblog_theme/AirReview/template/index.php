{* Template Name: 首页 *}
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
