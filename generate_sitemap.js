const fs = require('fs');
const path = require('path');

const domain = 'https://airporthub.pro'; // Change this if needed
const dirPath = __dirname;

const files = fs.readdirSync(dirPath);
const htmlFiles = files.filter(file => file.endsWith('.html'));

// Filter out some internal or template files if necessary
const excludeFiles = ['article_demo.html', 'article_netflix.html', 'article_scam.html', 'tutorial_view.html']; 
const finalFiles = htmlFiles.filter(file => !excludeFiles.includes(file));

// Date formatting for sitemap
const today = new Date().toISOString().split('T')[0];

let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

finalFiles.forEach(file => {
    let priority = '0.6';
    let changefreq = 'weekly';
    
    // Assign higher priority to hub pages
    if (file === 'index.html') {
        priority = '1.0';
        changefreq = 'daily';
    } else if (file === 'articles.html' || file === 'tutorials.html' || file === 'free_nodes.html') {
        priority = '0.9';
        changefreq = 'daily';
    } else if (['ai_tools.html', 'ai_dev.html', 'social_media.html', 'ecommerce.html', 'crypto.html', 'streaming.html', 'gaming.html', 'design.html', 'review.html'].includes(file)) {
        priority = '0.8';
        changefreq = 'weekly';
    } else if (file === 'about.html') {
        priority = '0.5';
        changefreq = 'monthly';
    }

    sitemapXml += '  <url>\n';
    sitemapXml += `    <loc>${domain}/${file}</loc>\n`;
    sitemapXml += `    <lastmod>${today}</lastmod>\n`;
    sitemapXml += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemapXml += `    <priority>${priority}</priority>\n`;
    sitemapXml += '  </url>\n';
});

// Read article_data.js to include dynamic review pages
const articleDataPath = path.join(__dirname, 'js', 'article_data.js');
if (fs.existsSync(articleDataPath)) {
    const articleDataContent = fs.readFileSync(articleDataPath, 'utf8');
    // Extract keys using a regex (e.g. "飞猫云": {)
    const regex = /"([^"]+)":\s*\{/g;
    let match;
    let dynamicCount = 0;
    while ((match = regex.exec(articleDataContent)) !== null) {
        const id = encodeURIComponent(match[1]);
        sitemapXml += '  <url>\n';
        sitemapXml += `    <loc>${domain}/review.html?id=${id}</loc>\n`;
        sitemapXml += `    <lastmod>${today}</lastmod>\n`;
        sitemapXml += `    <changefreq>monthly</changefreq>\n`;
        sitemapXml += `    <priority>0.7</priority>\n`;
        sitemapXml += '  </url>\n';
        dynamicCount++;
    }
    console.log(`✅ 已额外包含 ${dynamicCount} 个动态评测页面至 Sitemap`);
}

sitemapXml += '</urlset>';

// Write sitemap.xml
fs.writeFileSync(path.join(dirPath, 'sitemap.xml'), sitemapXml);
console.log(`✅ 成功生成 sitemap.xml，共包含 ${finalFiles.length} 个页面链接。`);

// Write robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync(path.join(dirPath, 'robots.txt'), robotsTxt);
console.log('✅ 成功生成 robots.txt。');
