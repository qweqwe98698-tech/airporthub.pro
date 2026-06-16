const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'articles.html');
let content = fs.readFileSync(filePath, 'utf8');

// Find the boundaries of the articles container
const startGridIndex = content.indexOf('<div class="article-grid">');
const endContainerIndex = content.lastIndexOf('</div>\n        \n            <!-- Site Footer -->');

if (startGridIndex === -1 || endContainerIndex === -1) {
    console.error('Could not find article grid boundaries.');
    process.exit(1);
}

// Extract everything between start of grid and end of container
const gridContent = content.substring(startGridIndex, endContainerIndex);

// Regex to match individual article cards
const cardRegex = /<a href="([^"]+)" class="article-card">([\s\S]*?)<\/a>/g;

const categories = {
    'stream': { id: 'stream', title: '流媒体影视解锁', icon: 'bx-movie-play', color: '#E50914', cards: [] },
    'game': { id: 'game', title: '国际游戏与电竞', icon: 'bx-game', color: '#10b981', cards: [] },
    'design': { id: 'design', title: '设计与二次元', icon: 'bx-palette', color: '#ec4899', cards: [] },
    'social': { id: 'social', title: '社交媒体防关联', icon: 'bx-world', color: '#0ea5e9', cards: [] },
    'ecom': { id: 'ecom', title: '跨境电商防风控', icon: 'bx-store', color: '#f59e0b', cards: [] },
    'crypto': { id: 'crypto', title: '数字货币与Web3', icon: 'bx-bitcoin', color: '#f59e0b', cards: [] },
    'dev': { id: 'dev', title: 'AI工具与开发', icon: 'bx-bot', color: '#a855f7', cards: [] },
    'review': { id: 'review', title: '机场深度评测', icon: 'bx-radar', color: '#3b82f6', cards: [] },
    'other': { id: 'other', title: '基础干货与防骗', icon: 'bx-book-open', color: '#64748b', cards: [] }
};

let match;
while ((match = cardRegex.exec(gridContent)) !== null) {
    const href = match[1];
    const innerHtml = match[2];
    const fullCard = `<a href="${href}" class="article-card">${innerHtml}</a>`;
    
    if (href.startsWith('tutorial_stream_')) categories.stream.cards.push(fullCard);
    else if (href.startsWith('tutorial_game_')) categories.game.cards.push(fullCard);
    else if (href.startsWith('tutorial_design_')) categories.design.cards.push(fullCard);
    else if (href.startsWith('tutorial_social_')) categories.social.cards.push(fullCard);
    else if (href.startsWith('tutorial_ecom_')) categories.ecom.cards.push(fullCard);
    else if (href.startsWith('tutorial_crypto_')) categories.crypto.cards.push(fullCard);
    else if (href.startsWith('tutorial_dev_') || href.startsWith('ai_tutorial_')) categories.dev.cards.push(fullCard);
    else if (href.startsWith('review_airport_')) categories.review.cards.push(fullCard);
    else categories.other.cards.push(fullCard);
}

// Build the TOC HTML
let tocHtml = `
<div class="toc-container" style="position: sticky; top: 0; background: var(--surface); z-index: 100; padding: 15px 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center;">
    <span style="color: var(--text-muted); font-weight: bold; margin-right: 10px;"><i class='bx bx-menu-alt-left'></i> 快速导航：</span>
`;

let bodyHtml = '';

for (const key in categories) {
    const cat = categories[key];
    if (cat.cards.length === 0) continue;
    
    // Add to TOC
    tocHtml += `<a href="#cat-${cat.id}" style="padding: 6px 12px; background: rgba(255,255,255,0.05); color: #fff; border-radius: 20px; text-decoration: none; font-size: 13px; border: 1px solid rgba(255,255,255,0.1); transition: 0.2s;" onmouseover="this.style.background='${cat.color}20'; this.style.borderColor='${cat.color}'" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.borderColor='rgba(255,255,255,0.1)'"><i class='bx ${cat.icon}'></i> ${cat.title} (${cat.cards.length})</a>`;
    
    // Add to body
    bodyHtml += `
    <div id="cat-${cat.id}" style="margin-top: 50px; margin-bottom: 20px; padding-top: 80px; margin-top: -80px;">
        <h2 style="color: #fff; font-size: 24px; display: flex; align-items: center; gap: 10px; border-left: 4px solid ${cat.color}; padding-left: 15px; margin-bottom: 20px;">
            <i class='bx ${cat.icon}' style="color: ${cat.color};"></i> ${cat.title}
        </h2>
        <div class="article-grid">
            ${cat.cards.join('\n')}
        </div>
    </div>
    `;
}

tocHtml += '</div>';

// Now replace the content
const preContent = content.substring(0, startGridIndex);
const postContent = content.substring(endContainerIndex);

const finalHtml = preContent + tocHtml + bodyHtml + postContent;

fs.writeFileSync(filePath, finalHtml, 'utf8');
console.log('✅ articles.html has been refactored with a sticky TOC and categorized grid!');
