const fs = require('fs');
const path = require('path');

const newAirports = [
    "龙猫云机场", "大象网络", "WgetCloud 全球加速", "悠兔机场", "Boost Net", "鹿语云机场", 
    "SSRDOG", "Viking Links", "Coffee Cloud", "YepFast 椰皮机场", "E-IX 云加速", "SpeedCAT 闪电猫机场", 
    "SS-ID 机场", "秒秒云", "AmyTelecom", "游乐园 VPN", "Kuromis 库洛米", "SkyLinX", 
    "Fastlink 机场", "MESL", "次元链接机场", "青云梯机场", "Nexitally 奶昔机场", "Flashfox 闪狐云", 
    "夜煞云机场", "贝贝云机场", "Bitz Net", "守候网络机场", "一云梯机场", "FATCAT 肥猫云机场", 
    "FlyingBird 飞鸟机场", "扬帆云", "Web3 加速器", "TNT Cloud", "蓝帆云", "CyberGuard", 
    "速云梯", "五树云机场", "飞天猪（Fliggy Cloud）", "酷酷云机场", "YkkCloud 机场", "尔湾云", 
    "XFLTD 养鸡场", "小鸡快跑机场", "COCODUCK", "疾风云", "Riolu 精灵学院", "BigME 大米机场", 
    "小旋风机场", "飞机云", "NieRCloud", "奈云", "最萌的云", "蛋挞云", "CATNET", "八戒机场", 
    "Anyland 机场", "老猫云机场", "Bridge the Wall", "魔戒机场", "Infiniport", "一枝红杏", 
    "iNetS 机场", "Naiu Network", "泡泡狗机场", "狗狗加速", "XX-AI", "ASH 微斯人", "OKANC", 
    "GLaDOS", "银河云"
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomPing = () => getRandomInt(30, 95);
const getRandomPrice = () => getRandomInt(15, 65).toFixed(2);
const features = ["全IPLC专线", "流媒体解锁专家", "超低延迟游戏加速", "跨境电商防风控", "AI原生IP解锁", "大流量不限速", "稳定防失联", "高性价比备用", "支持SSR/Vmess", "企业级高端专线"];

let appJsPath = path.join(__dirname, 'js', 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const currentRankMatch = appJsContent.match(/rank: "#(\d+)"/g);
let startRank = currentRankMatch ? currentRankMatch.length + 1 : 15;

let newTableDataStr = "";

newAirports.forEach((name, index) => {
    let cleanName = name.split(" ")[0].replace(/（.*?）/g, "");
    let price = getRandomPrice();
    let ping = getRandomPing();
    let feature = features[getRandomInt(0, features.length - 1)];
    let rank = startRank + index;
    let seed = Buffer.from(cleanName).toString('hex').slice(0, 8);
    
    newTableDataStr += `        {
            provider: "${name}", rank: "#${rank}", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=${seed}&backgroundColor=3b82f6", 
            protocols: ["IEPL/IPLC", "SSR/V2ray"], uptime: "99.${getRandomInt(50, 99)}%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            ping: ${ping}, pingColor: "${ping < 50 ? 'good' : 'warn'}", feature: "${feature}", price: "${price}", link: "https://google.com/search?q=${encodeURIComponent(name)}+机场"
        },\n`;
});

const tableDataEndRegex = /}\s*\];\s*const tbody = document\.getElementById\("table-body"\);/;
if (tableDataEndRegex.test(appJsContent)) {
    appJsContent = appJsContent.replace(tableDataEndRegex, "},\n" + newTableDataStr + "    ];\n\n    const tbody = document.getElementById(\"table-body\");");
    fs.writeFileSync(appJsPath, appJsContent, 'utf8');
    console.log("Updated app.js with 71 new airports.");
} else {
    console.log("Regex failed");
}
