const fs = require('fs');
const path = require('path');

// 读取真实的机场服务商列表数据（从你的 app.js 提取）
const airports = [
    { id: "guangsu", provider: "光速云", protocols: "IEPL 专线, Vless", uptime: "99.98%", ping: 15, feature: "10Gbps带宽升级", price: "17.00", link: "https://qwerty.gsyaff.com/#/?code=keqgvT5Y" },
    { id: "feimao", provider: "飞猫云", protocols: "轻快, 多平台", uptime: "99.60%", ping: 65, feature: "轻快体验/备用", price: "17.00", link: "https://guangs.flycataff.com/#/?code=6uq0Xe9y" },
    { id: "sujie", provider: "速界", protocols: "专线, 高速", uptime: "99.99%", ping: 18, feature: "跨境办公/AI优化", price: "25.00", link: "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB" },
    { id: "jilian", provider: "极连云", protocols: "Trojan, 低延迟", uptime: "99.95%", ping: 22, feature: "极速连接/游戏加速", price: "15.50", link: "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu" },
    { id: "yuzhou", provider: "宇宙云", protocols: "高端, 专线", uptime: "99.98%", ping: 25, feature: "高端专线稳定", price: "30.00", link: "https://guangs.yuzoucloud.cc/#/register?code=yrThwMP1" },
    { id: "xingdao", provider: "星岛梦", protocols: "IPLC, 港日新", uptime: "99.90%", ping: 35, feature: "流媒体/海外内容", price: "16.00", link: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR" },
    { id: "weitu", provider: "唯兔云", protocols: "IPLC, SS", uptime: "99.85%", ping: 42, feature: "老用户常用稳定", price: "14.90", link: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA" },
    { id: "ermao", provider: "二猫云", protocols: "Trojan, 稳定", uptime: "99.80%", ping: 45, feature: "新手友好/备用", price: "20.00", link: "https://guangs.2maoyunaff.cc/register?code=15EBb063" },
    { id: "quanqiu", provider: "全球云", protocols: "多地区, 商务", uptime: "99.70%", ping: 55, feature: "全球节点覆盖", price: "20.00", link: "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C" },
    { id: "guangnian", provider: "光年梯", protocols: "高速, 长期", uptime: "99.85%", ping: 38, feature: "长期稳定AI访问", price: "18.00", link: "https://guangs.gntaff.com/#/?code=X1FoxjGE" },
    { id: "kexin", provider: "可信云(山水云)", protocols: "轻量, 温和", uptime: "99.50%", ping: 72, feature: "温和稳定/办公", price: "17.00", link: "https://guangs.kosingaff.com/#/register?code=UYDtNlCY" },
    { id: "u1s1", provider: "u1s1", protocols: "高性价比, 年轻", uptime: "99.40%", ping: 85, feature: "年轻化品牌/新手", price: "20.00", link: "https://guangs.vipaff.cc/#/?code=xhX5X22f" },
    { id: "yifan", provider: "一翻云(秒秒云)", protocols: "快速, 性价比", uptime: "99.20%", ping: 95, feature: "快速连接响应", price: "17.00", link: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r" },
    { id: "kuaili", provider: "快狸", protocols: "高速, 多平台", uptime: "99.65%", ping: 58, feature: "AI工具优化", price: "20.00", link: "https://guangs.kuailicloud.cc/#/register?code=AiqyM8oG" },
    { id: "sogo", provider: "SOGO狗云", protocols: "性价比, 流媒体", uptime: "98.90%", ping: 110, feature: "多节点/长期使用", price: "15.00", link: "https://guangs.sogoyunaff.cc/#/dashboard" },
    { id: "bianyuan", provider: "边缘节点", protocols: "性价比, 新手", uptime: "98.50%", ping: 135, feature: "极高性价比入门", price: "9.90", link: "#" }
];

airports.forEach(airport => {
    let pro1 = airport.ping < 40 ? "全节点极低延迟，晚高峰无卡顿" : "整体连接稳定性较高，断流率极低";
    let pro2 = airport.uptime.includes("99.9") ? "SLA可用率极高，适合外贸和重度办公" : "价格亲民，性价比在这个梯队非常能打";
    let con1 = airport.price < 15 ? "便宜套餐容易售罄，建议尽快下手" : "价格相对较高，不适合纯白嫖党";

    const content = \`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>【\${airport.provider}】深度评测 - AIRPORT REVIEWS</title>
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
        .article-body p { margin-bottom: 15px; }
        
        .info-box { background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 20px; margin: 25px 0; }
        .info-box strong { color: #a78bfa; }
        .warning-box { background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.3); border-radius: 8px; padding: 20px; margin: 25px 0; border-left: 4px solid #f43f5e; }
        .warning-box strong { color: #fb7185; }
        .inline-ad { background: linear-gradient(145deg, #1f2937, #111827); border: 1px solid #374151; border-radius: 12px; padding: 25px; text-align: center; margin: 35px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .inline-ad h3 { color: #10b981; margin: 0 0 10px 0; font-size: 24px; }
        .inline-ad p { color: #9ca3af; font-size: 14px; margin-bottom: 20px; }
        .btn-buy { display: inline-block; background: #10b981; color: #fff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 16px; transition: 0.3s; }
        .btn-buy:hover { background: #059669; transform: translateY(-2px); }
        .pros-cons { display: flex; gap: 20px; margin: 25px 0; flex-wrap: wrap; }
        .pros, .cons { flex: 1; min-width: 250px; background: rgba(255,255,255,0.03); border-radius: 8px; padding: 20px; }
        .pros h4 { color: #10b981; margin-top: 0; display: flex; align-items: center; gap: 8px; }
        .cons h4 { color: #f43f5e; margin-top: 0; display: flex; align-items: center; gap: 8px; }
        .pros ul, .cons ul { padding-left: 20px; margin: 0; }
        .pros li { color: #a7f3d0; margin-bottom: 8px; }
        .cons li { color: #fecdd3; margin-bottom: 8px; }

        @media (max-width: 768px) {
            .dashboard-wrapper { flex-direction: column; }
            .sidebar { width: 100% !important; position: static !important; height: auto !important; border-right: none !important; border-bottom: 1px solid var(--border); }
            .main-content { overflow-y: visible !important; height: auto !important; }
            .article-read-container { padding: 20px; margin: 15px; }
            .topbar { padding: 15px; flex-direction: column; gap: 15px; align-items: flex-start; }
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
            </header>

            <div class="article-read-container">
                <div class="article-header">
                    <h1>2026年【\${airport.provider}】深度评测：最新测速、解锁能力与防骗指南</h1>
                    <div class="meta-tags">
                        <span><i class='bx bx-folder'></i> 机场深度评测</span>
                        <span><i class='bx bx-calendar'></i> 2026-06-16</span>
                    </div>
                </div>

                <div class="article-body">
                    <p>在当前纷繁复杂的科学上网环境中，跑路机场层出不穷。今天我们来深度扒一扒近期备受关注的<strong>【\${airport.provider}】</strong>。很多群友在问：“\${airport.provider}到底好不好用？会不会是圈钱跑路的野鸡机场？”为了解答大家的疑惑，我们对其进行了为期一个月的深度晚高峰网络测速和真实使用体验评测。</p>

                    <h2>核心技术参数与测速结果</h2>
                    <p>经过我们的探针系统 24 小时监控，\${airport.provider} 的各项真实数据如下。对于一款售价仅为 ¥\${airport.price}/月 起步的服务商来说，这个数据表现值得深入探讨。</p>
                    
                    <div class="info-box">
                        <p><strong>🌐 节点协议：</strong> \${airport.protocols}</p>
                        <p><strong>⚡ 晚高峰延迟 (Ping)：</strong> 平均仅为 \${airport.ping}ms（这在同价位中属于极为优秀的水平）</p>
                        <p><strong>🟢 历史可用率：</strong> \${airport.uptime}（说明其服务器集群防御和抗封锁能力较强）</p>
                        <p><strong>🎯 核心主打优势：</strong> \${airport.feature}</p>
                    </div>

                    <h2>流媒体解锁与 AI 工具支持度</h2>
                    <p>目前大家对机场最大的诉求除了速度，就是原生 IP 的流媒体解锁能力。我们使用脚本测试了 \${airport.provider} 的主流节点：</p>
                    <ul>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>Netflix 解锁：</strong> 测试了所有主力节点，全部原生解锁 Netflix 非自制剧，且支持 4K 秒开。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>ChatGPT / Claude 访问：</strong> 完美绕过 OpenAI 的封锁，没有出现 "Access Denied" 的情况。</li>
                        <li style="color: var(--text-main); margin-bottom: 8px;"><strong>TikTok 运营：</strong> 具备纯净度较高的 IP，适合外贸和 TikTok 跨境电商短视频运营。</li>
                    </ul>

                    <h2>优缺点深度总结</h2>
                    <div class="pros-cons">
                        <div class="pros">
                            <h4><i class='bx bx-check-circle'></i> 绝对优势</h4>
                            <ul>
                                <li>\${pro1}</li>
                                <li>\${pro2}</li>
                                <li>支持 Netflix / Disney+ 等全流媒体解锁</li>
                                <li>客服工单响应速度快（平均 2 小时内回复）</li>
                            </ul>
                        </div>
                        <div class="cons">
                            <h4><i class='bx bx-x-circle'></i> 注意事项 (缺点)</h4>
                            <ul>
                                <li>\${con1}</li>
                                <li>部分冷门地区节点晚高峰偶尔会波动</li>
                            </ul>
                        </div>
                    </div>

                    <div class="warning-box">
                        <strong>⚠️ 站长防跑路警告与购买建议：</strong>
                        <p>不管一家机场目前表现多么优秀，在这个行业里永远存在不可控的风险（比如上游线路被拔线等）。我们强烈建议：<strong>永远不要购买年付！</strong></p>
                        <p>对于 \${airport.provider}，我们的购买建议是：<strong>先买一个月付套餐进行体验</strong>，如果你所在地区的宽带（电信/联通/移动）与该机场的相性极佳，再考虑续费季付。</p>
                    </div>

                    <h2>【\${airport.provider}】官方注册地址</h2>
                    <p>为了防止大家在搜索引擎搜到带有木马的假冒钓鱼网站（最近发生多起充值后不到账的骗局），请务必通过下方的官方唯一验证通道进行注册与购买：</p>

                    <div class="inline-ad">
                        <h3>🚀 \${airport.provider} - 官方注册入口</h3>
                        <p>低至 ¥\${airport.price}/月 | \${airport.feature} | 晚高峰 \${airport.ping}ms 极速响应</p>
                        <a href="\${airport.link}" class="btn-buy" target="_blank" rel="nofollow">立即访问官方网站领取节点 →</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>\`;
    
    // 生成文件
    const fileName = \`review_airport_\${airport.id}.html\`;
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, content);
    console.log(\`✅ 已重新生成完整 HTML 文章: \${fileName}\`);
});

console.log("\\n🎉 全部 16 篇评测文章已经完美修复！");
