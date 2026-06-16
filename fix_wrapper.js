const fs = require('fs');
const path = require('path');

const files = ['articles.html', 'article_demo.html'];

files.forEach(file => {
    let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    content = content.replace('<div class="dashboard">', '<div class="dashboard-wrapper">');
    fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
    console.log('Fixed wrapper in ' + file);
});
