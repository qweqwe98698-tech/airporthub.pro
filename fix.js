const fs = require('fs');
let data = fs.readFileSync('js/article_data.js', 'utf8');
// 查找 \` 并替换为 `
data = data.split('\\`').join('`');
fs.writeFileSync('js/article_data.js', data);
console.log('Fixed syntax errors.');
