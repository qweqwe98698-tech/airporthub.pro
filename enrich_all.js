const fs = require('fs');

const t_clash = `<p><strong>导语：</strong>自从原版的 Clash for Windows 删库跑路之后，很多新手瞬间陷入了“有节点却不知道用什么软件连”的窘境。好在开源社区极为强大，接力棒交到了 <strong>Clash Verge Rev</strong> 手里。在 2026 年，基于 Tauri 框架重构的它不仅占用内存更小、UI 界面更现代化，而且内置了最强大的 Meta (Mihomo) 内核。这绝对是你 Windows 和 Mac 电脑上必备的终极科学上网神器。</p>
<blockquote>
<i class='bx bx-info-circle'></i> <strong>核心前置准备：</strong>教程本身教的是“车怎么开”，但你必须得有“油”才能跑起来。如果你还没有购买机场节点，或者正在使用的节点频繁断流，强烈建议先参考我们的 <a href="index.html" style="color:var(--accent);">2026 高端稳定机场精选面板</a>，购买一个稳定套餐（例如极连云、光速云或唯兔云）。
</blockquote>
<h2>一、为什么强烈推荐 Clash Verge Rev？</h2>
<p>相比于老旧的代理软件，Clash Verge Rev 拥有三大无可比拟的优势：</p>
<ul>
<li><strong>原生支持 Meta 内核：</strong>完美兼容 Vless、Trojan、Hysteria2 等最新抗封锁协议，这在当下极其严峻的网络环境中至关重要。</li>
<li><strong>内置脚本与规则集：</strong>不再需要手动去改复杂的 YAML 文件，软件内置了丰富的路由分流规则，轻松实现“国内网站直连，国外网站走代理”。</li>
<li><strong>系统级 TUN 模式：</strong>一键接管电脑所有流量，连那些不支持代理的 PC 游戏（如 Steam 联机）都能通过它实现加速。</li>
</ul>
<h2>二、官方正版下载与安装防坑指南</h2>
<p>请务必从 Github 官方仓库下载，千万不要去百度搜索下载什么“绿化版、破解版”，极容易中木马病毒导致隐私泄露！</p>
<p>👉 <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases" target="_blank" style="color:var(--accent); font-weight:bold;">点击这里直达 Github 官方发布页下载最新版</a></p>
<p>在发布页（Releases）中，你会看到一大堆文件，不要慌，按照以下规则对号入座：</p>
<div style="background: rgba(255,255,255,0.05); padding: 15px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
<strong>💻 Windows 用户：</strong>
<br>- 绝大多数普通电脑（Intel/AMD 处理器）：下载 <code>Clash.Verge_xxx_x64-setup.exe</code>
<br>- ARM 架构平板/掌机：下载 <code>arm64-setup.exe</code>
<br><br><strong>🍎 Mac 苹果电脑用户：</strong>
<br>- M1/M2/M3 芯片（Apple Silicon）：下载 <code>Clash.Verge_xxx_aarch64.dmg</code>
<br>- 老款 Intel 芯片：下载 <code>x64.dmg</code>
</div>
<h2>三、软件安装与基础汉化设置</h2>
<p>安装包下载后，双击无脑“下一步”安装。启动后界面默认是英文，我们先进行汉化和基础配置：</p>
<ol>
<li>在左侧导航栏点击 <strong>Settings (设置)</strong>。</li>
<li>在右侧面板找到 <strong>Language (语言)</strong>，从下拉菜单中选择 <strong>中文 (简体)</strong>。界面会瞬间切换。</li>
<li>在同一页面的顶部，找到 <strong>开机自启 (Auto Start)</strong>，建议打开，省去每次开机手动启动的麻烦。</li>
<li>找到 <strong>内核设置 (Clash Core)</strong>，确保选择的是 <strong>Meta (Mihomo)</strong>。</li>
</ol>
<h2>四、导入机场节点与一键连接</h2>
<p>软件搞定后，最激动人心的步骤来了：把你在机场买的节点倒进去。</p>
<ol>
<li>登录你的优质机场后台（如果你追求极致流媒体体验，推荐使用 <a href="review.html?id=光速云" style="color:var(--accent);">光速云</a>）。</li>
<li>在后台面板首页找到 <strong>“一键订阅”</strong> 或 <strong>“导入到 Clash”</strong> 按钮，点击“复制订阅链接”。</li>
<li>回到 Clash Verge Rev，点击左侧的 <strong>配置 (Profiles)</strong>。</li>
<li>在顶部的输入框中 <strong>粘贴</strong> 你的链接，点击 <strong>导入 (Import)</strong>。</li>
<li>等待几秒钟，列表里会出现一个新配置项。<strong>右键点击它，选择“使用 (Use)”</strong>（此时卡片会变成蓝色或亮起）。</li>
</ol>
<p>最后一步启动代理：</p>
<ul>
<li>点击左侧的 <strong>代理 (Proxies)</strong> 选项卡。建议在顶部分组选择 <strong>“自动选择 (Auto) / 延迟最低”</strong>。</li>
<li>点击左侧的 <strong>设置 (Settings)</strong>，找到 <strong>系统代理 (System Proxy)</strong>，将右侧的开关 <strong>打开</strong>！</li>
</ul>
<p><strong>🎉 恭喜你！打开浏览器输入 <code>youtube.com</code> 试试吧！</strong></p>
<h2>五、常见问题与报错排查 (FAQ)</h2>
<p>如果你按照上面操作依然无法上网，请对照以下症状进行排查：</p>
<blockquote>
<strong>Q1：打开系统代理后，不仅打不开 YouTube，连国内的百度也打不开了？</strong>
<br>答：这通常是因为你没有给软件勾选“规则分流”。请在左侧点击“代理 (Proxies)”，确保最上方选择的是<strong>“规则 (Rule)”</strong>模式，千万不要选“全局 (Global)”。
</blockquote>
<blockquote>
<strong>Q2：节点列表里有很多“Timeout”或者全红，无法测速？</strong>
<br>答：这是你的网络与机场的订阅服务器握手失败。尝试点击左侧“配置 (Profiles)”，在你的配置卡片上右键，选择“更新 (Update)”。如果依然 Timeout，说明你的机场节点已经被墙，强烈建议更换 <a href="review.html?id=极连云" style="color:var(--accent);">极连云 等具有 IPLC 专线的防封锁机场</a>。
</blockquote>
<blockquote>
<strong>Q3：我想让电脑上的游戏（比如 Steam 联机）也走代理怎么办？</strong>
<br>答：普通的“系统代理”只能代理浏览器流量。你需要打开高级的 <strong>TUN 模式</strong>。在“设置”中找到“TUN 模式”，点击开启（可能需要输入电脑的管理员密码安装虚拟网卡）。开启后，电脑的所有底层流量都会经过 Clash 转发。
</blockquote>
<div class="spider-web-links">
<h3><i class='bx bx-cart'></i> 获取最佳冲浪体验：2026 高端机场推荐</h3>
<ul>
<li><i class='bx bx-rocket' style="color:var(--ping-good)"></i> <a href="review.html?id=光速云">光速云：10Gbps 带宽升级，看 4K 视频毫无压力</a></li>
<li><i class='bx bx-rocket' style="color:var(--ping-good)"></i> <a href="review.html?id=速界">速界：跨国企业与 AI 工具（ChatGPT/Claude）专线</a></li>
<li><i class='bx bx-rocket' style="color:var(--ping-good)"></i> <a href="review.html?id=宇宙云">宇宙云：不差钱的终极选择，全 IPLC 物理专线不限速</a></li>
</ul>
</div>`;

const t_shadowrocket = `<p><strong>导语：</strong>在苹果 iOS 生态里，提起科学上网，99% 的老鸟都会脱口而出三个字：<strong>小火箭</strong>（官方英文名：Shadowrocket）。它不仅支持几乎所有的最新翻墙协议，而且极其省电、功能极其强大。但由于国内 App Store 全面下架了代理软件，获取小火箭成为了很多苹果新手的第一只拦路虎。今天，我们就来彻底解决这个问题。</p>
<h2>一、严正警告：App Store 里的李鬼</h2>
<p>在开始之前，必须强调一点：<strong>国区 App Store 里搜到的所有叫“Shadowrocket”、“小火箭网络助手”、“VPN加速器”的软件，100% 都是骗钱的假冒伪劣产品！</strong> 正版的小火箭开发者是 <strong>Shadow Launch Technology Limited</strong>，且目前仅在外区（如美区、港区）App Store 提供下载，售价为 2.99 美元。</p>
<h2>二、核心难点：如何获取美区 Apple ID？</h2>
<p>要下载正版小火箭，你必须先拥有一个美国区的苹果账号。你有两条路可选：</p>
<h3>方法 A：自己动手，丰衣足食（推荐）</h3>
<ol>
<li>打开 Safari 浏览器，访问苹果官网（appleid.apple.com）。</li>
<li>点击“创建您的 Apple ID”。在填写资料时，<strong>“国家或地区”务必选择“美国”</strong>。</li>
<li>使用一个全新的邮箱注册，手机号可以使用你国内的 +86 手机号接收验证码。</li>
<li>注册成功后，打开手机上的 App Store，退出你原来的国区账号，登录刚刚注册的美区账号。</li>
<li>系统会提示检查账号，点击同意。在填写账单地址时，使用谷歌搜索“美国免税州地址生成器”（建议选择俄勒冈州 Oregon 或 特拉华州 Delaware，买软件免税）。<strong>付款方式必须选择“无 (None)”</strong>。</li>
<li>大功告成！你现在拥有了一个纯正的美区账号。</li>
</ol>
<h3>方法 B：淘宝/发卡站购买礼品卡或账号</h3>
<p>如果你觉得注册太麻烦，可以在淘宝搜索“Apple ID 美区”购买一个现成的账号（约 5-10 元）。为了购买 2.99 美元的小火箭，你需要去支付宝购买“App Store 充值卡 (美区)”，或者在淘宝购买 5 美元的礼品卡充值进去。</p>
<h2>三、Shadowrocket 一键导入机场节点</h2>
<p>购买并下载好 Shadowrocket 后，接下来就是导入我们在机场购买的节点了。如果你还没有购买节点，强烈推荐对于移动端极度友好的 <a href="review.html?id=飞猫云" style="color:var(--accent);">飞猫云</a> 或者主打低延迟的 <a href="review.html?id=一翻云(秒秒云)" style="color:var(--accent);">一翻云</a>。</p>
<ol>
<li>打开你的机场官网后台，找到 <strong>“一键订阅”</strong> 面板。</li>
<li>找到 <strong>“导入到 Shadowrocket”</strong> 按钮，点击它。</li>
<li>此时手机会自动弹出提示：“是否在 Shadowrocket 中打开？”，点击 <strong>允许</strong>。</li>
<li>此时跳转回小火箭，你会发现所有的节点都已经自动加载到了列表中！</li>
<li>点击上方最底部的 <strong>“全局路由”</strong>，建议选择 <strong>“配置 (Config)”</strong>（这等同于规则分流，国内应用不走代理，国外应用走代理）。</li>
<li>选择一个测速绿色的节点，打开最顶部的 <strong>“未连接”</strong> 开关。第一次打开会提示安装 VPN 配置文件，输入锁屏密码同意即可。</li>
</ol>
<p>当手机状态栏出现 <strong>VPN</strong> 小图标时，恭喜你，世界的大门已经为你敞开！</p>
<h2>四、移动端翻墙常见问题 (FAQ)</h2>
<blockquote>
<strong>Q1：为什么小火箭开着的时候，收不到微信消息或者耗电极快？</strong>
<br>答：请务必检查“全局路由”是否设置为了“全局 (Proxy)”。如果是全局模式，你手机所有的流量（包括微信、抖音）都会绕道美国再回来，不仅极其卡顿而且耗电。<strong>务必将其改为“配置”模式。</strong>
</blockquote>
<blockquote>
<strong>Q2：如何更新机场的节点？</strong>
<br>答：机场的服务端 IP 会不定期更换。在小火箭的服务器列表中，找到你的机场名字那一行（通常在最上面），向右滑动，点击“更新 (Update)”即可获取最新节点。建议在设置中开启“打开App时自动更新订阅”。
</blockquote>`;

const t_v2rayng = `<p><strong>导语：</strong>与苹果 iOS 复杂的跨区下载相比，Android 系统的开放性让科学上网变得异常简单。在安卓平台，有一款被称为“瑞士军刀”的神级开源软件：<strong>v2rayNG</strong>。它不仅完全免费、没有广告，而且支持市面上几乎所有的高级协议（VMess, VLESS, Trojan, Hysteria 等）。</p>
<h2>一、认准唯一正版下载渠道</h2>
<p>由于国内应用商店（华为、小米、OV）屏蔽了此类软件，很多小白会去百度搜索下载，结果下到满是弹窗广告的“改版”。请务必通过开发者的 Github 官方发布页下载：</p>
<p>👉 <a href="https://github.com/2dust/v2rayNG/releases" target="_blank" style="color:var(--accent); font-weight:bold;">v2rayNG 官方 Github 下载页</a></p>
<p>在发布页的 Assets 列表中，选择 <strong><code>v2rayNG_xxx_arm64-v8a.apk</code></strong> 进行下载（2020年以后的绝大多数安卓手机都是这个架构。如果是非常老的手机，则选择 armeabi-v7a）。下载后，忽略手机系统的“风险提示”，强制安装即可。</p>
<h2>二、导入你的机场订阅链接</h2>
<p>巧妇难为无米之炊，软件有了，我们需要一个稳定快速的机场提供网络出口。如果你热爱看油管高清视频或者刷 TikTok，推荐使用提供大带宽的 <a href="review.html?id=光速云" style="color:var(--accent);">光速云</a> 或 <a href="review.html?id=星岛梦" style="color:var(--accent);">星岛梦机场</a>。</p>
<ol>
<li>登录你的机场后台面板，点击 <strong>“复制订阅链接”</strong>（注意：复制的是通用订阅链接或者 v2ray 订阅链接）。</li>
<li>打开手机上的 v2rayNG 软件。</li>
<li>点击屏幕左上角的 <strong>三条横线（汉堡菜单）</strong>，选择 <strong>“订阅分组设置”</strong>。</li>
<li>点击右上角的 <strong>“+”号</strong> 添加新订阅。</li>
<li><strong>备注：</strong>随便填（例如“光速云机场”）。<br><strong>可选地址(url)：</strong>长按粘贴你刚刚在机场复制的订阅链接。</li>
<li>点击右上角的 <strong>“√”</strong> 保存。</li>
<li>退回软件主界面，点击右上角的 <strong>三个点 (...)</strong>，选择 <strong>“更新订阅”</strong>。</li>
<li>刷啦一下，所有的节点（如香港、美国、日本）都会立刻出现在你的主界面列表中。</li>
</ol>
<h2>三、一键连接与分应用代理（安卓独占神级功能）</h2>
<p>在列表中选择一个延迟较低（Ping值测试有数字）的节点，点击它使其左侧变蓝。然后点击屏幕右下角的 <strong>“V”字形圆形大按钮</strong>。第一次连接会提示申请 VPN 权限，点击“允许”。按钮变绿后，你就已经成功翻墙了！</p>
<h3>★ 进阶玩法：分应用代理（极度省电）</h3>
<p>这是安卓系统独有的神级功能。你可以设置“只有特定的 APP 走梯子，国内 APP 彻底不走梯子”，这样不仅不影响微信收发消息，还能极大节省电量。</p>
<ol>
<li>点击左上角菜单，选择 <strong>“设置”</strong>。</li>
<li>向下滚动找到 <strong>“分应用代理”</strong>，将其开启。</li>
<li>点击进入详细设置，你可以选择 <strong>“绕过局域网及大陆地址”</strong> 或者手动勾选你需要翻墙的 APP（比如 YouTube, X, Telegram, Chrome 浏览器）。</li>
</ol>
<h2>四、排障指南：连上了但没网？</h2>
<blockquote>
<strong>情况1：右下角变绿了，但 YouTube 一直转圈。</strong>
<br>解决：点击右上角的三个点，选择“测试全部配置真连接”。如果全都是“-1ms”，说明你的机场订阅到期了，或者机场被墙了。请更换 <a href="review.html?id=速界" style="color:var(--accent);">速界 等高级专线机场</a> 重新导入。
</blockquote>
<blockquote>
<strong>情况2：锁屏一段时间后，梯子自动断开。</strong>
<br>解决：这是由于国内安卓手机（特别是华为、小米）激进的后台杀进程策略导致的。请去手机系统的“设置 -> 电池 -> 应用耗电管理”中，将 v2rayNG 设置为“允许后台运行”或“无限制”。并在多任务界面将其加锁。
</blockquote>`;

const t_v2rayn = `<p><strong>导语：</strong>在代理软件的历史长河中，<strong>v2rayN</strong> 绝对是 Windows 系统上的一座丰碑。即使到了 2026 年，各大新秀层出不穷，但由于其极低的内存占用、极其直白的操作界面以及对底层配置的完全掌控力，依然有数百万老极客和网吧用户将它作为主力客户端。如果你只是想简简单单地上个外网，不想搞懂什么叫“YAML规则集”，v2rayN 是你的不二之选。</p>
<h2>一、官方纯净版下载与防毒防坑指南</h2>
<p>v2rayN 的知名度极高，这也导致了网上有无数的“假冒官网”。搜索出来的第一个结果往往是带有木马的捆绑包。再次强调，<strong>千万不要去乱七八糟的软件站下载！</strong></p>
<p>👉 <a href="https://github.com/2dust/v2rayN/releases" target="_blank" style="color:var(--accent); font-weight:bold;">点击进入 v2rayN 官方 Github 发布页</a></p>
<div style="background: rgba(255,255,255,0.05); padding: 15px; border-left: 4px solid #6366f1; margin-bottom: 20px;">
<strong>📦 版本选择必看：</strong>
<br>在下载页你会看到好几个压缩包：
<br>1. <code>v2rayN-Core.zip</code>：这是不带内核的空壳，小白千万别下，下了也用不了。
<br>2. <strong><code>zz_v2rayN-With-Core-SelfContained.7z</code> (★强烈推荐)</strong>：这个版本自带了所有的核心文件（Xray Core 和 v2fly Core），并且自带了 .NET 运行库，解压后双击 <code>v2rayN.exe</code> 即可直接运行，完全绿色免安装，即使是重装系统的裸机也能直接跑。
</div>
<h2>二、核心概念：Xray 内核与 V2ray 内核的切换</h2>
<p>v2rayN 只是一个“皮（GUI）”，真正干活的是里面的内核。默认情况下，它使用的是 v2ray 内核。但如果你购买的机场（比如 <a href="review.html?id=光年梯" style="color:var(--accent);">光年梯</a> 或 <a href="review.html?id=速界" style="color:var(--accent);">速界</a>）支持更先进的 VLESS 或者 XTLS 协议，你必须切换到 Xray 内核。</p>
<p><strong>切换方法：</strong>点击软件顶部的“设置” -> “内核设置”，将默认的内核选择为 <code>Xray</code>，然后重启软件即可享受极致的低延迟响应。</p>
<h2>三、傻瓜式导入机场节点</h2>
<ol>
<li>登录你的机场后台面板，找到 <strong>“复制 v2ray 订阅链接”</strong>（注意，不是复制 Clash 链接，那是没用的）。</li>
<li>回到 v2rayN，点击上方菜单栏的 <strong>“订阅” -> “订阅设置”</strong>。</li>
<li>在弹出的窗口中点击“添加”，在<strong>地址(url)栏</strong>粘贴刚刚复制的链接，备注随便填（比如“我的主力机场”），点击确定保存。</li>
<li>回到主界面，点击菜单栏的 <strong>“订阅” -> “更新订阅(不通过代理)”</strong>。此时底部日志会疯狂滚动，几秒钟后，节点列表就会瞬间刷出！</li>
</ol>
<h2>四、开启系统代理与进阶路由策略</h2>
<p>在茫茫多的节点列表中，选中一个你想用的节点（比如香港节点），<strong>按回车键（或者右键设为活动服务器）</strong>。此时该节点的前面会出现一个蓝色的勾勾，这就代表选定它了。</p>
<p><strong>最后一步，也是最重要的一步：</strong>在电脑右下角任务栏，找到蓝色的“V”字图标，<strong>右键点击它</strong>，找到 <strong>“系统代理”</strong>，勾选 <strong>“自动配置系统代理”</strong>。此时图标会变成红色，恭喜你，翻墙成功！</p>
<h3>★ 进阶必看：如何让国内网站不卡顿？</h3>
<p>很多新手抱怨开了梯子后，访问淘宝、百度甚至网易云音乐变得极慢。这是因为你开启了全局代理。v2rayN 提供了极佳的路由分流功能。</p>
<p>在任务栏图标右键菜单的 <strong>“路由”</strong> 选项中，务必勾选 <strong>“绕过局域网及大陆地址”</strong>。开启这个功能后，v2rayN 会自动判断你要访问的网站 IP，如果是国内的，就直接走你本地的宽带；如果是国外的，才走机场的节点。既保证了国内速度，又极大地节省了机场流量。</p>
<h2>五、常见报错排查与终极解决</h2>
<blockquote>
<strong>症状 1：更新订阅时提示 "The underlying connection was closed" 或者 "Timeout"。</strong>
<br>解决：这是因为你的网络连不上机场的订阅服务器。解决方法是换个时间再试，或者如果你的手机有网，可以先开个手机热点给电脑连上更新订阅，更新出节点后再连回宽带。
</blockquote>
<blockquote>
<strong>症状 2：底部日志狂报 "Failed to start port 1080: address already in use"。</strong>
<br>解决：经典的端口冲突！说明你的电脑上有其他代理软件（比如老版 Clash、迅雷组件、或者某些网银插件）占用了 1080 端口。点击 v2rayN 顶部的“设置” -> “参数设置” -> “Core基础设置”，将本地监听端口改为 <code>10809</code> 或其他四位数字，重启软件即可解决。
</blockquote>`;

const t_qx = `<p><strong>导语：</strong>在苹果 iOS 的生态中，如果说 Shadowrocket (小火箭) 是平民玩家日常通勤的代步车，那么 <strong>Quantumult X (圈X)</strong> 就是高阶极客手中的 F1 赛车。售价高达 7.99 美元的圈X，拥有极其硬核的重写 (Rewrite)、抓包分析 (MitM) 和脚本执行能力。它不仅仅是一个翻墙工具，更是你手机的网络大管家，能实现诸如“视频去广告”、“全网付费破解”、“TikTok 免拔卡换区”等神级操作。</p>
<h2>一、获取 Quantumult X 的艰难门槛</h2>
<p>国区 App Store 显然是没有这款神器的。你必须拥有一个非国区（推荐美区或港区）的 Apple ID。具体注册美区 ID 的方法可以参考我们的 <a href="tutorial_view.html?id=shadowrocket-ios" style="color:var(--accent);">小火箭下载教程篇</a>。由于其 7.99 美元的售价对很多人来说偏高，目前主流的获取方式有两种：</p>
<ul>
<li><strong>土豪直购：</strong>在支付宝购买 10 美元的 App Store 充值卡，充入自己的美区账号直接购买。这是最安全、最推荐的方式，永久绑定你的账号。</li>
<li><strong>拼车共享：</strong>在淘宝或者发卡站搜索“圈X 共享账号”，花几块钱登录别人的账号下载。下载完切回自己的账号即可。</li>
</ul>
<h2>二、导入机场节点与策略组 (Policy) 概念</h2>
<p>圈X 的配置逻辑比小火箭复杂得多。它引入了极其强大的 <strong>“策略组”</strong> 概念。举个例子，你可以设置：所有奈飞 (Netflix) 的流量走新加坡节点，所有 ChatGPT 的流量走美国原生节点，而 YouTube 走香港节点，互不干扰。</p>
<p>要实现这一切，你首先得把节点导进去。强烈建议搭配拥有多国高质量线路的 <a href="review.html?id=全球云" style="color:var(--accent);">全球云 (GC VIP)</a> 或 <a href="review.html?id=宇宙云" style="color:var(--accent);">宇宙云专线</a> 使用：</p>
<ol>
<li>打开你的机场后台，找到“复制 Quantumult X 订阅链接”。</li>
<li>打开圈X主界面，点击右下角的 <strong>大风车图标（设置）</strong>。</li>
<li>在弹出的菜单中向下滚动，找到 <strong>“节点 (Server)” -> “引用 (Quotes)”</strong>。</li>
<li>在标签处随便填一个名字，在 URL 处粘贴你的链接，然后打开右上角的保存。</li>
<li>回到主界面，你会看到节点卡片已经加载出来了，长按节点可以进行延迟测速。</li>
</ol>
<h2>三、圈X的灵魂：懒人规则与去广告脚本</h2>
<p>如果你花 8 美元买圈X只为了翻墙，那简直是暴殄天物！圈X 最强大的地方在于导入社区大神们维护的“重写规则”。通过拦截和修改 APP 发出的网络请求，它可以实现魔法般的功能。</p>
<h3>第一步：导入大神配置文件 (以神机规则为例)</h3>
<ol>
<li>点击大风车图标，找到 <strong>“配置文件 (Configuration)” -> “下载 (Download)”</strong>。</li>
<li>输入知名大神的远程配置文件链接（例如 <code>https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/X/Filter.conf</code>，具体链接请去 Github 搜索最新版）。</li>
<li>点击下载并应用。此时你的圈X就拥有了最顶级的“大脑分流系统”。</li>
</ol>
<h3>第二步：开启 MitM (中间人攻击) 解密 HTTPS</h3>
<p>去广告的核心在于解密加密流量，这是重中之重：</p>
<ol>
<li>在大风车设置中，找到 <strong>“MitM”</strong> 模块。</li>
<li>点击 <strong>“生成证书 (Generate Certificate)”</strong>。</li>
<li>点击 <strong>“配置证书 (Configure Certificate)”</strong>，系统会提示下载一个描述文件，允许它。</li>
<li>切回 iOS 手机的系统设置，点击“已下载描述文件”，完成安装。</li>
<li><strong>最关键的一步：</strong>进入手机系统设置 -> 通用 -> 关于本机 -> 证书信任设置，将刚才安装的 <code>Quantumult X Custom Root Certificate</code> 开关打开！</li>
<li>回到圈X，将 MitM 的总开关打开。</li>
</ol>
<p>至此，你的圈X已经化身为最强形态。你可以去 Github 的 <code>QuantumultX-Scripts</code> 仓库里寻找各种去广告、破解脚本，享受干掉一切烦人广告的纯净体验。</p>
<h2>四、常见问题与劝退指南</h2>
<blockquote>
<strong>Q1：为什么开启圈X后，某些国内银行 APP 或者闲鱼会提示“网络环境不安全”或直接断网？</strong>
<br>答：这是因为开启了 MitM 证书解密。银行类 APP 有极其严格的证书校验机制（SSL Pinning）。当它们发现证书被圈X替换时，就会主动切断连接。解决方法：在圈X的“分流规则”中，将该 APP 的域名设置为 <code>Direct (直连)</code> 并且不开启 MitM 重写。
</blockquote>
<p><strong>总结：</strong>圈X 绝对不适合怕麻烦的小白。如果你只是想简简单单看个视频，请左转使用 Shadowrocket。但如果你热爱折腾，喜欢掌控一切网络数据流动的感觉，圈X 是你一辈子都舍不得卸载的终极神器。</p>`;

const t_surfboard = `<p><strong>导语：</strong>长久以来，安卓生态下的科学上网软件总是充斥着“理工男”的审美——密密麻麻的文字、毫无设计感的按钮、复杂的底层参数配置。直到 <strong>Surfboard（冲浪板）</strong> 的横空出世，彻底打破了这个僵局。它采用了极致现代的 Material You 设计语言，界面优雅流畅，不仅颜值爆表，更是在底层全面拥抱了苹果生态下的高级 Surge 规则标准。可以说，Surfboard 是目前安卓阵营最“高级”的代理软件。</p>
<h2>一、为什么强烈建议你抛弃原版 Clash？</h2>
<p>众所周知，原版的 Clash for Android 已经在几个月前因为不可抗力删库停更了。虽然它还能用，但随着 Android 14/15 系统的升级，老旧的代码开始出现耗电增加、频繁杀后台等各种兼容性问题。相比之下，Surfboard 一直在极其活跃地更新，不仅完美兼容最新的安卓系统，其底层内核也针对手机进行了深度的省电优化。更重要的是：<strong>它看起来太漂亮了！</strong></p>
<h2>二、如何获取无毒正版的冲浪板？</h2>
<p>与其他代理软件一样，国内应用商店是找不到它的。我们强烈建议通过其官方 Github 获取最新版本：</p>
<p>👉 <a href="https://github.com/getsurfboard/surfboard/releases" target="_blank" style="color:var(--accent); font-weight:bold;">Surfboard 官方 Github 发行版下载页</a></p>
<p>在下载页中，找到 <code>app-universal-release.apk</code> 这个文件下载并安装。软件完全免费，且没有任何弹窗广告，简直是业界的良心。</p>
<h2>三、一键导入机场配置 (Surge格式)</h2>
<p>Surfboard 最核心的技术优势在于，它直接解析 <strong>Surge 3/4</strong> 格式的配置文件。Surge 是苹果端售价高达几百块的顶级代理软件，其规则分流生态极其成熟。这意味着你在安卓上也能享受到苹果土豪同款的高级路由体验！</p>
<ol>
<li>进入你的优质机场面板（我们推荐 UI 同样漂亮的 <a href="review.html?id=星岛梦" style="color:var(--accent);">星岛梦</a> 或是大宽带的 <a href="review.html?id=光速云" style="color:var(--accent);">光速云</a>）。</li>
<li>在机场的“一键订阅”区域，如果有 <strong>“一键导入到 Surfboard”</strong> 的按钮，直接点击，软件会自动拉起并导入。</li>
<li>如果没有这个按钮，请点击 <strong>“复制 Surge 托管链接”</strong>（注意：千万不要复制普通的 V2ray 或 Clash 链接，冲浪板不认那个）。</li>
<li>打开 Surfboard 软件，点击底部导航栏的 <strong>“配置 (Profiles)”</strong> 标签。</li>
<li>点击右下角圆形的 <strong>“+”</strong> 号悬浮按钮，选择 <strong>“从 URL 导入”</strong>。将链接粘贴进去，点击下载。</li>
<li>下载完成后，配置卡片上会出现一个对勾，表示已经选中该配置。</li>
</ol>
<h2>四、优雅的连接与网速监控面板</h2>
<p>配置好后，一切就变得极其赏心悦目了。</p>
<p>切换到底部的 <strong>“开关 (Switch)”</strong> 标签页，你会看到一个巨大的、设计感十足的播放按钮。轻轻一点，按钮会展现平滑的过渡动画并变亮。系统会提示你授权建立 VPN 连接，点击允许即可。</p>
<p>此时，点击底部的 <strong>“仪表盘 (Dashboard)”</strong>，这是 Surfboard 最吸睛的地方：它会以极高帧率的动态折线图，实时显示你的上传和下载网速。你可以直观地看到看 4K 视频时那飙升的带宽曲线，科技感拉满。</p>
<h2>五、安卓独享：彻底告别耗电焦虑的分应用代理</h2>
<p>很多小白觉得开了梯子手机耗电就尿崩，其实是因为国内那些毒瘤 APP（如某宝、某多多）的数据也在你的梯子内部绕了一圈。Surfboard 提供了极简的分应用代理功能：</p>
<ol>
<li>点击底部的“设置 (Settings)”，找到“分应用代理 (Per-app proxy)”。</li>
<li>将其切换为“绕过选中应用”或者“仅代理选中应用”。</li>
<li>例如，你可以勾选所有的国内银行、购物、外卖 APP，让它们直接绕过 VPN 走本地网络。</li>
<li>不仅加载速度瞬间提升，手机的续航也能延长至少 20%！</li>
</ol>
<p><strong>总结：</strong>Surfboard 是那种一旦你用上了，就再也不想看别的代理软件一眼的“颜值+实力”双料选手。强烈推荐给注重 UI 体验和系统续航的安卓用户。</p>`;

const t_nekobox = `<p><strong>导语：</strong>在科学上网的圈子里，“道高一尺，魔高一丈”的戏码每天都在上演。2026 年初，随着 GFW 部署了更深度的 DPI（深度包检测）和主动探测技术，大量的传统 TLS 伪装节点成片倒下。在最黑暗的时刻，基于 <strong>sing-box</strong> 核心重构的 <strong>NekoBox (猫猫盒)</strong> 站了出来。它不仅支持目前地表最强的 Reality 和 Hysteria2 防封锁协议，更是以“跨全平台统一样式”的姿态，成为了高阶玩家手中对抗封锁的最强重型武器。</p>
<h2>一、NekoBox 的底气：什么是 sing-box 内核？</h2>
<p>在过去几年里，V2ray 和 Xray 一直是翻墙圈的绝对霸主。但随着代码库越来越臃肿，一个用纯 Go 语言编写、主打“轻量、超速、模块化全覆盖”的新内核 <strong>sing-box</strong> 诞生了。它重写了底层网络协议栈，在处理大量并发连接时，CPU 占用极低，且对最新加密协议的支持远超老前辈。而 NekoBox 就是目前调用 sing-box 内核最完美的图形化客户端之一。</p>
<h2>二、全平台制霸：下载与安装指南</h2>
<p>NekoBox 最牛的地方在于，它在 Android、Windows 甚至 Linux 上，都提供了体验几乎一致的客户端，极大降低了跨平台用户的学习成本。</p>
<div style="background: rgba(255,255,255,0.05); padding: 15px; border-left: 4px solid #14b8a6; margin-bottom: 20px;">
<strong>📥 官方 Github 下载渠道：</strong>
<br>1. <strong>安卓手机端：</strong>在 Github 搜索 <code>NekoBoxForAndroid</code>，在 Releases 中下载对应的 APK。
<br>2. <strong>Windows 电脑端：</strong>在 Github 搜索 <code>nekoray</code>（这是它在 PC 端的项目名），下载 zip 压缩包，解压后运行 <code>nekobox.exe</code> 即可。
</div>
<h2>三、如何榨干 NekoBox 的最强性能？</h2>
<p>使用 NekoBox，如果你还在用老旧的 SS 或 VMess 协议，那简直是浪费。强烈建议搭配全面支持 VLESS-Reality 协议的顶级抗封锁机场（如 <a href="review.html?id=极连云" style="color:var(--accent);">极连云</a> 或 <a href="review.html?id=光年梯" style="color:var(--accent);">光年梯</a>）来释放它的全部潜能。</p>
<h3>步骤 1：导入高级订阅</h3>
<ol>
<li>在机场后台复制通用订阅链接（或者如果机场提供，直接复制 sing-box 专用订阅链接）。</li>
<li>打开 NekoBox 电脑版，点击上方菜单栏的 <strong>“首选项” -> “分组”</strong>。</li>
<li>点击左下角的“新建”，随便起个名字。在“订阅链接”框里粘贴链接。</li>
<li>点击“确定”，然后点击“更新订阅”。稍等片刻，极速节点就会出现在主界面。</li>
</ol>
<h3>步骤 2：核心模式切换（非常关键）</h3>
<p>NekoBox PC 版之所以强大，是因为它在设置里提供了内核切换选项。点击上方“首选项” -> “基本设置” -> “核心”，<strong>务必确保你选择的是 <code>sing-box</code> 而不是 <code>Xray</code></strong>。这样才能完美运行最新的协议。</p>
<h3>步骤 3：开启 TUN 虚拟网卡模式</h3>
<p>和 Clash 一样，NekoBox 也支持接管电脑全局流量的 TUN 模式。这对于需要代理 UWP 应用（微软商店应用）或是 Telegram 桌面版的用户来说是神器。在软件主界面顶部，直接勾选 <strong>“TUN 模式”</strong>。首次勾选可能会提示你安装虚拟网卡，点击允许即可。</p>
<h2>四、硬核玩家专属：查看运行日志与防 DNS 泄露</h2>
<p>很多小白觉得 NekoBox 难用，是因为它看起来很“极客”。但这恰恰是高级玩家的最爱。</p>
<ul>
<li><strong>实时日志诊断：</strong>当某个节点连不上时，NekoBox 底部的日志会以非常直白的格式（TCP timeout, Handshake failed 等）告诉你具体是哪个环节被墙了，方便排错。</li>
<li><strong>DNS 路由高阶防漏：</strong>在“首选项” -> “路由设置”中，NekoBox 提供了极度自由的 DNS 劫持和分流规则配置，彻底杜绝你的真实 IP 被国内的垃圾软件偷偷泄漏，极致保护隐私安全。</li>
</ul>
<p><strong>最终评价：</strong>NekoBox 绝对是一头难以驯服的猛兽。它的学习曲线极为陡峭，但只要你愿意花半个小时去摸索它的各项设置，它将在未来几年的严苛网络封锁中，成为你最坚固、最快速的堡垒。</p>`;

const fileContent = `const tutorialData = {
    "clash-verge-rev": {
        title: "【保姆级】2026 最新版 Clash Verge Rev 客户端下载与汉化配置教程（附疑难排查）",
        date: "2026-06-16",
        views: "45,291",
        desc: "Windows 和 Mac 用户目前最好用、最稳定的科学上网客户端。包含详细的下载、安装、汉化、TUN 模式开启以及常见报错终极解决指南。",
        actionText: "前往 Github 官方下载",
        link: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        content: ${JSON.stringify(t_clash)}
    },
    "shadowrocket-ios": {
        title: "苹果 iPhone 怎么翻墙？2026 小火箭 Shadowrocket 下载与美区 Apple ID 注册全攻略",
        date: "2026-06-15",
        views: "38,102",
        desc: "iOS 端唯一的神！一篇文章教你如何免信用卡注册美区 Apple ID，安全购买并配置 Shadowrocket (小火箭)。",
        actionText: "前往 App Store (需美区账号)",
        link: "https://apps.apple.com/us/app/shadowrocket/id932747118",
        content: ${JSON.stringify(t_shadowrocket)}
    },
    "v2rayng-android": {
        title: "安卓手机最强翻墙神器：v2rayNG 下载与节点导入保姆级教程",
        date: "2026-06-14",
        views: "21,504",
        desc: "Android 安卓阵营最轻量、最强大的科学上网客户端。支持分应用代理，极致省电，手把手教你配置最新的 V2ray 与 Trojan 节点。",
        actionText: "前往 Github 官方下载",
        link: "https://github.com/2dust/v2rayNG/releases",
        content: ${JSON.stringify(t_v2rayng)}
    },
    "v2rayn-windows": {
        title: "Windows 端最经典的 V2ray 客户端：v2rayN 极简配置与进阶路由指南",
        date: "2026-06-13",
        views: "33,901",
        desc: "无数老网民的启蒙工具！如果你不喜欢 Clash 的复杂，v2rayN 是 Windows 电脑上最简单、最轻量的科学上网工具。",
        actionText: "前往 Github 官方下载",
        link: "https://github.com/2dust/v2rayN/releases",
        content: ${JSON.stringify(t_v2rayn)}
    },
    "quantumult-x-ios": {
        title: "高端玩家必备：Quantumult X (圈X) 购买与节点、去广告规则全攻略",
        date: "2026-06-12",
        views: "18,445",
        desc: "iOS 平台真正的王者！不仅能翻墙，还能实现全网视频去广告、TikTok 换区、破解部分 APP。高阶极客的终极玩具。",
        actionText: "前往 App Store (需美区)",
        link: "https://apps.apple.com/us/app/quantumult-x/id1443988620",
        content: ${JSON.stringify(t_qx)}
    },
    "surfboard-android": {
        title: "安卓颜值天花板！冲浪板 Surfboard 下载与配置教程，完美替代原版 Clash",
        date: "2026-06-11",
        views: "15,290",
        desc: "被誉为安卓平台最好看的代理软件。支持直接导入 Surge 格式的配置文件，界面极其优雅现代，支持最新网络协议。",
        actionText: "前往 Github 官方下载",
        link: "https://github.com/getsurfboard/surfboard/releases",
        content: ${JSON.stringify(t_surfboard)}
    },
    "nekobox-universal": {
        title: "2026 防封锁最强黑马！基于 sing-box 内核的 NekoBox 客户端全平台配置详解",
        date: "2026-06-10",
        views: "29,881",
        desc: "极其硬核的次世代客户端！底层采用风头正盛的 sing-box 内核，支持全平台互通，专治各种网络疑难杂症与深度封锁。",
        actionText: "前往 Github 了解更多",
        link: "https://github.com/MatsuriDayo/NekoBoxForAndroid",
        content: ${JSON.stringify(t_nekobox)}
    }
};`;

fs.writeFileSync('js/tutorial_data.js', fileContent);
console.log('Successfully generated extremely rich tutorial data!');
