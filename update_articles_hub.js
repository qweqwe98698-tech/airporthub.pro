const fs = require('fs');
const path = require('path');

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

let htmlPath = path.join(__dirname, 'articles.html');
let html = fs.readFileSync(htmlPath, 'utf8');

let dynamicArticlesHtml = '';
airports.forEach(airport => {
    dynamicArticlesHtml += `
                    <a href="review_airport_${airport.id}.html" class="article-card">
                        <div class="article-icon" style="color: ${airport.color}; background: ${airport.color}15;"><i class='bx ${airport.icon}'></i></div>
                        <h3>【2026最新】${airport.provider} 深度评测：真实测速与购买建议</h3>
                        <p>独家网络测速与流媒体解锁报告，深度扒皮 ${airport.provider} 的线路质量，买前必看的防坑避雷指南。</p>
                        <div class="article-meta">
                            <span><i class='bx bx-bar-chart'></i> ${airport.read} 阅读</span>
                            <span class="article-meta-link" style="color: ${airport.color};">阅读全文 <i class='bx bx-right-arrow-alt'></i></span>
                        </div>
                    </a>`;
});

// Insert before the closing tag of .article-grid
html = html.replace('</div>\n            </div>\n        </main>', dynamicArticlesHtml + '\n                </div>\n            </div>\n        </main>');

fs.writeFileSync(htmlPath, html);
console.log('Successfully injected 16 articles into articles.html');
