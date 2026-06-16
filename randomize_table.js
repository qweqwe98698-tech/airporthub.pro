const fs = require('fs');
const path = require('path');

let appJsPath = path.join(__dirname, 'js', 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// We will use regex replacement with a reviver function to dynamically replace protocols and uptimeBars
// Since JSON parsing a JS object string is hard, we can just replace the specific strings.

const protocolsOptions = [
    '["Trojan", "Vless"]',
    '["SS", "SSR"]',
    '["IEPL", "IPLC"]',
    '["BGP 中转", "专线"]',
    '["Trojan", "SS"]',
    '["高防", "Vmess"]',
    '["Vless", "中转"]',
    '["IPLC", "SSR"]',
    '["全网", "BGP"]'
];

function getRandomProtocols() {
    return protocolsOptions[Math.floor(Math.random() * protocolsOptions.length)];
}

function getRandomUptimeBars() {
    let bars = [];
    for(let i=0; i<13; i++) {
        let rand = Math.random();
        if (rand < 0.85) bars.push(1); // 85% green
        else if (rand < 0.98) bars.push(2); // 13% orange
        else bars.push(3); // 2% red
    }
    return '[' + bars.join(',') + ']';
}

// We match lines like: protocols: ["IEPL/IPLC", "SSR/V2ray"], uptime: "99.xx%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1],
const regex = /protocols:\s*\["IEPL\/IPLC",\s*"SSR\/V2ray"\],\s*uptime:\s*"99\.\d+%",\s*uptimeBars:\s*\[1,1,1,1,1,1,1,1,1,1,1,1,1\]/g;

let updatedContent = appJsContent.replace(regex, (match) => {
    // Keep uptime value, replace protocols and uptimeBars
    let uptimeMatch = match.match(/uptime:\s*"99\.\d+%"/);
    let uptimeStr = uptimeMatch ? uptimeMatch[0] : 'uptime: "99.85%"';
    
    return `protocols: ${getRandomProtocols()}, ${uptimeStr}, uptimeBars: ${getRandomUptimeBars()}`;
});

fs.writeFileSync(appJsPath, updatedContent, 'utf8');
console.log("Randomized protocols and uptime bars successfully.");
