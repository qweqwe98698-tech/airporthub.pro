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
        
        // Regex to match the hr and the promos link
        const regex = /[ \t]*<hr style="border: none; border-top: 1px solid rgba\(255,255,255,0\.05\); margin: 15px 0;">\s*<a href="promos\.html"[\s\S]*?<\/a>\s*(?=<\/nav>)/;
        
        if (regex.test(content)) {
            content = content.replace(regex, '\n');
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Removed promos nav from ' + file);
        } else {
            console.log('Could not find promos nav in ' + file);
        }
    }
});
