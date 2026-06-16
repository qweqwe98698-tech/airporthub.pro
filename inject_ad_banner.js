const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 
    'ai_tools.html', 'ai_dev.html', 'social_media.html', 'ecommerce.html', 
    'crypto.html', 'streaming.html', 'gaming.html', 'design.html', 'promos.html'
];

const newAdBanner = `
            <div class="ad-banner" style="margin-top: auto; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; margin-bottom: 20px; border: 1px solid var(--border);">
                <h4 style="color: #f43f5e; margin-bottom: 5px; font-size: 14px;">🔥 光速云机场</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属折扣码：<strong style="color: #f43f5e; user-select: all;">AMM</strong></p>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">防跑路稳定首选，全网测速第一。</p>
                <button onclick="window.location.href='index.html'" style="width: 100%; padding: 8px; background: #f43f5e; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">立即抢购专属节点</button>
            </div>
        </aside>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Remove existing ad-banner if it exists
        const adBannerRegex = /<div class="ad-banner"[\s\S]*?<\/div>\s*<\/aside>/;
        if (adBannerRegex.test(content)) {
            content = content.replace(adBannerRegex, newAdBanner);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Updated ad banner in ' + file);
        } else {
            // Inject before </aside>
            content = content.replace(/<\/aside>/, newAdBanner);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Injected ad banner in ' + file);
        }
    }
});
