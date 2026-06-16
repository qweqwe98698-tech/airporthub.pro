const fs = require('fs');
const path = require('path');

// Read index.html and extract the correct sidebar
const indexContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const sidebarMatch = indexContent.match(/<aside class="sidebar">[\s\S]*?<\/aside>/);

if (!sidebarMatch) {
    console.error('Could not find sidebar in index.html');
    process.exit(1);
}

let sidebarHtml = sidebarMatch[0];

const dataActiveRegex = /<a href="index\.html" style=".*?color: #fff; background: rgba\(255,255,255,0\.05\);.*?">(\s*)<i class='bx bx-data' style=".*?color: #fff;"><\/i> 数据看板(\s*)<\/a>/;
const dataInactiveLink = '\n                <a href="index.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class=\'bx bx-data\' style="font-size: 20px; color: inherit;"></i> 数据看板\n                </a>';

sidebarHtml = sidebarHtml.replace(dataActiveRegex, dataInactiveLink);

// Find all HTML files to inject
const allFiles = fs.readdirSync(__dirname);
const filesToInject = allFiles.filter(f => f.endsWith('.html') && f !== 'index.html');

filesToInject.forEach(file => {
    const fullPath = path.join(__dirname, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix dashboard class to dashboard-wrapper so layout doesn't overlap
    content = content.replace(/<div class="dashboard">/, '<div class="dashboard-wrapper">');

    let newSidebar = sidebarHtml;
    
    if (file === 'articles.html') {
        // Make articles.html active
        const articlesInactiveRegex = /<a href="articles\.html" style=".*?">(\s*)<i class='bx bx-news' style=".*?"><\/i> 最新文章(\s*)<\/a>/;
        const articlesActiveLink = '\n                <a href="articles.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class=\'bx bx-news\' style="font-size: 20px; color: #fff;"></i> 最新文章\n                </a>';
        newSidebar = newSidebar.replace(articlesInactiveRegex, articlesActiveLink);
    } else if (file === 'about.html') {
        // Make about.html active
        const aboutInactiveRegex = /<a href="about\.html" style=".*?">(\s*)<i class='bx bx-info-circle' style=".*?"><\/i> 关于本站与防骗声明(\s*)<\/a>/;
        const aboutActiveLink = '\n                <a href="about.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class=\'bx bx-info-circle\' style="font-size: 20px; color: #a855f7;"></i> 关于本站与防骗声明\n                </a>';
        newSidebar = newSidebar.replace(aboutInactiveRegex, aboutActiveLink);
    }
    
    if (content.includes('<!-- NAV_INJECT_PLACEHOLDER -->')) {
        content = content.replace('<!-- NAV_INJECT_PLACEHOLDER -->', newSidebar);
    } else {
        content = content.replace(/<aside class="sidebar">[\s\S]*?<\/aside>/, newSidebar);
    }
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Fixed and Injected sidebar into ' + file);
});
