const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    
    // Match even with literal backslashes
    const reviewLinkRegex = /[ \t]*<a href="review\.html"[\s\S]*?<i class=[\\'"]+bx bx-star[\\'"]+[\s\S]*?<\/i>\s*机场评测\s*<\/a>\n?/;
    
    if (reviewLinkRegex.test(content)) {
        content = content.replace(reviewLinkRegex, '');
        fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
        console.log('Removed from ' + file);
    }
});
