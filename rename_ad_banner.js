const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 
    'ai_tools.html', 'ai_dev.html', 'social_media.html', 'ecommerce.html', 
    'crypto.html', 'streaming.html', 'gaming.html', 'design.html', 'promos.html'
];

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        const oldText = '🔥 站长专属神仙机场';
        const newText = '🔥 光速云机场';
        
        if (content.includes(oldText)) {
            content = content.replace(newText, newText); // Just in case
            content = content.replace(new RegExp(oldText, 'g'), newText);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Updated banner in ' + file);
        } else {
            console.log('Text not found in ' + file);
        }
    }
});
