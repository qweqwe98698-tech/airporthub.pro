const fs = require('fs');
const path = require('path');

const cryptoHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web3 数字货币导航 - 币圈防封号超低延迟专线</title>
    <meta name="description" content="精选 Binance、OKX、DexScreener 等 20 大币圈顶级应用。提供冲土狗超低延迟、交易所防清退纯净 IP 解决方案。">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .page-container {
            padding: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .crypto-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .crypto-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 25px;
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }
        
        .crypto-card:hover {
            border-color: #10b981;
            box-shadow: 0 10px 20px rgba(16, 185, 129, 0.15);
            transform: translateY(-2px);
        }

        .crypto-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #10b981, #3b82f6);
            opacity: 0;
            transition: 0.3s;
        }
        
        .crypto-card:hover::before {
            opacity: 1;
        }

        .crypto-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .crypto-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #10b981;
        }

        .crypto-title h3 {
            font-size: 20px;
            color: #fff;
            margin-bottom: 5px;
        }

        .crypto-title span {
            font-size: 12px;
            color: var(--text-muted);
            background: rgba(255,255,255,0.05);
            padding: 2px 8px;
            border-radius: 10px;
        }

        .crypto-desc {
            color: var(--text-secondary);
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }

        .env-req {
            background: rgba(239, 68, 68, 0.05);
            border-left: 3px solid #ef4444;
            padding: 10px 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 13px;
        }
        
        .env-req.strict {
            background: rgba(239, 68, 68, 0.05);
            border-color: #ef4444;
        }
        .env-req.strict span { color: #ef4444; font-weight: bold; }
        
        .env-req.medium {
            background: rgba(16, 185, 129, 0.05);
            border-color: #10b981;
        }
        .env-req.medium span { color: #10b981; font-weight: bold; }

        .crypto-actions {
            display: flex;
            gap: 10px;
        }

        .btn-visit {
            flex-grow: 1;
            background: #10b981;
            color: white;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: 0.2s;
        }
        
        .btn-visit:hover {
            filter: brightness(1.1);
        }

        .btn-proxy {
            flex-grow: 1;
            background: transparent;
            color: #10b981;
            border: 1px solid #10b981;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: 0.2s;
        }
        
        .btn-proxy:hover {
            background: rgba(16, 185, 129, 0.1);
        }

    </style>
</head>
<body>
    <div class="dashboard-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="logo">
                <i class='bx bx-globe'></i>
                <span>NODE ANALYTICS</span>
            </div>
            
            <nav class="sidebar-nav" style="margin-top: 30px; padding: 0 15px;">
                <a href="index.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s;">
                    <i class='bx bx-data' style="font-size: 20px;"></i> 数据看板
                </a>
                <a href="tutorials.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-book-open' style="font-size: 20px;"></i> 客户端教程
                </a>
                <a href="apple_id.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-user-circle' style="font-size: 20px;"></i> 免费 Apple ID
                </a>
                <a href="free_nodes.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-wifi' style="font-size: 20px;"></i> 免费节点订阅
                </a>
                <a href="ai_tools.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bot' style="font-size: 20px;"></i> AI 工具宝盒
                </a>
                <a href="social_media.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-world' style="font-size: 20px;"></i> 海外社交媒体
                </a>
                <a href="ecommerce.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-store' style="font-size: 20px;"></i> 跨境电商导航
                </a>
                <a href="crypto.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bitcoin' style="font-size: 20px; color: #10b981;"></i> 数字货币导航
                </a>
            </nav>
            
            <div class="ad-banner" style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; border: 1px solid var(--border);">
                <h4 style="color: #10b981; margin-bottom: 5px; font-size: 14px;">🚀 币圈极速专线</h4>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: #10b981; user-select: all;">AMM</strong></p>
                <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">拒绝掉线！抢先一步交易。</p>
                <button onclick="window.open('index.html', '_blank')" style="width: 100%; padding: 8px; background: #10b981; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">获取超低延迟节点</button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content" style="overflow-y: auto;">
            <header class="topbar">
                <nav class="nav-links">
                    <a href="index.html">看板 (Dashboard)</a>
                    <a href="ecommerce.html">跨境电商</a>
                    <a href="crypto.html" class="active">数字货币与 Web3</a>
                </nav>
            </header>

            <div class="page-container">
                <div class="page-header" style="text-align: center; margin-bottom: 40px; margin-top: 20px;">
                    <i class='bx bx-bitcoin' style="font-size: 60px; color: #10b981; margin-bottom: 15px;"></i>
                    <h1 style="font-size: 32px; margin-bottom: 15px;">Web3 & 数字货币全景导航</h1>
                    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6;">
                        币圈一天，人间一年！无论是现货交易、合约做空、还是链上冲土狗，网络延迟就是金钱。这里汇集了全球 20 大顶级交易所和 Web3 工具，为你提供最专业的防清退与防卡顿网络方案。
                    </p>
                </div>

                <div class="crypto-grid">
                    <!-- Binance -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #f3ba2f;"><i class='bx bx-coin-stack'></i></div>
                            <div class="crypto-title">
                                <h3>Binance (币安)</h3>
                                <span>宇宙第一加密货币交易所</span>
                            </div>
                        </div>
                        <p class="crypto-desc">全球交易量最大的加密货币交易所。深度最好、币种最全，是所有币圈玩家无法绕开的终极枢纽。</p>
                        <div class="env-req strict">
                            网络要求：<span>严禁美国/新加坡 IP</span><br>
                            币安对合规要求极高，如果你使用美国、新加坡等限制地区的 IP 登录，账号会被直接冻结或清退！推荐使用台湾或日本原生节点。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.binance.com/" target="_blank" class="btn-visit" style="background: #f3ba2f; color: #000;">访问 Binance</a>
                            <a href="index.html" class="btn-proxy">获取台湾原生节点</a>
                        </div>
                    </div>

                    <!-- OKX -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #ffffff; background: #000000; border: 1px solid #333;"><i class='bx bx-hive'></i></div>
                            <div class="crypto-title">
                                <h3>OKX (欧易)</h3>
                                <span>华人最爱与 Web3 钱包龙头</span>
                            </div>
                        </div>
                        <p class="crypto-desc">合约交易体验极佳，内置的 Web3 钱包也是目前最好用的多链资产管家，支持铭文和各类 NFT 生态。</p>
                        <div class="env-req strict">
                            网络要求：<span>禁止频繁变动 IP</span><br>
                            欧易风控极其敏感，如果在免费节点中来回跳跃，极易触发人脸识别甚至提币限制（风控冻结 24 小时）。必须使用固定专线。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.okx.com/" target="_blank" class="btn-visit" style="background: #333333;">访问 OKX</a>
                            <a href="index.html" class="btn-proxy">获取固定防封节点</a>
                        </div>
                    </div>

                    <!-- DexScreener -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #fff; background: #1a1a1a;"><i class='bx bx-line-chart'></i></div>
                            <div class="crypto-title">
                                <h3>DexScreener</h3>
                                <span>链上冲土狗/打新神探</span>
                            </div>
                        </div>
                        <p class="crypto-desc">全网速度最快的去中心化交易所（DEX）实时 K 线图。Solana、Base 链冲土狗、看池子、看合约安全的必备神器。</p>
                        <div class="env-req medium">
                            网络要求：<span>超低延迟防滑点</span><br>
                            冲土狗也就是几秒钟的事！K 线必须以毫秒级刷新，网络卡顿 1 秒，你的买入价格可能就暴涨了 50%（滑点），极其考验机场的延迟。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://dexscreener.com/" target="_blank" class="btn-visit" style="background: #1a1a1a; border: 1px solid #444;">打开 DexScreener</a>
                            <a href="index.html" class="btn-proxy">获取超低延迟专线</a>
                        </div>
                    </div>

                    <!-- TradingView -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #2962ff;"><i class='bx bx-chart'></i></div>
                            <div class="crypto-title">
                                <h3>TradingView</h3>
                                <span>全球交易员的看盘圣地</span>
                            </div>
                        </div>
                        <p class="crypto-desc">不管是美股、外汇还是加密货币，所有的专业交易员都在用它看盘画线、写策略代码。</p>
                        <div class="env-req medium">
                            网络要求：<span>高并发 Websocket 维持</span><br>
                            如果开启了秒级 K 线和多个指标，需要与服务器保持极高频率的心跳连接。垃圾机场会频繁导致 “Reconnecting” 甚至断图。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.tradingview.com/" target="_blank" class="btn-visit" style="background: #2962ff;">访问 TradingView</a>
                            <a href="index.html" class="btn-proxy">获取高稳定性专线</a>
                        </div>
                    </div>

                    <!-- MetaMask -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #f6851b;"><i class='bx bx-wallet'></i></div>
                            <div class="crypto-title">
                                <h3>MetaMask (小狐狸钱包)</h3>
                                <span>以太坊 EVM 绝对霸主</span>
                            </div>
                        </div>
                        <p class="crypto-desc">探索 Web3、DeFi、GameFi 世界的“大门钥匙”。浏览器插件占比极高，支持所有兼容 EVM 的公链。</p>
                        <div class="env-req strict">
                            网络要求：<span>RPC 节点低延迟请求</span><br>
                            Gas 费暴涨时抢夺热门 NFT 或首发代币，你的网络必须第一时间将交易打包发送给海外的 RPC 服务器。抢跑（Front-run）全靠网络速度。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://metamask.io/" target="_blank" class="btn-visit" style="background: #f6851b;">安装 MetaMask</a>
                            <a href="index.html" class="btn-proxy">获取游戏级低延迟</a>
                        </div>
                    </div>

                    <!-- Bybit -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #ffb11a;"><i class='bx bx-candles'></i></div>
                            <div class="crypto-title">
                                <h3>Bybit (拜比特)</h3>
                                <span>全球衍生品交易巨头</span>
                            </div>
                        </div>
                        <p class="crypto-desc">以合约交易起家，深度好、滑点低，各种理财和 Launchpad 打新收益颇丰，深受专业做空/做多交易员喜爱。</p>
                        <div class="env-req strict">
                            网络要求：<span>强力反欺诈 IP 过滤</span><br>
                            Bybit 的风控越来越严，禁止美国本土等大量国家 IP 访问。被查出使用黑名单梯子 IP，直接禁止提币甚至要求解释资产来源。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.bybit.com/" target="_blank" class="btn-visit" style="background: #ffb11a; color: #000;">访问 Bybit</a>
                            <a href="index.html" class="btn-proxy">获取纯净白名单 IP</a>
                        </div>
                    </div>

                    <!-- Uniswap -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #ff007a;"><i class='bx bx-transfer-alt'></i></div>
                            <div class="crypto-title">
                                <h3>Uniswap</h3>
                                <span>去中心化交易所(DEX)之王</span>
                            </div>
                        </div>
                        <p class="crypto-desc">以太坊上的自动做市商（AMM）霸主。所有的金狗、神盘最初的诞生地。不用注册，连钱包即可交易。</p>
                        <div class="env-req medium">
                            网络要求：<span>屏蔽封锁与防劫持</span><br>
                            Uniswap 官网前端由于监管问题屏蔽了部分国家 IP。并且使用不安全的免费翻墙软件，极易遭遇 DNS 劫持从而授权给黑客假钱包。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://app.uniswap.org/" target="_blank" class="btn-visit" style="background: #ff007a;">访问 Uniswap</a>
                            <a href="index.html" class="btn-proxy">获取安全加密专线</a>
                        </div>
                    </div>

                    <!-- CoinMarketCap -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #12161c; background: #fff; border: 1px solid #e2e8f0;"><i class='bx bx-pie-chart-alt-2'></i></div>
                            <div class="crypto-title">
                                <h3>CoinMarketCap</h3>
                                <span>全球加密资产权威排行</span>
                            </div>
                        </div>
                        <p class="crypto-desc">币安旗下的加密数据平台。查市值、看流通量、找各大交易所交易对和官网链接的防骗第一站。</p>
                        <div class="env-req medium">
                            网络要求：<span>全天候无缝访问</span><br>
                            作为一个信息查阅工具，每天要打开几十次，你需要一个 24 小时挂在后台不掉线、不影响日常国内社交网络的高端分流节点。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://coinmarketcap.com/" target="_blank" class="btn-visit" style="background: #12161c; color: #fff;">访问 CMC</a>
                            <a href="index.html" class="btn-proxy">获取无缝分流机场</a>
                        </div>
                    </div>

                    <!-- Gate.io -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #0d8580;"><i class='bx bx-store-alt'></i></div>
                            <div class="crypto-title">
                                <h3>Gate.io (芝麻开门)</h3>
                                <span>老牌山寨币首发阵地</span>
                            </div>
                        </div>
                        <p class="crypto-desc">几乎所有新奇特、有争议的山寨币和小币种都会选择在这里首发。追求高风险高回报玩家的必选平台。</p>
                        <div class="env-req strict">
                            网络要求：<span>防封号固定登录区</span><br>
                            Gate 对 IP 变动极其敏感，异地登录经常需要短信+邮箱+谷歌验证器三重验证。推荐固定使用香港或日本的优质线路。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.gate.io/" target="_blank" class="btn-visit" style="background: #0d8580;">访问 Gate.io</a>
                            <a href="index.html" class="btn-proxy">获取香港/日本专线</a>
                        </div>
                    </div>

                    <!-- Bitget -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #1eb9b4;"><i class='bx bx-trending-up'></i></div>
                            <div class="crypto-title">
                                <h3>Bitget (币记)</h3>
                                <span>跟单交易与打新明星</span>
                            </div>
                        </div>
                        <p class="crypto-desc">近年来崛起最快的交易所之一。以“一键跟随顶级交易员操作”的跟单系统闻名，新手躺赚（或躺亏）神器。</p>
                        <div class="env-req medium">
                            网络要求：<span>全网防封控节点</span><br>
                            合规化进程加快，清退了大量不合规 IP。要参与 Launchpad 首发打新抢额度，网络决不能在关键时刻掉链子。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.bitget.com/" target="_blank" class="btn-visit" style="background: #1eb9b4;">访问 Bitget</a>
                            <a href="index.html" class="btn-proxy">获取防清退节点</a>
                        </div>
                    </div>

                    <!-- OpenSea -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #2081e2;"><i class='bx bx-image-alt'></i></div>
                            <div class="crypto-title">
                                <h3>OpenSea</h3>
                                <span>全球最大 NFT 交易市场</span>
                            </div>
                        </div>
                        <p class="crypto-desc">从无聊猿到加密朋克，这里是数字艺术品和 NFT 的集散地。虽然热度有所下降，但依然是行业标杆。</p>
                        <div class="env-req strict">
                            网络要求：<span>大流量图片拉取带宽</span><br>
                            浏览 NFT 市场需要瞬间加载大量高清图片和动图。如果你用廉价机场，页面永远都在转圈圈，图片全裂。必须使用大带宽机场。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://opensea.io/" target="_blank" class="btn-visit" style="background: #2081e2;">访问 OpenSea</a>
                            <a href="index.html" class="btn-proxy">获取大带宽机场</a>
                        </div>
                    </div>

                    <!-- Etherscan -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #3498db;"><i class='bx bx-search-alt'></i></div>
                            <div class="crypto-title">
                                <h3>Etherscan</h3>
                                <span>以太坊区块链浏览器</span>
                            </div>
                        </div>
                        <p class="crypto-desc">链上侦探的放大镜。查询每一笔交易记录、看 Gas 费、读智能合约代码、监控巨鲸大户钱包动向的必备工具。</p>
                        <div class="env-req medium">
                            网络要求：<span>拒绝 Cloudflare 拦截</span><br>
                            Etherscan 对恶意 IP 的拦截率极高。万人骑的免费 VPN 会无限弹出“请证明你不是机器人”的验证码。用纯净节点秒开。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://etherscan.io/" target="_blank" class="btn-visit" style="background: #3498db;">访问 Etherscan</a>
                            <a href="index.html" class="btn-proxy">获取纯净不拦截 IP</a>
                        </div>
                    </div>

                    <!-- HTX -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #0056ff;"><i class='bx bxl-sketch'></i></div>
                            <div class="crypto-title">
                                <h3>HTX (原火币)</h3>
                                <span>老牌三大交易所之一</span>
                            </div>
                        </div>
                        <p class="crypto-desc">孙哥（孙宇晨）麾下的老牌大所。对于国内很多老韭菜来说，依然保留着极深的使用习惯和资产沉淀。</p>
                        <div class="env-req strict">
                            网络要求：<span>规避大陆/美国限制</span><br>
                            多次强调清退大陆用户。必须全局代理挂到安全国家（如香港以外的亚洲区、欧洲区），否则极有可能触发强制提币结清。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.htx.com/" target="_blank" class="btn-visit" style="background: #0056ff;">访问 HTX</a>
                            <a href="index.html" class="btn-proxy">获取欧洲/日韩节点</a>
                        </div>
                    </div>

                    <!-- CoinGlass -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #f7a600;"><i class='bx bx-bar-chart-square'></i></div>
                            <div class="crypto-title">
                                <h3>CoinGlass</h3>
                                <span>合约爆仓与多空数据神器</span>
                            </div>
                        </div>
                        <p class="crypto-desc">想知道今天有多少人爆仓了？资金费率是多少？庄家挂的清算热力图在哪？做合约必看的顶级数据看板。</p>
                        <div class="env-req medium">
                            网络要求：<span>实时数据刷新能力</span><br>
                            合约市场瞬息万变，爆仓数据和热力图需要占用一定的带宽和稳定的长连接。卡顿就意味着你掌握的信息比庄家慢半拍。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.coinglass.com/" target="_blank" class="btn-visit" style="background: #f7a600;">访问 CoinGlass</a>
                            <a href="index.html" class="btn-proxy">获取低延迟专线</a>
                        </div>
                    </div>

                    <!-- PancakeSwap -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #1fc7d4;"><i class='bx bx-dish'></i></div>
                            <div class="crypto-title">
                                <h3>PancakeSwap (薄饼)</h3>
                                <span>BSC 币安链最大的 DEX</span>
                            </div>
                        </div>
                        <p class="crypto-desc">币安智能链上的 Uniswap。Gas 费极低，是冲各种动物币、MEME 币和 GameFi 打金结算的超级主战场。</p>
                        <div class="env-req medium">
                            网络要求：<span>防重放与节点污染</span><br>
                            由于经常连接各种第三方智能合约，必须保证本地网络环境干净。使用受污染的免费代理可能会被拦截或遭遇到钓鱼界面的重定向。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://pancakeswap.finance/" target="_blank" class="btn-visit" style="background: #1fc7d4; color: #000;">访问 薄饼</a>
                            <a href="index.html" class="btn-proxy">获取私密安全节点</a>
                        </div>
                    </div>

                    <!-- CoinGecko -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #8cc63f;"><i class='bx bx-ghost'></i></div>
                            <div class="crypto-title">
                                <h3>CoinGecko (壁虎)</h3>
                                <span>良心加密货币数据追踪</span>
                            </div>
                        </div>
                        <p class="crypto-desc">与 CMC 齐名但更加客观中立的数据平台。收录小币种的速度极快，许多玩家用它来领取糖果（Candy）和积分。</p>
                        <div class="env-req medium">
                            网络要求：<span>稳定刷积分/签到</span><br>
                            每天领取免费积分（钻石）需要长期稳定的代理网络，IP 乱跳可能会被判定为工作室脚本批量刷号而导致封禁。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.coingecko.com/" target="_blank" class="btn-visit" style="background: #8cc63f; color: #000;">访问 CoinGecko</a>
                            <a href="index.html" class="btn-proxy">获取固定优质节点</a>
                        </div>
                    </div>

                    <!-- Aave -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #b6509e;"><i class='bx bx-building-house'></i></div>
                            <div class="crypto-title">
                                <h3>Aave</h3>
                                <span>DeFi 链上借贷霸主</span>
                            </div>
                        </div>
                        <p class="crypto-desc">Web3 世界的央行。抵押你的比特币或以太坊借出稳定币（U），或者存钱吃高额年化利息，巨鲸最爱的去中心化金融协议。</p>
                        <div class="env-req strict">
                            网络要求：<span>美国 IP 严格屏蔽</span><br>
                            为了规避 SEC 监管，Aave 前端已经全面屏蔽美国 IP。如果你挂着美国节点，会直接显示不提供服务。必须使用非美节点。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://aave.com/" target="_blank" class="btn-visit" style="background: #b6509e;">访问 Aave</a>
                            <a href="index.html" class="btn-proxy">获取非美合规节点</a>
                        </div>
                    </div>

                    <!-- KuCoin -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #24af8c;"><i class='bx bx-store'></i></div>
                            <div class="crypto-title">
                                <h3>KuCoin (库币)</h3>
                                <span>小语种与山寨币淘宝</span>
                            </div>
                        </div>
                        <p class="crypto-desc">号称“人民的交易所”，极度下沉到全球各种小国家，拥有极多早期未爆发的潜力币种，欧美散户极多。</p>
                        <div class="env-req strict">
                            网络要求：<span>多国 KYC 与 IP 一致性</span><br>
                            库币遭遇过多国监管警告，目前风控收紧。建议你使用的代理 IP 属地，与你认证（KYC）的国家保持尽量一致，避免提现卡单。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.kucoin.com/" target="_blank" class="btn-visit" style="background: #24af8c;">访问 KuCoin</a>
                            <a href="index.html" class="btn-proxy">获取定制国家节点</a>
                        </div>
                    </div>

                    <!-- TokenPocket -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #2980b9;"><i class='bx bx-wallet-alt'></i></div>
                            <div class="crypto-title">
                                <h3>TokenPocket (TP钱包)</h3>
                                <span>华人圈最火的移动端钱包</span>
                            </div>
                        </div>
                        <p class="crypto-desc">完美支持波场（TRON）、币安链（BSC）等所有热门公链，极其适合手机端操作转账和玩链游。</p>
                        <div class="env-req medium">
                            网络要求：<span>手机端无缝翻墙</span><br>
                            手机钱包经常在后台被杀进程，需要搭配支持手机端（如 Shadowrocket, Clash）完美分流的机场服务，保证 DApp 随时秒开。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://www.tokenpocket.pro/" target="_blank" class="btn-visit" style="background: #2980b9;">访问 TP 钱包</a>
                            <a href="index.html" class="btn-proxy">获取手机端机场</a>
                        </div>
                    </div>

                    <!-- Dune Analytics -->
                    <div class="crypto-card">
                        <div class="crypto-header">
                            <div class="crypto-icon" style="color: #000; background: #fff;"><i class='bx bx-data'></i></div>
                            <div class="crypto-title">
                                <h3>Dune Analytics</h3>
                                <span>链上高阶数据分析平台</span>
                            </div>
                        </div>
                        <p class="crypto-desc">币圈数据科学家的游乐场。任何人可以通过写 SQL 查询链上的一切数据：项目真实日活、庄家筹码分布等硬核情报。</p>
                        <div class="env-req medium">
                            网络要求：<span>稳定加载巨型数据图表</span><br>
                            跑一次 SQL 查询可能会返回极其庞大的可视化图表，节点稍微拉垮一点就会遭遇 Gateway Timeout，极度考验网络质量。
                        </div>
                        <div class="crypto-actions">
                            <a href="https://dune.com/" target="_blank" class="btn-visit" style="background: #333;">访问 Dune</a>
                            <a href="index.html" class="btn-proxy">获取高配置专线</a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'crypto.html'), cryptoHtml);
console.log('Created crypto.html');

// Inject the nav link into all main files
const filesToUpdate = ['index.html', 'tutorials.html', 'apple_id.html', 'free_nodes.html', 'ai_tools.html', 'social_media.html', 'ecommerce.html'];
const newLinkHTML = `                <a href="crypto.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-bitcoin' style="font-size: 20px;"></i> 数字货币导航
                </a>`;

filesToUpdate.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        if (!content.includes('crypto.html')) {
            // Find the ecommerce.html link and inject after it
            const targetStr = `                <a href="ecommerce.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: var(--text-muted); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-store' style="font-size: 20px;"></i> 跨境电商导航
                </a>`;
            
            const targetStrActive = `                <a href="ecommerce.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: #fff; background: rgba(255,255,255,0.05); text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">
                    <i class='bx bx-store' style="font-size: 20px; color: #f59e0b;"></i> 跨境电商导航
                </a>`;

            if (content.includes(targetStr)) {
                content = content.replace(targetStr, targetStr + '\n' + newLinkHTML);
                fs.writeFileSync(fullPath, content);
                console.log('Updated', file);
            } else if (content.includes(targetStrActive)) {
                content = content.replace(targetStrActive, targetStrActive + '\n' + newLinkHTML);
                fs.writeFileSync(fullPath, content);
                console.log('Updated', file);
            } else {
                console.log('Could not find injection target in', file);
            }
        }
    }
});
