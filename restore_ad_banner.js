const fs = require('fs');
const path = require('path');

const filesToRestore = [
    'index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 
    'ai_tools.html', 'ai_dev.html', 'social_media.html', 'ecommerce.html', 
    'crypto.html'
];

filesToRestore.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Remove the ad-banner
        const adBannerRegex = /[ \t]*<div class="ad-banner"[\s\S]*?<\/div>\s*(?=<\/aside>)/;
        if (adBannerRegex.test(content)) {
            content = content.replace(adBannerRegex, '\n        ');
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Removed ad banner and restored ' + file);
        } else {
            console.log('Ad banner not found in ' + file);
        }
    }
});
