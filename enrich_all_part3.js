const fs = require('fs');

// 1. Load and parse the current JS object
let data = fs.readFileSync('js/tutorial_data.js', 'utf8');
let code = data.replace('const tutorialData =', 'module.exports =');
fs.writeFileSync('temp_data.js', code);
const tutorialData = require('./temp_data.js');

// 2. Define the extremely enriched content for the 5 tutorials

const t_cfa = `
<p><strong>导语：</strong>在安卓（Android）科学上网的历史上，有一个绝对绕不开的名字：<strong>Clash for Android (俗称小猫咪)</strong>。尽管其原作者因为不可抗力删库归档，但凭借着极其优秀的稳定性和庞大的用户基数，它至今依然是无数安卓手机装机必备的经典软件。如果你追求极致的稳健，而不是花里胡哨的新功能，CFA 永远是首选。</p>
<h2>一、删库后的唯一安全下载渠道</h2>
<p>现在你在各大安卓应用市场搜“Clash”，搜出来的全是带有各种流氓弹窗广告、甚至会窃取你手机相册的假冒伪劣产品。获取原汁原味官方最后一版的唯一安全渠道，是前往已归档的 Github 镜像库：</p>
<p>👉 <a href="https://github.com/Kr328/ClashForAndroid/releases" target="_blank" style="color:var(--accent); font-weight:bold;">Github 原版 Clash for Android (2.5.12 最终版) 下载</a></p>
<p>下载其中的 <code>cfa-2.5.12-premium-universal-release.apk</code> 安装即可，它是完美无广告且支持所有基础协议的版本。</p>
<h2>二、经典的一键导入与防坑流程</h2>
<p>如果你已经购买了诸如 <a href="review.html?id=全球云" style="color:var(--accent);">全球云</a> 或 <a href="review.html?id=极连云" style="color:var(--accent);">极连云</a> 等稳定的机场套餐，导入过程极其简单：</p>
<ol>
<li>在机场后台点击 <strong>“一键导入 Clash for Android”</strong>，手机会自动唤起 APP。</li>
<li>如果不自动唤起，请点击 <strong>“复制 Clash 订阅链接”</strong>。</li>
<li>打开手机上的小猫咪 APP，点击 <strong>“配置 (Profiles)”</strong> -> 右上角 <strong>“+”</strong> 号 -> <strong>“从 URL 下载”</strong>。</li>
<li>在 URL 栏粘贴链接，自动更新周期建议设置为 <strong>1440分钟（24小时）</strong>，点击右上角的保存图标。</li>
<li>回到“配置”列表，选中刚刚下载的配置（前面会有一个圆圈被选中）。</li>
</ol>
<h2>三、启动代理与最重要的“路由模式”</h2>
<p>回到软件首页，点击最上面的 <strong>“已停止 (Tap to start)”</strong>，按钮会变灰然后系统弹出 VPN 权限请求，允许后即可翻墙。</p>
<h3>⚠️ 绝大多数新手会踩的致命坑：全局模式</h3>
<p>新手最容易犯的错误，就是点击“代理 (Proxy)”后，在顶部分组里选择了“全局 (Global)”。这会导致你手机里所有的流量（包括微信视频、看国内抖音、刷淘宝）全部绕道美国或日本，不仅极度消耗机场流量，还会让国内应用卡成 PPT 甚至被封号（如微信号被风控提示异地登录）。</p>
<p><strong>正确做法：</strong>在“代理 (Proxy)”界面的最上方，务必选择 <strong>“规则 (Rule)”</strong> 模式。这样只有访问被墙的网站（如 YouTube、推特）时才会走节点，极大省电并提升速度。</p>
<h2>四、高级玩法：分应用代理 (Per-App Proxy)</h2>
<p>作为一款强大的安卓端软件，怎么能少得了分应用代理？这个功能可以让梯子“彻底隐藏”在国内应用面前。</p>
<ol>
<li>点击首页的 <strong>“设置 (Settings)”</strong> -> <strong>“网络 (Network)”</strong>。</li>
<li>找到 <strong>“访问控制 (Access Control)”</strong>。</li>
<li>将其设置为 <strong>“绕过应用 (Bypass Apps)”</strong>。</li>
<li>点击下方的应用列表，勾选你所有的国内软件（微信、支付宝、各大银行、闲鱼等）。</li>
</ol>
<p>设置完毕后，你的手机续航将会得到质的飞跃！</p>
<h2>五、排错指南：IPv6 导致断流与超时</h2>
<blockquote>
<strong>症状：明明节点列表测速全是绿色的几十毫秒，但刷 Instagram 依然图片加载不出来？</strong>
<br>解决：这是因为很多国内运营商的 IPv6 路由极其糟糕。请前往 CFA 的“设置 -> 网络”中，将 <strong>“IPv6 路由 (IPv6 Routing)”</strong> 强制关闭。这能解决 90% 的莫名其妙断流问题。
</blockquote>
`;

const t_surge = `
<p><strong>导语：</strong>在所有科学上网的客户端中，<strong>Surge</strong> 是一个极其特殊的存在。它在 iOS App Store 的售价高达 49.99 美元（约合 350+ 人民币），而 Mac 版的授权更是贵达数百元。它被称为网络工具里的“爱马仕”。为什么一个翻墙软件能卖这么贵？因为它是专门为骨灰级网络工程师和极客土豪打造的最强网络接管中枢。</p>
<h2>一、Surge 到底贵在哪里？值不值？</h2>
<p>很多人会问：小火箭只要 3 美元也能翻墙，Surge 凭什么卖 50 美元？</p>
<ul>
<li><strong>碾压级的底层接管：</strong>Surge 的网络抓包和路由分流能力是所有 iOS 软件中最深、最稳定的。它使用的 VIF（虚拟接口）技术使得其在常年后台挂着时，几乎感觉不到额外的耗电。普通软件跑 1000Mbps 可能 CPU 会飙升，Surge 则如履平地。</li>
<li><strong>丰富的模块 (Modules) 生态：</strong>无需复杂的代码，通过点击安装别人写好的模块，一键实现 TikTok 解锁、Netflix 突破封锁、京东/阿里云盘自动签到等神仙操作。</li>
<li><strong>Mac 与 iOS 的生态同步：</strong>如果你同时拥有 iPhone 和 Mac，Surge 可以通过 iCloud 无缝同步你所有的高级网络策略。</li>
</ul>
<h2>二、如何获取 Surge？（附防坑指南）</h2>
<p>Surge 仅在国区以外的 App Store 上架（如美区、港区）。</p>
<ul>
<li><strong>土豪直购：</strong>使用美区 Apple ID 购买 10 美元和 50 美元的充值卡，直接购买绑定自己的账号（推荐）。</li>
<li><strong>位置拼车：</strong>Surge iOS 授权允许 3 台设备同时使用，Mac 授权允许多台。淘宝上有很多商家提供“Surge 授权位置拼车”，大约 80-100 元即可获得一个 iOS 永久激活位置。但请务必找高信誉店铺，以防卖家后期跑路解绑。</li>
</ul>
<h2>三、什么是“Surge 托管链接”？</h2>
<p>当你使用 Surge 时，你已经超越了普通“节点列表”的玩法。你需要导入的是一份包含上万条规则的综合配置文件。很多高端机场（例如全专线的高奢机场 <a href="review.html?id=宇宙云" style="color:var(--accent);">宇宙云</a> 或跨国专线 <a href="review.html?id=速界" style="color:var(--accent);">速界</a>）都会专门提供高质量的 Surge 托管：</p>
<ol>
<li>在机场后台，找到 <strong>“复制 Surge 托管链接 (Surge 3/4/5)”</strong>。</li>
<li>打开手机上的 Surge，在首页点击左上角的“配置名称”（默认为 Default）。</li>
<li>点击 <strong>“从 URL 下载配置”</strong>，粘贴你的链接。</li>
<li>下载完成后，Surge 首页会展示出极其精美的“策略组”面板（例如：Apple 流量走原生直连，Netflix 走流媒体专线，Telegram 走新加坡低延迟线）。</li>
</ol>
<h2>四、终极玩法：解密 HTTPS 与去广告模块体验</h2>
<p>Surge 的精髓在于修改 APP 内容。要让模块生效，必须先开启 MitM（中间人解密）：</p>
<ol>
<li>在 Surge 首页找到 <strong>“MitM”</strong> 选项。</li>
<li>点击配置根证书 -> 生成新证书 -> 安装到系统。</li>
<li>去 iOS 系统设置 -> 通用 -> 关于本机 -> 证书信任设置，将 Surge 的证书开关打开。</li>
<li>返回 Surge，打开 MitM 开关。</li>
</ol>
<p>接着，在 <strong>“模块 (Modules)”</strong> 页面中添加 Github 上的著名开源脚本（如“Surge 懒人规则包”或“BoxJs”）。你的手机将瞬间获得全网视频去开屏广告、各类付费报纸免费阅读的降维打击能力。</p>
<p><strong>总结：</strong>Surge 绝不是给刚学会翻墙的小白准备的。但如果你是一位预算充足、追求极致稳定性和完美苹果生态体验的高端极客，这笔投资能让你的设备网络体验提升一个维度。</p>
`;

const t_clashx = `
<p><strong>导语：</strong>如果你使用的是苹果 Mac 电脑（无论是老款 Intel 还是最新的 M1/M2/M3 系列芯片），想要科学上网，最经典且被最广泛使用的客户端无疑是 <strong>ClashX</strong> 及其进阶版 <strong>ClashX Pro</strong>。它就像 Mac 顶部菜单栏里的一只安静的小猫咪，不占地方，却为你掌控着整个世界的数据流动。</p>
<h2>一、ClashX 与 ClashX Pro 的终极对决</h2>
<p>很多新手在 Github 上搜索时会蒙圈，为什么有两个不同图标的版本？</p>
<ul>
<li><strong>ClashX（蓝白猫咪图标）：</strong>基础开源版，提供最基本的 HTTP/SOCKS5 系统代理功能，适合只用 Safari 浏览器或者 Chrome 看网页的轻度用户。</li>
<li><strong>ClashX Pro（黑白猫咪图标，★强烈推荐）：</strong>闭源增强版。最核心的区别是它支持 <strong>增强模式 (Enhanced Mode)</strong>，也就是底层的 TUN 虚拟网卡模式。它可以强制 Mac 上所有不走系统代理的软件（如 Terminal 终端、Git命令行、某些跨国游戏、钉钉/微信的企业端）也强行走代理。</li>
</ul>
<p>👉 <a href="https://github.com/yichengchen/clashX/releases" target="_blank" style="color:var(--accent); font-weight:bold;">下载链接请自行在 Github 搜索 ClashX Pro Release</a>。</p>
<h2>二、Mac 端一键导入与配置</h2>
<ol>
<li>下载 <code>.dmg</code> 安装包后，双击打开，将小猫咪图标拖入 Applications (应用程序) 文件夹。</li>
<li>在 Mac 的启动台中打开它（如果提示是从互联网下载的程序，请去“系统设置 -> 隐私与安全性”中点击“仍要打开”）。</li>
<li>此时，你的 Mac 屏幕右上角的菜单栏会出现一只黑色的小猫咪图标。</li>
<li>前往你的机场后台（比如极简好用的 <a href="review.html?id=飞猫云" style="color:var(--accent);">飞猫云</a> 或 <a href="review.html?id=一翻云(秒秒云)" style="color:var(--accent);">一翻云</a>），点击 <strong>“一键导入 ClashX”</strong>，或者复制订阅链接。</li>
<li>点击菜单栏的小猫咪图标，选择 <strong>“配置” -> “托管配置” -> “管理”</strong>。</li>
<li>点击“添加”，在 Url 处粘贴链接，更新后关闭窗口。</li>
<li>再次点击小猫咪图标，在 <strong>“配置”</strong> 中勾选你刚下载的机场名字。</li>
</ol>
<h2>三、起飞与增强模式实战安装</h2>
<p>要在 Mac 上实现翻墙，必须完成最后两步勾选：</p>
<ul>
<li>点击小猫咪图标，勾选 <strong>“设置为系统代理 (Set as System Proxy)”</strong>。图标会从灰色变成实心黑色，代表代理已开启。</li>
<li><strong>（高阶玩法）：</strong>强烈建议勾选 <strong>“增强模式 (Enhanced Mode)”</strong>。此时系统会弹出鉴权窗口，提示你输入 Mac 电脑的开机密码来安装网络扩展（Network Extension）。安装完毕后，你的 Mac 所有的底层网络流量就都被彻底接管了！</li>
</ul>
<h2>四、开发者/极客必备：终端命令行代理</h2>
<p>即使你开启了系统代理，Mac 的 Terminal（终端）执行 <code>brew install</code> 或 <code>git clone</code> 时依然可能非常慢。此时你需要点击小猫咪图标 -> <strong>“帮助” -> “复制终端代理命令”</strong>。</p>
<p>你会得到类似 <code>export https_proxy=http://127.0.0.1:7890</code> 的命令。将其粘贴到终端里运行，你的命令行瞬间起飞！</p>
<h2>五、常见报错：Safari 打不开网页？</h2>
<blockquote>
<strong>症状：明明勾选了系统代理，但用 Safari 浏览器打不开 Google，而 Chrome 却能打开？</strong>
<br>解决：这是 Mac 系统代理设定的老毛病了。打开“系统设置 -> 网络 -> Wi-Fi -> 详细信息 -> 代理”，检查“网页代理(HTTP)”和“安全网页代理(HTTPS)”是否被正确打勾。如果经常掉线，建议直接开启 ClashX Pro 的“增强模式”，完全无视 Safari 的这个系统 bug。
</blockquote>
`;

const t_loon = `
<p><strong>导语：</strong>在 iOS 平台上，Surge 太贵（50美元），圈X 的配置代码太繁琐，小火箭又略显单薄。于是，一款被誉为“年轻人的第一款高阶网络工具”的神器——<strong>Loon</strong> 诞生了。售价约 5 美元的 Loon，融合了 Surge 的优美 UI 设计和圈X 的去广告脚本能力，是目前 iOS 端最具性价比、最易上手的高级路由客户端。</p>
<h2>一、Loon 为什么被称为“平替王者”？</h2>
<p>Loon 最让人惊艳的核心功能叫做 <strong>“插件 (Plugins)”</strong>，这也是它击败圈X吸引大量小白用户的杀手锏。</p>
<p>在圈X里，如果你想实现“屏蔽 YouTube 广告”或者“解锁哔哩哔哩港澳台”，你需要去寻找繁杂的 Rewrite 代码并手动粘贴到配置文件里。但在 Loon 里，开发者引入了极简的模块化插件系统：你只需要输入一个链接，它就会像 App Store 里的应用一样，生成一个带有图标和开关的插件卡片。一键开启去广告，一键关闭恢复正常，极其直观优雅。</p>
<h2>二、如何购买与导入节点？</h2>
<p>Loon 同样需要使用美区或港区 Apple ID 在 App Store 购买（售价 4.99 美元或 5.99 美元）。</p>
<ol>
<li>购买下载后，打开 Loon。它的界面非常清爽，底部有四个核心 Tab（节点、策略组、配置、工具）。</li>
<li>在准备起飞前，我们需要好用的节点支撑（推荐提供原生节点以解锁流媒体的 <a href="review.html?id=全球云" style="color:var(--accent);">全球云</a> 或 <a href="review.html?id=光年梯" style="color:var(--accent);">光年梯</a>）。</li>
<li>在机场后台点击 <strong>“复制 Loon 订阅链接”</strong>（如果没有，它通常也完美兼容 Surge 格式或通用的 Clash 订阅）。</li>
<li>在 Loon 的底部切换到 <strong>“节点”</strong>，点击右上角的“+”号，选择“从 URL 下载”。</li>
<li>添加完成后，回到 <strong>“策略组”</strong> 页面，你可以像拖拽积木一样，把特定的节点分配给特定的应用组（比如 YouTube 走香港，ChatGPT 走美国）。</li>
<li>最后，在首页点击巨大的“启动”按钮，允许 VPN 配置安装即可。</li>
</ol>
<h2>三、极简安装去广告插件实战</h2>
<p>买 Loon 不折腾插件简直血亏。我们要干掉那些烦人的 APP 启动广告：</p>
<ol>
<li><strong>最重要的一步：</strong>首先在 Loon 首页找到 <strong>“MitM”</strong> 并开启。按照系统提示生成证书、下载描述文件安装到 iOS 系统、并在“设置 -> 通用 -> 关于本机 -> 证书信任设置”里 <strong>信任该证书</strong>。只有这样，Loon 才能解密加密广告。</li>
<li>切换到底部最右侧的 <strong>“配置”</strong> 页面，向下滚动找到 <strong>“插件”</strong>。</li>
<li>点击右上角“+”号，输入 Github 上开源大神的插件仓库链接（例如著名的墨鱼规则仓库、Peng-YM的脚本仓库等）。</li>
<li>你会看到精美的插件卡片出现，比如“TikTok 去水解除区限制”、“知乎去广告”、“网易云音乐灰色歌单解锁”。直接拨开开关，立即生效！</li>
</ol>
<p><strong>总结：</strong>Loon 是一款极其用心的作品，UI 审美品味极高。它不仅具备了所有高阶代理软件该有的硬核抓包与重写功能，还将“折腾”的门槛降到了最低。强烈推荐给那些觉得小火箭不够玩、又嫌 Surge 太贵的朋友们。</p>
`;

const t_hiddify = `
<p><strong>导语：</strong>在 2026 年的防封锁战役中，出现了一颗极其耀眼的超级新星——<strong>Hiddify-Next</strong>（现简称为 Hiddify）。这款由伊朗顶尖网络极客主导开发、基于强大 sing-box 内核的开源神器，其目标只有一个：<strong>跨越所有平台（Windows/安卓/Mac/Linux），提供最傻瓜式、但也最坚不可摧的翻墙体验。</strong></p>
<h2>一、为什么 Hiddify 会在今年爆火甚至超越 NekoBox？</h2>
<p>NekoBox 虽然也很强大，但满屏幕的参数让小白望而却步。Hiddify 解决了这个痛点：</p>
<ul>
<li><strong>全平台免配置统一体验：</strong>不论你用的是 Windows 还是 Android，Hiddify 的界面完全一模一样，使用 Flutter 框架开发，流畅无比，学习成本极低。</li>
<li><strong>底层集成了最强协议：</strong>原生完美支持 VLESS-Reality、Hysteria2、TUIC 等最新黑科技协议。配合 <a href="review.html?id=极连云" style="color:var(--accent);">极连云</a> 这种提供高阶抗封锁协议的机场，能穿透最深度的防火墙特征检测。</li>
<li><strong>真正的零门槛智能分流：</strong>你不需要去懂什么是 TUN 模式，什么是路由策略组。Hiddify 内部封装好了极其智能的基于 GeoSite 的自动分流，国内国外流量无缝切换，点击“开始”就完事了。</li>
<li><strong>拯救阻断 IP 的 Fragment (分片) 功能：</strong>当某个 IP 已经被 GFW 针对性干扰时，开启高级设置里的 Fragment，能通过拆分数据包神奇地绕过检测。</li>
</ul>
<h2>二、官方全平台下载与安装指南</h2>
<p>作为最热门的开源项目，请认准官方唯一的 Github 发布页，拒绝任何可能带毒的第三方搬运站点：</p>
<p>👉 <a href="https://github.com/hiddify/hiddify-next/releases" target="_blank" style="color:var(--accent); font-weight:bold;">Hiddify 官方 Github 下载发布页</a></p>
<div style="background: rgba(255,255,255,0.05); padding: 15px; border-left: 4px solid #10b981; margin-bottom: 20px;">
<strong>如何正确选择安装包？</strong>
<br>- <strong>Windows 电脑：</strong>下载 <code>Hiddify-Windows-Setup-x64.exe</code>。如果是免安装版选 <code>Portable</code>。
<br>- <strong>Android 安卓手机：</strong>下载 <code>Hiddify-Android-universal.apk</code>。
<br>- <strong>Mac 苹果电脑：</strong>下载 <code>Hiddify-MacOS.dmg</code>。
</div>
<h2>三、一键连接，极简至上的体验流</h2>
<p>这绝对是你见过的最容易上手的 Sing-box 客户端：</p>
<ol>
<li>去你的高级机场后台（比如支持 Reality 协议的 <a href="review.html?id=光速云" style="color:var(--accent);">光速云</a> 或专线 <a href="review.html?id=速界" style="color:var(--accent);">速界</a>），点击复制“通用订阅链接”。</li>
<li>打开 Hiddify 客户端，你会看到屏幕中央有一个巨大的圆形“连接”按钮。先别急着点。</li>
<li>点击界面上方的 <strong>“+ 添加配置文件 (New Profile)”</strong>，选择 <strong>“从剪贴板导入”</strong>（或者手动粘贴你的链接）。</li>
<li>软件会自动解析并下载所有节点。</li>
<li>点击最底部的 <strong>“代理选项 (Proxies)”</strong> 标签卡，你可以选择你想要的具体国家节点。更好用的是，它能自动根据延迟测速为你排序推荐最佳节点。</li>
<li>回到首页，点击中间那个巨大的圆形按钮。按钮转为绿色并显示连接时间和延迟，这就意味着你已经成功翻墙！</li>
</ol>
<h2>四、高阶局域网分享（给 PS5/Switch 加速）</h2>
<p>Hiddify 隐藏了一个非常实用的功能：如果你想让家里的游戏主机（PS5 / Switch）或者智能电视看 Netflix，但它们又不能安装翻墙软件，怎么办？</p>
<p>在 Hiddify 电脑端的“设置”中，找到 <strong>“允许局域网连接 (Allow LAN)”</strong> 并开启。此时，将你的 PS5 或电视的网络设置里的“HTTP 代理”，指向你这台电脑的内网 IP（如 192.168.1.10）和 Hiddify 提供的代理端口（通常是 2334 或 10808），你的电视瞬间就能起飞！</p>
<p><strong>终极评价：</strong>Hiddify 把以前只有“极客”才能玩转的底层高级防封锁内核，包装成了一个连家里长辈都能一眼看懂的傻瓜式软件。如果你在 2026 年极端封锁的环境中追求极致的稳定与极简的体验，Hiddify 是你不可错过的终极答案。</p>
`;

// Overwrite the specific keys
tutorialData['clash-for-android'].content = t_cfa;
tutorialData['surge-ios'].content = t_surge;
tutorialData['clashx-mac'].content = t_clashx;
tutorialData['loon-ios'].content = t_loon;
tutorialData['hiddify-next'].content = t_hiddify;

// 3. Write back to tutorial_data.js
const fileContent = 'const tutorialData = ' + JSON.stringify(tutorialData, null, 4) + ';\n';
fs.writeFileSync('js/tutorial_data.js', fileContent);
fs.unlinkSync('temp_data.js'); // cleanup
console.log("Deep enrichment of the 5 new tutorials successful!");
