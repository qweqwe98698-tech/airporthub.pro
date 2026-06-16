const fs = require('fs');
let data = fs.readFileSync('js/tutorial_data.js', 'utf8');
data = data.replace(/\\`/g, '`');
fs.writeFileSync('js/tutorial_data.js', data);
console.log('Fixed properly!');
