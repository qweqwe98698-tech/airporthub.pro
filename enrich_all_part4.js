const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'js', 'tutorial_data.js');
let data = fs.readFileSync(targetFile, 'utf8');

// Apple TV Data
const appletvHtml = `
## 客厅影音核武器：Apple TV / 电视盒子 4K 翻墙指南

随着 Netflix、Disney+ 等流媒体的普及，越来越多人选择在客厅的大电视上享受 4K HDR 带来的视觉震撼。而 Apple TV 和各种安卓电视盒子，则是连接这些海外流媒体的最佳载体。

本篇教程将为你深度解析如何在电视端实现无感翻墙，让你的大屏设备瞬间变身最强影音终端。

### 一、Apple TV (tvOS 17 及以上) 翻墙方案

这是 Apple TV 玩家在 2023 年迎来的最大史诗级更新：**tvOS 17 正式开放了 VPN 接口权限！** 这意味着你再也不需要依赖软路由，直接在 Apple TV 上安装 APP 即可翻墙。

#### 1. 准备工作
*   一台系统升级至 **tvOS 17** 的 Apple TV 4K。
*   一个**美区或港区 Apple ID**（国区 App Store 无法下载翻墙软件）。
*   一个支持流媒体解锁（尤其是 Netflix 完美解锁）的机场节点（见首页推荐）。

#### 2. 主流客户端推荐与配置
目前 Apple TV 上最好用的两款客户端是 **Surge** 和 **Loon**（如果你在 iPhone 上已经购买过，可以直接在 Apple TV 免费下载，它们是通用购买）。另外还有 **Stash** 和 **Quantumult X**。

**以 Loon 为例：**
1.  在 Apple TV 的 App Store 登录美区账号，搜索并下载 \`Loon\`。
2.  打开 Loon，点击 \`节点\` 或 \`订阅\` 选项。
3.  最方便的方法是：在手机上复制你的机场订阅链接，使用 Apple TV 的 **“使用键盘”** 隔空投送功能，将链接粘贴到电视上。
4.  保存订阅并更新节点。
5.  在 \`规则\` 设置中，选择 \`全局路由\` 为 \`规则分流\`。
6.  返回主界面，点击大大的 \`开启\` 按钮。
7.  系统会提示添加 VPN 配置，允许即可。

现在，打开你的 Netflix 或 YouTube App，享受丝滑的 4K 体验吧！

### 二、安卓电视盒子 (Android TV) 翻墙方案

如果你使用的是索尼电视原生安卓系统，或者外接了 Google Chromecast、小米盒子（海外版）、Nvidia Shield TV，那么你的底层是 Android TV。

#### 1. 使用 Clash for Android (最稳定推荐)
虽然 Clash for Android 已经停更，但它的 TV 端适配极其完美，支持遥控器完美操作。
1.  准备一个 U 盘，在电脑上下载 \`Clash for Android\` 的 apk 安装包（推荐 2.5.12 最终版）。
2.  将 U 盘插入电视/盒子，使用文件管理器安装 apk。
3.  打开 Clash，选择 \`配置\` -> \`新配置\` -> \`从 URL 导入\`。
4.  这里输入长长的订阅链接会很痛苦，建议使用**电视浏览器的扫码功能**，或者通过局域网传输工具发送过去。
5.  保存后选中配置，返回首页点击启动。

#### 2. 使用 v2rayNG TV 版
v2rayNG 也对 Android TV 做了完美适配。
操作逻辑与 Clash 类似，安装 apk 后，点击右上角的 \`+\` 号，选择 \`从剪贴板导入\`（前提是你已经将链接复制到了电视的剪贴板）。

### 三、电视端避坑指南（SEO 重点关注）

*   **⚠️ Netflix 封锁与原生 IP**：电视端 Netflix App 对 IP 的检测比手机网页版**严格十倍**。即使你的节点在手机上能看 Netflix，在电视上也可能报错 \`tvq-st-103\` 或 \`nw-2-5\`。请务必在首页挑选标有 **“Netflix 完美解锁”** 或 **“原生 IP”** 的高端机场。
*   **⚠️ 遥控器失灵问题**：如果你安装了手机版的 VPN 软件在电视上，可能会发现遥控器按不动。请务必下载明确标注支持 **Android TV (ATV)** 的专版 apk。
*   **⚠️ 时间同步问题**：电视盒子如果断电重启，系统时间可能未同步，会导致所有节点超时无法连接。请确保在系统设置中开启“自动获取网络时间”。

**立刻行动：** 返回首页测速看板，选择一款支持原生 IP 的专线机场，让你的电视释放 100% 的性能！
`;

// OpenWrt Data
const openwrtHtml = `
## 全屋科学上网：OpenWrt 路由器 OpenClash / PassWall 教程

如果你家里有大量的设备（手机、平板、电脑、智能电视、PS5/Switch 游戏主机、智能音箱），给每一台设备都安装一遍代理软件显然是令人崩溃的。

**“在路由器层面直接翻墙”**（也叫“透明代理”或“旁路由”），是彻底解决全屋设备科学上网的终极方案。只要连上你家的 WiFi，所有设备自动翻墙。

### 一、前置条件：你需要一台什么样的路由器？

普通的家用路由器（如 TP-Link、小米路由器官方固件）是无法直接安装翻墙插件的。你需要：
1.  **软路由 (x86 / NanoPi / R2S 等)**：这是目前性能最强的方案，将软路由作为主路由或旁路由，连接原本的无线 AP。
2.  **硬路由刷机 (如红米 AX6000, 华硕路由器)**：将原本的路由器刷入 **OpenWrt** 或 **梅林 (Merlin)** 等第三方开源固件。

本教程以最主流的 **OpenWrt 固件** 为例。

### 二、核心插件推荐：OpenClash vs PassWall

在 OpenWrt 众多翻墙插件中，目前最强、最稳定的是这两款：
*   **OpenClash**：基于 Clash 核心构建。规则分流极其强大，适合节点多、需要精细化分流（比如特定网站走特定国家节点）的用户。
*   **PassWall**：极其稳定、界面直观、占用资源极少。适合追求极致稳定，或者路由器性能较弱的用户。

### 三、实战演练：以 OpenClash 为例

#### 1. 安装 OpenClash
大多数编译好的 OpenWrt 软路由固件已经自带了 OpenClash（在菜单的 \`服务\` 中寻找）。如果没有，你需要通过 SSH 连接路由器，使用 \`wget\` 和 \`opkg\` 命令安装依赖和 ipk 包（具体请参考 GitHub 官方 Release 页面）。

#### 2. 导入机场订阅
1.  在 OpenWrt 管理界面找到 \`服务\` -> \`OpenClash\`。
2.  点击 \`配置订阅\` 标签页。
3.  点击页面下方的 \`添加\` 按钮。
4.  在 \`配置名称\` 中随便填（例如：主用机场）。
5.  在 \`订阅地址\` 中，粘贴你在首页购买的机场的 **Clash 订阅链接**。
6.  勾选 \`启用\`，然后点击下方的 \`保存配置\`。

#### 3. 启动并更新
1.  回到 \`配置订阅\` 页面，点击刚刚添加的订阅后面的 **“更新配置”** 按钮。
2.  更新成功后，进入 \`运行状态\` 页面。
3.  点击大大的 **“启动 OpenClash”** 按钮。
4.  稍等片刻，直到下方出现绿色的 \`运行中\` 和 \`连通性测试：正常\`。

#### 4. 面板操作（选择节点）
1.  在运行状态页面，点击底部的 **“打开控制面板 (Yacd / Dashboard)”**。
2.  这会打开一个类似电脑版 Clash 的可视化界面。
3.  在 \`Proxies (代理)\` 页面中，你就可以愉快地选择各个国家的节点了。

### 四、高级玩法：游戏主机加速 (PS5 / Switch)

如果你是主机玩家，使用 OpenWrt 翻墙是唯一能解决 NAT 类型严格以及游戏商店下载慢的方法。

*   **UDP 转发开启**：绝大多数多人联机游戏依赖 UDP 协议。请务必在 OpenClash 的 \`全局设置\` -> \`常规设置\` 中，勾选 **“实验性：绕过中国大陆 IP 且支持 UDP 转发”**。
*   **节点选择极其重要**：玩港服请务必选择 **“IPLC / IEPL 专线”** 的香港节点，玩日服选择日本专线节点。**千万不要使用 BGP 中转或直连节点打游戏**，那会导致极其可怕的丢包和掉线。

**开始组建你的全屋网络：** 回到首页，筛选出支持 **IPLC 专线** 且 **UDP 稳定** 的顶级机场，给你的软路由注入最强动力吧！
`;

// Parse existing data
const startStr = "const tutorialData = {";
const endStr = "};\n\n    // Check if we are on the view page";
const startIndex = data.indexOf(startStr);
const endIndex = data.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find tutorialData object.");
    process.exit(1);
}

// Just safely inject string before the last closing brace of the object
const injectPos = data.lastIndexOf("}", endIndex);

let injection = '    "appletv-tvos": ' + JSON.stringify(appletvHtml) + ',\n    "openwrt-openclash": ' + JSON.stringify(openwrtHtml) + ',\n';

// add comma if missing
let textBefore = data.substring(0, injectPos).trim();
if (!textBefore.endsWith(",")) {
    injection = ",\n" + injection;
}

const newData = data.substring(0, injectPos) + injection + data.substring(injectPos);

fs.writeFileSync(targetFile, newData);
console.log("Successfully added Apple TV and OpenWrt tutorials!");
