const fs = require('fs');
const path = require('path');

const themeDir = path.join(__dirname, 'zblog_theme', 'AirReview');
const outputFile = path.join(__dirname, 'AirReview.zba');

function getFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, filesList);
        } else {
            filesList.push(fullPath);
        }
    }
    return filesList;
}

const files = getFiles(themeDir);

let zbaContent = `<?xml version="1.0" encoding="utf-8"?>\n<app version="php" type="theme">\n`;

// Read theme.xml to extract meta
const themeXmlPath = path.join(themeDir, 'theme.xml');
if (fs.existsSync(themeXmlPath)) {
    const themeXml = fs.readFileSync(themeXmlPath, 'utf8');
    // Extract everything between <theme ...> and </theme>
    const match = themeXml.match(/<theme.*?>([\s\S]*?)<\/theme>/i);
    if (match) {
        zbaContent += match[1] + "\n";
    }
}

zbaContent += `<folder>\n`;

for (const file of files) {
    if (file === themeXmlPath) continue; // Skip theme.xml in the folder section
    const relPath = path.relative(themeDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file);
    const base64Content = content.toString('base64');
    zbaContent += `  <stream path="${relPath}"><![CDATA[${base64Content}]]></stream>\n`;
}

zbaContent += `</folder>\n</app>`;

fs.writeFileSync(outputFile, zbaContent);
console.log(`✅ ZBA 文件打包成功！已生成: ${outputFile}`);
