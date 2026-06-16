const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const files = fs.readdirSync(dirPath);
const htmlFiles = files.filter(f => f.endsWith('.html'));

let updatedCount = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dirPath, file), 'utf8');
    
    let originalContent = content;
    
    // Replace AIRPORT REVIEWS
    content = content.replace(/AIRPORT REVIEWS/g, "AirportHub");
    content = content.replace(/Airport Reviews/gi, "AirportHub");
    
    // For index.html, replace the main title
    if (file === 'index.html') {
        content = content.replace(/<title>.*?<\/title>/, "<title>AirportHub 官网｜全球分享高速网络加速与 AI 工具访问指南</title>");
        // Update dashboard welcome text if applicable
        content = content.replace(/<h1.*?>.*?<\/h1>/, "<h1>AirportHub 官网｜全球分享高速网络加速与 AI 工具访问指南</h1>");
    }

    if (content !== originalContent) {
        fs.writeFileSync(path.join(dirPath, file), content, 'utf8');
        updatedCount++;
    }
});

console.log(`✅ 成功将 ${updatedCount} 个 HTML 文件中的品牌名替换为 AirportHub`);

// Now update generate_sitemap.js
const sitemapScriptPath = path.join(dirPath, 'generate_sitemap.js');
if (fs.existsSync(sitemapScriptPath)) {
    let sitemapScript = fs.readFileSync(sitemapScriptPath, 'utf8');
    sitemapScript = sitemapScript.replace(/https:\/\/jichangpingce\.club/g, "https://airporthub.pro");
    fs.writeFileSync(sitemapScriptPath, sitemapScript, 'utf8');
    console.log("✅ 成功更新 sitemap 生成脚本域名");
}
