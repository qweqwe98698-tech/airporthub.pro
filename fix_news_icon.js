const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    
    // Fix backslashes in class
    if (content.includes("class=\\'bx bx-news\\'")) {
        content = content.replace(/class=\\'bx bx-news\\'/g, "class='bx bx-news'");
        fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
        console.log('Fixed syntax in ' + file);
    }
});
