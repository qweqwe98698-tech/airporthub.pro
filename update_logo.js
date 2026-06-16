const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'tutorials.html',
    'apple_id.html',
    'free_nodes.html',
    'ai_tools.html',
    'ai_dev.html',
    'social_media.html',
    'ecommerce.html',
    'crypto.html'
];

files.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Replace NODE ANALYTICS with AIRPORT REVIEWS
        if (content.includes('<span>NODE ANALYTICS</span>')) {
            content = content.replace(/<span>NODE ANALYTICS<\/span>/g, '<span>AIRPORT REVIEWS</span>');
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Updated ' + file);
        } else {
            console.log('Target text not found in ' + file);
        }
    } else {
        console.log('File not found: ' + file);
    }
});
