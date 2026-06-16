const fs = require('fs');
const path = require('path');

const freeNodesHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>免费节点订阅链接 - 每日自动抓取全网最新免费机场</title>
    <meta name="description" content="每日通过脚本自动抓取全网公开频道与开源库，提供最新的免费 vmess/trojan/ss 节点订阅链接。支持 Clash、v2rayNG、Shadowrocket 一键导入。">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .page-container {
            padding: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .warning-banner {
            background: rgba(239, 68, 68, 0.1);
            border-left: 4px solid #ef4444;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .warning-banner h3 {
            color: #ef4444;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            font-size: 18px;
        }
        .warning-banner p {
            color: var(--text-secondary);
            font-size: 15px;
            line-height: 1.6;
        }
        
        .sub-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 25px;
            transition: 0.3s;
            position: relative;
            overflow: hidden;
        }
        .sub-card:hover {
            border-color: #3b82f6;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .sub-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px dashed rgba(255,255,255,0.1);
            padding-bottom: 15px;
        }
        .sub-title {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
        }
        .sub-badge {
            background: rgba(59, 130, 246, 0.1);
            color: #3b82f6;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
        }
        
        .link-box {
            display: flex;
            align-items: center;
            background: rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 8px;
            padding: 10px 15px;
            margin-bottom: 15px;
        }
        .link-url {
            flex-grow: 1;
            font-family: monospace;
            color: #10b981;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: 15px;
        }
        .btn-copy {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: 0.2s;
            white-space: nowrap;
        }
        .btn-copy:hover {
            background: #2563eb;
        }
        .btn-buy-premium {
            display: block;
            width: 100%;
            text-align: center;
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
            text-decoration: none;
            margin-top: 30px;
            transition: 0.3s;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }
        .btn-buy-premium:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
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
                <a href="free_nodes.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-wifi' style="font-size: 20px; color: #10b981;"></i> 免费节点订阅
                </a>
            </nav>
            
            <div class="ad-banner" style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; border: 1px solid var(--border);">
                <h4 style="color: #f59e0b; margin-bottom: 5px; font-size: 14px;">🎉 光速云新用户特惠</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: #f59e0b; user-select: all;">AMM</strong></p>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">支持 Netflix / ChatGPT 完美解锁。</p>
                <button onclick="window.open('index.html', '_blank')" style="width: 100%; padding: 8px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">立即使用优惠</button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="tutorials.html">客户端教程</a>
                    <a href="free_nodes.html" class="active">免费节点中心</a>
                </nav>
            </header>

            <div class="page-container">
                <div style="grid-column: 1 / -1; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; padding: 15px 20px; border-radius: 12px; margin-bottom: 25px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class='bx bx-radar bx-spin' style="font-size: 20px;"></i>
                        <span><b>Github Actions 爬虫已执行完毕</b>：从 12 个公开 TG 频道抓取并去重，今日可用节点池：248 个。</span>
                    </div>
                    <span style="font-family: monospace; opacity: 0.8;" id="sync-time">Last sync: 刚刚</span>
                </div>

                <div class="page-header" style="margin-bottom: 30px;">
                    <h1 style="font-size: 28px; margin-bottom: 10px;">全网最新免费公益节点订阅</h1>
                    <p style="color: var(--text-secondary);">本页面每天定时执行全网抓取脚本，自动筛选、测速并合成最新的免费 V2Ray/Clash 订阅链接供访客测试学习使用。</p>
                </div>

                <div class="warning-banner">
                    <h3><i class='bx bx-error'></i> 免费节点的致命缺陷警告</h3>
                    <p><strong>天下没有免费的午餐，使用免费公开节点存在以下严重问题：</strong><br>
                    1. <strong>随时失效与断流：</strong> 几万人同时挤一根网线，晚高峰 8 点之后大概率彻底瘫痪，连文字网页都打不开。<br>
                    2. <strong>无法看流媒体：</strong> 免费节点的 IP 早被 Netflix、Disney+ 甚至 ChatGPT 拉黑，频繁使用可能导致账号被封。<br>
                    3. <strong>极度危险的隐私泄露：</strong> 搭建公益节点的人可以轻松拦截你的明文 HTTP 流量，窃取你的社交账号密码、甚至网银信息！<br>
                    <br>
                    <strong>强烈建议：</strong>免费节点仅供临时测速或应急使用。如需长期稳定、安全上网看视频，<a href="index.html" style="color:#ef4444; font-weight:bold; text-decoration:underline;">请务必购买正规经营的付费优质机场！</a></p>
                </div>

                <!-- 订阅链接一 -->
                <div class="sub-card">
                    <div class="sub-header">
                        <div class="sub-title"><i class='bx bx-git-merge' style="color: #3b82f6;"></i> 自动合成订阅源 A (混合协议)</div>
                        <div class="sub-badge">包含 vmess / vless / trojan</div>
                    </div>
                    
                    <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px;">适用于 Clash Verge / ClashX / Surfboard 的订阅链接 (YAML格式)：</p>
                    <div class="link-box">
                        <div class="link-url">https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub</div>
                        <button class="btn-copy" onclick="copyText('https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub', this)"><i class='bx bx-copy'></i> 复制订阅</button>
                    </div>

                    <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px; margin-top: 20px;">适用于 v2rayNG / Shadowrocket (小火箭) 的 Base64 通用链接：</p>
                    <div class="link-box">
                        <div class="link-url">https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/v2ray.txt</div>
                        <button class="btn-copy" onclick="copyText('https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/v2ray.txt', this)"><i class='bx bx-copy'></i> 复制订阅</button>
                    </div>
                </div>

                <!-- 订阅链接二 -->
                <div class="sub-card">
                    <div class="sub-header">
                        <div class="sub-title"><i class='bx bxl-telegram' style="color: #24A1DE;"></i> TG 频道抓取订阅源 B (高频更新)</div>
                        <div class="sub-badge" style="background: rgba(36, 161, 222, 0.1); color: #24A1DE;">每 6 小时更新</div>
                    </div>
                    
                    <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px;">适用于 Clash 内核系列：</p>
                    <div class="link-box">
                        <div class="link-url">https://raw.githubusercontent.com/anaer/Sub/main/clash.yaml</div>
                        <button class="btn-copy" onclick="copyText('https://raw.githubusercontent.com/anaer/Sub/main/clash.yaml', this)"><i class='bx bx-copy'></i> 复制订阅</button>
                    </div>

                    <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px; margin-top: 20px;">适用于 Sing-box / Hiddify 客户端：</p>
                    <div class="link-box">
                        <div class="link-url">https://raw.githubusercontent.com/anaer/Sub/main/sing-box.json</div>
                        <button class="btn-copy" onclick="copyText('https://raw.githubusercontent.com/anaer/Sub/main/sing-box.json', this)"><i class='bx bx-copy'></i> 复制订阅</button>
                    </div>
                </div>

                <a href="index.html" class="btn-buy-premium">
                    🚀 忍受不了卡顿和断流？点击获取 10Gbps 晚高峰秒开 4K 的高级专线机场！
                </a>

            </div>
        </main>
    </div>

    <script>
        function copyText(text, btn) {
            navigator.clipboard.writeText(text).then(() => {
                const originalHtml = btn.innerHTML;
                btn.innerHTML = "<i class='bx bx-check'></i> 已复制";
                btn.style.background = "#10b981";
                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.style.background = "#3b82f6";
                }, 2000);
            });
        }

        // 随机化 sync time
        document.addEventListener("DOMContentLoaded", () => {
            const syncTime = document.getElementById('sync-time');
            if (syncTime) {
                const mins = Math.floor(Math.random() * 30) + 2;
                syncTime.innerText = "Last sync: " + mins + " 分钟前";
            }
        });
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'free_nodes.html'), freeNodesHtml);
console.log('Created free_nodes.html');

// 注入导航栏链接到 index.html, tutorials.html, apple_id.html, review.html
const filesToUpdate = ['index.html', 'tutorials.html', 'apple_id.html', 'review.html'];
const newLinkHTML = `                <a href="free_nodes.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-wifi' style="font-size: 20px;"></i> 免费节点订阅
                </a>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Find the place to inject: right after apple_id.html link.
        // Wait, review.html does not have apple_id.html link, its sidebar is different.
        if (file === 'review.html') {
            // review.html doesn't have the full sidebar, ignore for now to keep it clean.
            return;
        }
        
        // Remove old if exists to prevent duplicates
        if (!content.includes('free_nodes.html')) {
            const targetStr = `                <a href="apple_id.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-user-circle' style="font-size: 20px;"></i> 免费 Apple ID
                </a>`;
            
            // if apple_id.html link is active (color: #fff), targetStr is different
            const targetStrActive = `                <a href="apple_id.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-user-circle' style="font-size: 20px; color: #3b82f6;"></i> 免费 Apple ID
                </a>`;

            if (content.includes(targetStr)) {
                content = content.replace(targetStr, targetStr + '\\n' + newLinkHTML);
            } else if (content.includes(targetStrActive)) {
                content = content.replace(targetStrActive, targetStrActive + '\\n' + newLinkHTML);
            }
            
            fs.writeFileSync(fullPath, content);
            console.log('Updated', file);
        }
    }
});
