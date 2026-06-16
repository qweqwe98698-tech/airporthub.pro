{* Template Name: 公共侧边栏 *}
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
