const fs = require('fs');
const path = require('path');

const sidebarContent = fs.readFileSync(path.join(__dirname, 'sidebar.txt'), 'utf8');

const filesToInject = ['articles.html', 'article_demo.html'];

filesToInject.forEach(file => {
    const fullPath = path.join(__dirname, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    content = content.replace('<!-- NAV_INJECT_PLACEHOLDER -->', sidebarContent);
    
    // Fix active state for articles.html if needed
    if (file === 'articles.html') {
        // Find the articles.html link and make it active
        const articlesLinkRegex = /<a href="articles\.html" style=".*?">[\s\S]*?<\/a>/;
        const activeStyle = 'display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;';
        const newArticlesLink = `
                <a href="articles.html" style="\${activeStyle}">
                    <i class='bx bx-news' style="font-size: 20px; color: #fff;"></i> 最新文�?                </a>`;
        content = content.replace(articlesLinkRegex, newArticlesLink.trim());
    }
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Injected sidebar into ' + file);
});

