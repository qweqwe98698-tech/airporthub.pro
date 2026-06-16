const fs = require('fs');
let data = fs.readFileSync('js/app.js', 'utf8');
data = data.replace(/protocols:\s*\[.*?\],/g, 'protocols: ["IEPL", "BGP", "Trojan", "Vless", "SS/SSR"],');
fs.writeFileSync('js/app.js', data);
console.log('Protocols updated successfully');
