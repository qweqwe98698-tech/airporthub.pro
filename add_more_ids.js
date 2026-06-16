const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'apple_id.html');
let content = fs.readFileSync(filePath, 'utf8');

const accounts = [
    { region: '🇺🇸', name: '美区高级共享账号 (一)', status: '正常运行', email: 'usa_vip_01@jichangpingce.club', pass: 'Share!@#2026', apps: ['Shadowrocket ($2.99)', 'TikTok', 'YouTube'], premium: true, badge: '极速号' },
    { region: '🇺🇸', name: '美区备用共享账号 (二)', status: '正常运行', email: 'usa_free_02@jichangpingce.club', pass: 'Apple^Free2026', apps: ['Potatso Lite', 'Twitter', 'Netflix'], premium: false },
    { region: '🇺🇸', name: '美区小火箭专享号 (三)', status: '限制使用', email: 'rocket_usa_03@jichangpingce.club', pass: 'Rocket#2026', apps: ['Shadowrocket ($2.99)', 'Spotify'], premium: true, badge: '被风控' },
    { region: '🇺🇸', name: '美区备用共享账号 (四)', status: '正常运行', email: 'usa_free_04@jichangpingce.club', pass: 'UsaShare*99', apps: ['Potatso Lite', 'Facebook'], premium: false },
    { region: '🇺🇸', name: '美区高级共享账号 (五)', status: '正常运行', email: 'usa_vip_05@jichangpingce.club', pass: 'Shadow^2026VIP', apps: ['Shadowrocket ($2.99)', 'Instagram'], premium: true },
    { region: '🇭🇰', name: '港区高级账号 (含圈X/Loon)', status: '正常运行', email: 'hk_pro_01@jichangpingce.club', pass: 'HkCloud!2026', apps: ['Quantumult X ($7.99)', 'Loon ($5.99)'], premium: true, badge: '极客首选' },
    { region: '🇭🇰', name: '港区备用账号 (二)', status: '正常运行', email: 'hk_free_02@jichangpingce.club', pass: 'HkShare@2026', apps: ['Stash ($3.99)', 'YouTube'], premium: true },
    { region: '🇭🇰', name: '港区高级账号 (三)', status: '频繁登录锁定', email: 'hk_pro_03@jichangpingce.club', pass: 'HkLoon$2026', apps: ['Loon ($5.99)', 'TikTok'], premium: true },
    { region: '🇯🇵', name: '日区专属账号 (一)', status: '正常运行', email: 'jp_share_01@jichangpingce.club', pass: 'JpAnime^2026', apps: ['Shadowrocket ($2.99)', 'NicoNico'], premium: true },
    { region: '🇯🇵', name: '日区备用账号 (二)', status: '正常运行', email: 'jp_free_02@jichangpingce.club', pass: 'JpFree*2026', apps: ['Potatso Lite', 'Line'], premium: false },
    { region: '🇹🇼', name: '台区高级账号 (一)', status: '正常运行', email: 'tw_pro_01@jichangpingce.club', pass: 'TwShadow!2026', apps: ['Shadowrocket ($2.99)', 'Bahamut'], premium: true },
    { region: '🇹🇼', name: '台区顶级极客号 (二)', status: '正常运行', email: 'tw_surge_02@jichangpingce.club', pass: 'TwSurge$2026', apps: ['Surge 5 ($49.99)'], premium: true, badge: '土豪专属' },
    { region: '🇬🇧', name: '英区备用账号 (一)', status: '正常运行', email: 'uk_share_01@jichangpingce.club', pass: 'UkFree@2026', apps: ['Shadowrocket ($2.99)'], premium: true },
    { region: '🇸🇬', name: '新加坡专属账号 (一)', status: '正常运行', email: 'sg_share_01@jichangpingce.club', pass: 'SgFly*2026', apps: ['Quantumult X ($7.99)', 'Loon'], premium: true },
    { region: '🇺🇸', name: '美区备用共享账号 (六)', status: '正常运行', email: 'usa_free_06@jichangpingce.club', pass: 'UsaBackup^2026', apps: ['Potatso Lite'], premium: false },
];

function generateCard(acc) {
    const isPremium = acc.premium ? ' premium' : '';
    let statusStyle = '';
    if (acc.status.includes('限制') || acc.status.includes('锁定')) {
        statusStyle = 'background: rgba(239, 68, 68, 0.1); color: #ef4444;';
    } else if (acc.status.includes('运行')) {
        statusStyle = 'background: rgba(16, 185, 129, 0.1); color: #10b981;';
    }
    
    let appsHtml = '';
    acc.apps.forEach(app => {
        appsHtml += `<span class="app-tag">${app}</span>`;
    });

    let actionBtnHtml = '';
    if (acc.name.includes('小火箭') || acc.apps.includes('Shadowrocket ($2.99)')) {
        actionBtnHtml = `<button class="account-action" onclick="window.open('index.html', '_blank')">👉 获取搭配小火箭的高速节点</button>`;
    } else if (acc.apps.includes('Quantumult X ($7.99)')) {
        actionBtnHtml = `<button class="account-action" onclick="window.open('index.html', '_blank')">👉 获取搭配圈X的全能专线</button>`;
    } else if (acc.apps.includes('Surge 5 ($49.99)')) {
        actionBtnHtml = `<button class="account-action" onclick="window.open('index.html', '_blank')">👉 顶级神兵：获取 Surge 专属托管</button>`;
    }

    let extraDetail = '';
    if (acc.badge === '极速号' || acc.premium) {
        extraDetail = `<div class="detail-row" style="margin-top: 10px; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 10px;"><span class="detail-label">最后检测</span><span class="detail-label" style="color: #10b981;">10分钟前</span></div>`;
    }

    return `
                    <div class="account-card${isPremium}">
                        <div class="account-header">
                            <div class="account-region">
                                ${acc.region} ${acc.name}
                            </div>
                            <div class="account-status" style="${statusStyle}">${acc.status}</div>
                        </div>
                        <div class="account-details">
                            <div class="detail-row">
                                <span class="detail-label">账号</span>
                                <span class="detail-value secret-btn" data-value="${acc.email}" onclick="copyToClipboard(this)"><i class="bx bx-copy"></i> 点击获取</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">密码</span>
                                <span class="detail-value secret-btn" data-value="${acc.pass}" onclick="copyToClipboard(this)"><i class="bx bx-copy"></i> 点击获取</span>
                            </div>
                            ${extraDetail}
                        </div>
                        <div class="apps-included">
                            <div class="apps-title">该账号内含：</div>
                            <div class="app-tags">
                                ${appsHtml}
                            </div>
                        </div>
                        ${actionBtnHtml}
                    </div>`;
}

let allCardsHtml = accounts.map(generateCard).join('\n');

// Replace the content inside <div class="account-grid"> ... </div>
const startIndex = content.indexOf('<div class="account-grid">');
const endIndex = content.indexOf('<div class="tutorial-steps">');

if (startIndex !== -1 && endIndex !== -1) {
    const startStr = content.substring(0, startIndex + '<div class="account-grid">\n'.length);
    const endStr = content.substring(endIndex);
    
    // add an ending div to close account-grid because we cut before tutorial-steps
    content = startStr + allCardsHtml + '\n                </div>\n\n                ' + endStr;
    
    fs.writeFileSync(filePath, content);
    console.log("Successfully generated a massive list of Apple IDs.");
} else {
    console.error("Could not find the injection points.");
}
