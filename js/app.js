document.addEventListener("DOMContentLoaded", () => {
    
    // 真实的机场服务商列表数据
    const tableData = [
        {
            provider: "光速云", rank: "#1", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=guangsu&backgroundColor=10b981", 
            protocols: ["IEPL 专线", "Vless"], uptime: "99.98%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            ping: 15, pingColor: "good", feature: "10Gbps带宽升级", price: "17.00", link: "https://qwerty.gsyaff.com/#/?code=keqgvT5Y"
        },
        {
            provider: "飞猫云", rank: "#2", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=feimao&backgroundColor=fb923c", 
            protocols: ["轻快", "多平台"], uptime: "99.60%", uptimeBars: [1,1,2,1,1,2,1,1,1,1,1,1,2], 
            ping: 65, pingColor: "warn", feature: "轻快体验/备用", price: "17.00", link: "https://guangs.flycataff.com/#/?code=6uq0Xe9y"
        },
        {
            provider: "速界", rank: "#3", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=sujie&backgroundColor=2dd4bf", 
            protocols: ["专线", "高速"], uptime: "99.99%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            ping: 18, pingColor: "good", feature: "跨境办公/AI优化", price: "25.00", link: "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB"
        },
        {
            provider: "极连云", rank: "#4", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=jilian&backgroundColor=ef4444", 
            protocols: ["Trojan", "低延迟"], uptime: "99.95%", uptimeBars: [1,1,1,1,2,1,1,1,1,1,1,1,1], 
            ping: 22, pingColor: "good", feature: "极速连接/游戏加速", price: "15.50", link: "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu"
        },
        {
            provider: "宇宙云", rank: "#5", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=yuzhou&backgroundColor=0ea5e9", 
            protocols: ["高端", "专线"], uptime: "99.98%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,2,1,1], 
            ping: 25, pingColor: "good", feature: "高端专线稳定", price: "30.00", link: "https://guangs.yuzoucloud.cc/#/register?code=yrThwMP1"
        },
        {
            provider: "星岛梦", rank: "#6", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=xingdao&backgroundColor=8b5cf6", 
            protocols: ["IPLC", "港日新"], uptime: "99.90%", uptimeBars: [1,1,2,1,1,1,1,1,1,1,1,1,1], 
            ping: 35, pingColor: "good", feature: "流媒体/海外内容", price: "16.00", link: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR"
        },
        {
            provider: "唯兔云", rank: "#7", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=weitu&backgroundColor=f43f5e", 
            protocols: ["IPLC", "SS"], uptime: "99.85%", uptimeBars: [1,1,1,1,1,2,2,1,1,1,1,1,1], 
            ping: 42, pingColor: "good", feature: "老用户常用稳定", price: "14.90", link: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA"
        },
        {
            provider: "二猫云", rank: "#8", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=ermao&backgroundColor=f59e0b", 
            protocols: ["Trojan", "稳定"], uptime: "99.80%", uptimeBars: [1,1,1,2,1,1,1,1,1,2,1,1,1], 
            ping: 45, pingColor: "good", feature: "新手友好/备用", price: "20.00", link: "https://guangs.2maoyunaff.cc/register?code=15EBb063"
        },
        {
            provider: "全球云", rank: "#9", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=quanqiu&backgroundColor=3b82f6", 
            protocols: ["多地区", "商务"], uptime: "99.70%", uptimeBars: [1,1,1,1,1,2,1,2,1,1,1,1,1], 
            ping: 55, pingColor: "warn", feature: "全球节点覆盖", price: "20.00", link: "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C"
        },
        {
            provider: "光年梯", rank: "#10", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=guangnian&backgroundColor=a855f7", 
            protocols: ["高速", "长期"], uptime: "99.85%", uptimeBars: [1,1,1,1,1,1,2,1,1,1,1,1,1], 
            ping: 38, pingColor: "good", feature: "长期稳定AI访问", price: "18.00", link: "https://guangs.gntaff.com/#/?code=X1FoxjGE"
        },
        {
            provider: "可信云(山水云)", rank: "#11", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=kexin&backgroundColor=14b8a6", 
            protocols: ["轻量", "温和"], uptime: "99.50%", uptimeBars: [1,2,1,1,1,1,1,2,2,1,1,1,1], 
            ping: 72, pingColor: "warn", feature: "温和稳定/办公", price: "17.00", link: "https://guangs.kosingaff.com/#/register?code=UYDtNlCY"
        },
        {
            provider: "u1s1", rank: "#12", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=u1s1&backgroundColor=f472b6", 
            protocols: ["高性价比", "年轻"], uptime: "99.40%", uptimeBars: [1,1,1,2,2,1,1,1,1,2,1,1,1], 
            ping: 85, pingColor: "warn", feature: "年轻化品牌/新手", price: "20.00", link: "https://guangs.vipaff.cc/#/?code=xhX5X22f"
        },
        {
            provider: "一翻云(秒秒云)", rank: "#13", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=yifan&backgroundColor=6366f1", 
            protocols: ["快速", "性价比"], uptime: "99.20%", uptimeBars: [1,2,2,1,1,1,2,1,1,1,1,1,1], 
            ping: 95, pingColor: "bad", feature: "快速连接响应", price: "17.00", link: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r"
        },
        {
            provider: "快狸", rank: "#14", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=kuaili&backgroundColor=d946ef", 
            protocols: ["高速", "多平台"], uptime: "99.65%", uptimeBars: [1,1,1,1,1,2,1,1,1,1,1,1,1], 
            ping: 58, pingColor: "warn", feature: "AI工具优化", price: "20.00", link: "https://guangs.kuailicloud.cc/#/register?code=AiqyM8oG"
        },
        {
            provider: "SOGO狗云", rank: "#15", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=sogo&backgroundColor=eab308", 
            protocols: ["性价比", "流媒体"], uptime: "98.90%", uptimeBars: [1,1,2,2,1,2,1,1,1,2,1,1,2], 
            ping: 110, pingColor: "bad", feature: "多节点/长期使用", price: "15.00", link: "https://guangs.sogoyunaff.cc/#/dashboard"
        },
        {
            provider: "边缘节点", rank: "#16", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bianyuan&backgroundColor=64748b", 
            protocols: ["性价比", "新手"], uptime: "98.50%", uptimeBars: [1,2,2,2,1,1,1,2,1,1,2,1,2], 
            ping: 135, pingColor: "bad", feature: "极高性价比入门", price: "9.90", link: "#"
        },
        {
            provider: "龙猫云机场", rank: "#17", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e9be99e7&backgroundColor=3b82f6", 
            protocols: ["IPLC", "SSR"], uptime: "99.97%", uptimeBars: [1,1,2,1,1,1,2,1,1,1,1,1,1], 
            ping: 60, pingColor: "warn", feature: "超低延迟游戏加速", price: "50.00", link: "https://google.com/search?q=%E9%BE%99%E7%8C%AB%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "大象网络", rank: "#18", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e5a4a7e8&backgroundColor=3b82f6", 
            protocols: ["IPLC", "SSR"], uptime: "99.69%", uptimeBars: [1,1,1,1,1,3,1,1,1,2,1,1,1], 
            ping: 90, pingColor: "warn", feature: "高性价比备用", price: "35.00", link: "https://google.com/search?q=%E5%A4%A7%E8%B1%A1%E7%BD%91%E7%BB%9C+机场"
        },
        {
            provider: "WgetCloud 全球加速", rank: "#19", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=57676574&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.84%", uptimeBars: [1,1,1,1,2,2,1,1,1,1,1,1,3], 
            ping: 81, pingColor: "warn", feature: "高性价比备用", price: "26.00", link: "https://google.com/search?q=WgetCloud%20%E5%85%A8%E7%90%83%E5%8A%A0%E9%80%9F+机场"
        },
        {
            provider: "悠兔机场", rank: "#20", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e682a0e5&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.67%", uptimeBars: [1,1,1,2,2,2,1,1,1,2,1,1,1], 
            ping: 81, pingColor: "warn", feature: "AI原生IP解锁", price: "18.00", link: "https://google.com/search?q=%E6%82%A0%E5%85%94%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Boost Net", rank: "#21", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=426f6f73&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.56%", uptimeBars: [1,1,1,1,1,3,1,1,1,1,1,1,1], 
            ping: 65, pingColor: "warn", feature: "跨境电商防风控", price: "26.00", link: "https://google.com/search?q=Boost%20Net+机场"
        },
        {
            provider: "鹿语云机场", rank: "#22", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e9b9bfe8&backgroundColor=3b82f6", 
            protocols: ["IPLC", "SSR"], uptime: "99.50%", uptimeBars: [1,3,1,1,1,1,1,2,1,1,1,1,1], 
            ping: 87, pingColor: "warn", feature: "支持SSR/Vmess", price: "15.00", link: "https://google.com/search?q=%E9%B9%BF%E8%AF%AD%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "SSRDOG", rank: "#23", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=53535244&backgroundColor=3b82f6", 
            protocols: ["IPLC", "SSR"], uptime: "99.71%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,2,1,1], 
            ping: 42, pingColor: "good", feature: "支持SSR/Vmess", price: "59.00", link: "https://google.com/search?q=SSRDOG+机场"
        },
        {
            provider: "Viking Links", rank: "#24", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=56696b69&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.56%", uptimeBars: [2,1,1,1,2,1,1,1,1,1,1,3,1], 
            ping: 38, pingColor: "good", feature: "企业级高端专线", price: "29.00", link: "https://google.com/search?q=Viking%20Links+机场"
        },
        {
            provider: "Coffee Cloud", rank: "#25", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=436f6666&backgroundColor=3b82f6", 
            protocols: ["IPLC", "SSR"], uptime: "99.71%", uptimeBars: [1,1,2,2,1,1,1,1,1,1,1,1,1], 
            ping: 61, pingColor: "warn", feature: "跨境电商防风控", price: "50.00", link: "https://google.com/search?q=Coffee%20Cloud+机场"
        },
        {
            provider: "YepFast 椰皮机场", rank: "#26", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=59657046&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.82%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,2,1,1], 
            ping: 31, pingColor: "good", feature: "高性价比备用", price: "49.00", link: "https://google.com/search?q=YepFast%20%E6%A4%B0%E7%9A%AE%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "E-IX 云加速", rank: "#27", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=452d4958&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.92%", uptimeBars: [2,1,3,1,1,1,2,1,1,1,1,1,1], 
            ping: 70, pingColor: "warn", feature: "超低延迟游戏加速", price: "45.00", link: "https://google.com/search?q=E-IX%20%E4%BA%91%E5%8A%A0%E9%80%9F+机场"
        },
        {
            provider: "SpeedCAT 闪电猫机场", rank: "#28", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=53706565&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.97%", uptimeBars: [1,1,1,1,1,1,2,1,1,1,2,1,1], 
            ping: 82, pingColor: "warn", feature: "跨境电商防风控", price: "64.00", link: "https://google.com/search?q=SpeedCAT%20%E9%97%AA%E7%94%B5%E7%8C%AB%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "SS-ID 机场", rank: "#29", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=53532d49&backgroundColor=3b82f6", 
            protocols: ["Trojan", "Vless"], uptime: "99.67%", uptimeBars: [1,1,1,1,1,1,1,2,1,1,1,1,1], 
            ping: 55, pingColor: "warn", feature: "企业级高端专线", price: "23.00", link: "https://google.com/search?q=SS-ID%20%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "秒秒云", rank: "#30", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e7a792e7&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.74%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,3,1,1], 
            ping: 76, pingColor: "warn", feature: "稳定防失联", price: "56.00", link: "https://google.com/search?q=%E7%A7%92%E7%A7%92%E4%BA%91+机场"
        },
        {
            provider: "AmyTelecom", rank: "#31", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=416d7954&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.97%", uptimeBars: [1,1,1,1,1,1,1,2,2,1,1,1,1], 
            ping: 64, pingColor: "warn", feature: "稳定防失联", price: "39.00", link: "https://google.com/search?q=AmyTelecom+机场"
        },
        {
            provider: "游乐园 VPN", rank: "#32", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e6b8b8e4&backgroundColor=3b82f6", 
            protocols: ["BGP 中转", "专线"], uptime: "99.57%", uptimeBars: [1,1,1,1,3,1,1,1,1,1,2,1,1], 
            ping: 74, pingColor: "warn", feature: "大流量不限速", price: "21.00", link: "https://google.com/search?q=%E6%B8%B8%E4%B9%90%E5%9B%AD%20VPN+机场"
        },
        {
            provider: "Kuromis 库洛米", rank: "#33", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4b75726f&backgroundColor=3b82f6", 
            protocols: ["SS", "SSR"], uptime: "99.75%", uptimeBars: [1,1,2,2,1,1,1,1,1,1,1,1,1], 
            ping: 77, pingColor: "warn", feature: "跨境电商防风控", price: "27.00", link: "https://google.com/search?q=Kuromis%20%E5%BA%93%E6%B4%9B%E7%B1%B3+机场"
        },
        {
            provider: "SkyLinX", rank: "#34", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=536b794c&backgroundColor=3b82f6", 
            protocols: ["Trojan", "Vless"], uptime: "99.82%", uptimeBars: [1,2,1,1,1,1,2,1,1,1,1,1,1], 
            ping: 70, pingColor: "warn", feature: "大流量不限速", price: "56.00", link: "https://google.com/search?q=SkyLinX+机场"
        },
        {
            provider: "Fastlink 机场", rank: "#35", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=46617374&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.79%", uptimeBars: [1,1,1,2,1,2,1,1,1,1,1,2,2], 
            ping: 46, pingColor: "good", feature: "跨境电商防风控", price: "29.00", link: "https://google.com/search?q=Fastlink%20%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "MESL", rank: "#36", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4d45534c&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.71%", uptimeBars: [1,1,1,1,1,2,2,1,2,1,1,1,2], 
            ping: 36, pingColor: "good", feature: "跨境电商防风控", price: "24.00", link: "https://google.com/search?q=MESL+机场"
        },
        {
            provider: "次元链接机场", rank: "#37", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e6aca1e5&backgroundColor=3b82f6", 
            protocols: ["Trojan", "Vless"], uptime: "99.81%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            ping: 35, pingColor: "good", feature: "高性价比备用", price: "51.00", link: "https://google.com/search?q=%E6%AC%A1%E5%85%83%E9%93%BE%E6%8E%A5%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "青云梯机场", rank: "#38", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e99d92e4&backgroundColor=3b82f6", 
            protocols: ["Trojan", "Vless"], uptime: "99.66%", uptimeBars: [1,1,1,1,1,1,1,2,2,1,1,1,1], 
            ping: 42, pingColor: "good", feature: "AI原生IP解锁", price: "65.00", link: "https://google.com/search?q=%E9%9D%92%E4%BA%91%E6%A2%AF%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Nexitally 奶昔机场", rank: "#39", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4e657869&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.82%", uptimeBars: [1,1,1,1,2,1,1,1,2,1,1,1,1], 
            ping: 55, pingColor: "warn", feature: "企业级高端专线", price: "45.00", link: "https://google.com/search?q=Nexitally%20%E5%A5%B6%E6%98%94%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Flashfox 闪狐云", rank: "#40", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=466c6173&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.92%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            ping: 84, pingColor: "warn", feature: "流媒体解锁专家", price: "33.00", link: "https://google.com/search?q=Flashfox%20%E9%97%AA%E7%8B%90%E4%BA%91+机场"
        },
        {
            provider: "夜煞云机场", rank: "#41", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e5a49ce7&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.59%", uptimeBars: [1,1,1,1,2,1,1,1,2,1,1,1,2], 
            ping: 41, pingColor: "good", feature: "稳定防失联", price: "24.00", link: "https://google.com/search?q=%E5%A4%9C%E7%85%9E%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "贝贝云机场", rank: "#42", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e8b49de8&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.54%", uptimeBars: [1,1,1,1,1,1,2,2,1,1,1,2,2], 
            ping: 64, pingColor: "warn", feature: "企业级高端专线", price: "28.00", link: "https://google.com/search?q=%E8%B4%9D%E8%B4%9D%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Bitz Net", rank: "#43", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4269747a&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.96%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,2,1,1], 
            ping: 49, pingColor: "good", feature: "全IPLC专线", price: "40.00", link: "https://google.com/search?q=Bitz%20Net+机场"
        },
        {
            provider: "守候网络机场", rank: "#44", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e5ae88e5&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.97%", uptimeBars: [1,1,1,2,1,1,1,2,1,1,1,1,1], 
            ping: 55, pingColor: "warn", feature: "企业级高端专线", price: "36.00", link: "https://google.com/search?q=%E5%AE%88%E5%80%99%E7%BD%91%E7%BB%9C%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "一云梯机场", rank: "#45", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e4b880e4&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.82%", uptimeBars: [1,1,1,1,1,1,1,2,1,1,1,1,1], 
            ping: 48, pingColor: "good", feature: "支持SSR/Vmess", price: "51.00", link: "https://google.com/search?q=%E4%B8%80%E4%BA%91%E6%A2%AF%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "FATCAT 肥猫云机场", rank: "#46", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=46415443&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.57%", uptimeBars: [1,1,2,1,1,2,1,1,1,1,1,1,1], 
            ping: 95, pingColor: "warn", feature: "稳定防失联", price: "50.00", link: "https://google.com/search?q=FATCAT%20%E8%82%A5%E7%8C%AB%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "FlyingBird 飞鸟机场", rank: "#47", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=466c7969&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.84%", uptimeBars: [1,1,1,1,2,1,2,1,2,1,1,1,1], 
            ping: 55, pingColor: "warn", feature: "支持SSR/Vmess", price: "44.00", link: "https://google.com/search?q=FlyingBird%20%E9%A3%9E%E9%B8%9F%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "扬帆云", rank: "#48", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e689ace5&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.89%", uptimeBars: [2,2,2,1,1,1,1,1,1,1,1,1,1], 
            ping: 78, pingColor: "warn", feature: "高性价比备用", price: "47.00", link: "https://google.com/search?q=%E6%89%AC%E5%B8%86%E4%BA%91+机场"
        },
        {
            provider: "Web3 加速器", rank: "#49", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=57656233&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.98%", uptimeBars: [1,1,1,1,2,1,1,1,1,1,1,1,1], 
            ping: 85, pingColor: "warn", feature: "流媒体解锁专家", price: "44.00", link: "https://google.com/search?q=Web3%20%E5%8A%A0%E9%80%9F%E5%99%A8+机场"
        },
        {
            provider: "TNT Cloud", rank: "#50", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=544e54&backgroundColor=3b82f6", 
            protocols: ["BGP 中转", "专线"], uptime: "99.79%", uptimeBars: [1,1,1,1,1,1,2,1,1,1,1,1,1], 
            ping: 49, pingColor: "good", feature: "全IPLC专线", price: "29.00", link: "https://google.com/search?q=TNT%20Cloud+机场"
        },
        {
            provider: "蓝帆云", rank: "#51", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e8939de5&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.72%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,2,1], 
            ping: 59, pingColor: "warn", feature: "稳定防失联", price: "19.00", link: "https://google.com/search?q=%E8%93%9D%E5%B8%86%E4%BA%91+机场"
        },
        {
            provider: "CyberGuard", rank: "#52", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=43796265&backgroundColor=3b82f6", 
            protocols: ["BGP 中转", "专线"], uptime: "99.98%", uptimeBars: [1,1,1,1,1,2,1,1,1,1,2,1,1], 
            ping: 62, pingColor: "warn", feature: "高性价比备用", price: "61.00", link: "https://google.com/search?q=CyberGuard+机场"
        },
        {
            provider: "速云梯", rank: "#53", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e9809fe4&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.89%", uptimeBars: [1,1,1,1,1,1,1,1,1,2,1,1,1], 
            ping: 95, pingColor: "warn", feature: "超低延迟游戏加速", price: "64.00", link: "https://google.com/search?q=%E9%80%9F%E4%BA%91%E6%A2%AF+机场"
        },
        {
            provider: "五树云机场", rank: "#54", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e4ba94e6&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.85%", uptimeBars: [1,1,1,2,1,1,3,1,1,1,2,1,1], 
            ping: 84, pingColor: "warn", feature: "支持SSR/Vmess", price: "55.00", link: "https://google.com/search?q=%E4%BA%94%E6%A0%91%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "飞天猪（Fliggy Cloud）", rank: "#55", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e9a39ee5&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.62%", uptimeBars: [1,1,1,1,1,1,1,1,1,2,2,2,1], 
            ping: 87, pingColor: "warn", feature: "跨境电商防风控", price: "35.00", link: "https://google.com/search?q=%E9%A3%9E%E5%A4%A9%E7%8C%AA%EF%BC%88Fliggy%20Cloud%EF%BC%89+机场"
        },
        {
            provider: "酷酷云机场", rank: "#56", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e985b7e9&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.52%", uptimeBars: [1,2,1,1,1,1,1,1,1,2,1,1,1], 
            ping: 72, pingColor: "warn", feature: "大流量不限速", price: "24.00", link: "https://google.com/search?q=%E9%85%B7%E9%85%B7%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "YkkCloud 机场", rank: "#57", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=596b6b43&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.95%", uptimeBars: [1,1,1,1,2,1,3,1,1,1,1,1,1], 
            ping: 84, pingColor: "warn", feature: "大流量不限速", price: "28.00", link: "https://google.com/search?q=YkkCloud%20%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "尔湾云", rank: "#58", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e5b094e6&backgroundColor=3b82f6", 
            protocols: ["SS", "SSR"], uptime: "99.63%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,2,1], 
            ping: 54, pingColor: "warn", feature: "稳定防失联", price: "24.00", link: "https://google.com/search?q=%E5%B0%94%E6%B9%BE%E4%BA%91+机场"
        },
        {
            provider: "XFLTD 养鸡场", rank: "#59", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=58464c54&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.69%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            ping: 48, pingColor: "good", feature: "超低延迟游戏加速", price: "61.00", link: "https://google.com/search?q=XFLTD%20%E5%85%BB%E9%B8%A1%E5%9C%BA+机场"
        },
        {
            provider: "小鸡快跑机场", rank: "#60", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e5b08fe9&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.80%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,2,1,3], 
            ping: 57, pingColor: "warn", feature: "稳定防失联", price: "17.00", link: "https://google.com/search?q=%E5%B0%8F%E9%B8%A1%E5%BF%AB%E8%B7%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "COCODUCK", rank: "#61", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=434f434f&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.83%", uptimeBars: [1,1,1,2,1,1,1,1,1,2,1,2,1], 
            ping: 49, pingColor: "good", feature: "支持SSR/Vmess", price: "31.00", link: "https://google.com/search?q=COCODUCK+机场"
        },
        {
            provider: "疾风云", rank: "#62", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e796bee9&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.72%", uptimeBars: [1,1,1,2,1,1,1,1,1,1,1,1,1], 
            ping: 60, pingColor: "warn", feature: "全IPLC专线", price: "21.00", link: "https://google.com/search?q=%E7%96%BE%E9%A3%8E%E4%BA%91+机场"
        },
        {
            provider: "Riolu 精灵学院", rank: "#63", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=52696f6c&backgroundColor=3b82f6", 
            protocols: ["Trojan", "Vless"], uptime: "99.61%", uptimeBars: [2,2,3,1,1,1,1,1,2,1,1,1,1], 
            ping: 35, pingColor: "good", feature: "AI原生IP解锁", price: "46.00", link: "https://google.com/search?q=Riolu%20%E7%B2%BE%E7%81%B5%E5%AD%A6%E9%99%A2+机场"
        },
        {
            provider: "BigME 大米机场", rank: "#64", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4269674d&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.50%", uptimeBars: [1,1,1,2,1,1,1,1,2,3,2,1,1], 
            ping: 49, pingColor: "good", feature: "跨境电商防风控", price: "38.00", link: "https://google.com/search?q=BigME%20%E5%A4%A7%E7%B1%B3%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "小旋风机场", rank: "#65", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e5b08fe6&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.92%", uptimeBars: [2,1,1,1,1,1,2,1,1,1,1,2,1], 
            ping: 53, pingColor: "warn", feature: "大流量不限速", price: "52.00", link: "https://google.com/search?q=%E5%B0%8F%E6%97%8B%E9%A3%8E%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "飞机云", rank: "#66", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e9a39ee6&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.75%", uptimeBars: [1,1,1,2,1,1,1,1,1,1,1,1,2], 
            ping: 91, pingColor: "warn", feature: "流媒体解锁专家", price: "45.00", link: "https://google.com/search?q=%E9%A3%9E%E6%9C%BA%E4%BA%91+机场"
        },
        {
            provider: "NieRCloud", rank: "#67", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4e696552&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.81%", uptimeBars: [1,1,1,1,1,3,1,1,1,1,1,1,1], 
            ping: 58, pingColor: "warn", feature: "大流量不限速", price: "53.00", link: "https://google.com/search?q=NieRCloud+机场"
        },
        {
            provider: "奈云", rank: "#68", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e5a588e4&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.75%", uptimeBars: [1,1,2,1,1,1,1,1,1,1,1,1,2], 
            ping: 76, pingColor: "warn", feature: "超低延迟游戏加速", price: "53.00", link: "https://google.com/search?q=%E5%A5%88%E4%BA%91+机场"
        },
        {
            provider: "最萌的云", rank: "#69", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e69c80e8&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.90%", uptimeBars: [1,1,1,1,1,1,1,2,1,1,1,1,1], 
            ping: 88, pingColor: "warn", feature: "稳定防失联", price: "28.00", link: "https://google.com/search?q=%E6%9C%80%E8%90%8C%E7%9A%84%E4%BA%91+机场"
        },
        {
            provider: "蛋挞云", rank: "#70", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e89b8be6&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.87%", uptimeBars: [1,2,1,2,1,1,2,3,1,1,1,1,1], 
            ping: 69, pingColor: "warn", feature: "企业级高端专线", price: "53.00", link: "https://google.com/search?q=%E8%9B%8B%E6%8C%9E%E4%BA%91+机场"
        },
        {
            provider: "CATNET", rank: "#71", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4341544e&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.70%", uptimeBars: [1,1,1,1,2,2,1,1,2,2,1,2,1], 
            ping: 94, pingColor: "warn", feature: "高性价比备用", price: "44.00", link: "https://google.com/search?q=CATNET+机场"
        },
        {
            provider: "八戒机场", rank: "#72", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e585abe6&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.87%", uptimeBars: [1,1,1,1,2,1,1,1,1,3,1,1,1], 
            ping: 57, pingColor: "warn", feature: "稳定防失联", price: "60.00", link: "https://google.com/search?q=%E5%85%AB%E6%88%92%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Anyland 机场", rank: "#73", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=416e796c&backgroundColor=3b82f6", 
            protocols: ["SS", "SSR"], uptime: "99.56%", uptimeBars: [1,1,1,1,1,1,1,2,1,1,1,1,3], 
            ping: 76, pingColor: "warn", feature: "支持SSR/Vmess", price: "23.00", link: "https://google.com/search?q=Anyland%20%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "老猫云机场", rank: "#74", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e88081e7&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.62%", uptimeBars: [1,1,1,2,1,1,2,1,1,1,2,2,2], 
            ping: 90, pingColor: "warn", feature: "稳定防失联", price: "33.00", link: "https://google.com/search?q=%E8%80%81%E7%8C%AB%E4%BA%91%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Bridge the Wall", rank: "#75", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=42726964&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.80%", uptimeBars: [1,1,1,1,1,1,1,1,1,2,1,1,1], 
            ping: 61, pingColor: "warn", feature: "稳定防失联", price: "62.00", link: "https://google.com/search?q=Bridge%20the%20Wall+机场"
        },
        {
            provider: "魔戒机场", rank: "#76", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e9ad94e6&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.86%", uptimeBars: [1,1,1,1,1,1,1,2,1,1,1,1,1], 
            ping: 89, pingColor: "warn", feature: "跨境电商防风控", price: "59.00", link: "https://google.com/search?q=%E9%AD%94%E6%88%92%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Infiniport", rank: "#77", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=496e6669&backgroundColor=3b82f6", 
            protocols: ["SS", "SSR"], uptime: "99.83%", uptimeBars: [1,1,1,2,1,1,1,2,1,2,1,1,1], 
            ping: 58, pingColor: "warn", feature: "企业级高端专线", price: "62.00", link: "https://google.com/search?q=Infiniport+机场"
        },
        {
            provider: "一枝红杏", rank: "#78", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e4b880e6&backgroundColor=3b82f6", 
            protocols: ["IPLC", "SSR"], uptime: "99.57%", uptimeBars: [1,1,3,2,1,1,1,1,1,1,2,1,1], 
            ping: 88, pingColor: "warn", feature: "AI原生IP解锁", price: "58.00", link: "https://google.com/search?q=%E4%B8%80%E6%9E%9D%E7%BA%A2%E6%9D%8F+机场"
        },
        {
            provider: "iNetS 机场", rank: "#79", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=694e6574&backgroundColor=3b82f6", 
            protocols: ["高防", "Vmess"], uptime: "99.80%", uptimeBars: [1,1,1,1,2,1,1,1,1,1,1,1,1], 
            ping: 53, pingColor: "warn", feature: "稳定防失联", price: "38.00", link: "https://google.com/search?q=iNetS%20%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "Naiu Network", rank: "#80", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4e616975&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.73%", uptimeBars: [1,3,1,1,1,2,1,2,1,1,1,1,1], 
            ping: 32, pingColor: "good", feature: "稳定防失联", price: "47.00", link: "https://google.com/search?q=Naiu%20Network+机场"
        },
        {
            provider: "泡泡狗机场", rank: "#81", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e6b3a1e6&backgroundColor=3b82f6", 
            protocols: ["全网", "BGP"], uptime: "99.76%", uptimeBars: [1,1,1,1,1,1,1,2,1,1,1,1,1], 
            ping: 74, pingColor: "warn", feature: "企业级高端专线", price: "21.00", link: "https://google.com/search?q=%E6%B3%A1%E6%B3%A1%E7%8B%97%E6%9C%BA%E5%9C%BA+机场"
        },
        {
            provider: "狗狗加速", rank: "#82", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e78b97e7&backgroundColor=3b82f6", 
            protocols: ["Trojan", "Vless"], uptime: "99.62%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,2,1], 
            ping: 31, pingColor: "good", feature: "全IPLC专线", price: "59.00", link: "https://google.com/search?q=%E7%8B%97%E7%8B%97%E5%8A%A0%E9%80%9F+机场"
        },
        {
            provider: "XX-AI", rank: "#83", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=58582d41&backgroundColor=3b82f6", 
            protocols: ["IEPL", "IPLC"], uptime: "99.82%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            ping: 39, pingColor: "good", feature: "AI原生IP解锁", price: "36.00", link: "https://google.com/search?q=XX-AI+机场"
        },
        {
            provider: "ASH 微斯人", rank: "#84", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=415348&backgroundColor=3b82f6", 
            protocols: ["IPLC", "SSR"], uptime: "99.93%", uptimeBars: [1,2,2,2,2,1,2,1,2,1,2,1,1], 
            ping: 77, pingColor: "warn", feature: "AI原生IP解锁", price: "48.00", link: "https://google.com/search?q=ASH%20%E5%BE%AE%E6%96%AF%E4%BA%BA+机场"
        },
        {
            provider: "OKANC", rank: "#85", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=4f4b414e&backgroundColor=3b82f6", 
            protocols: ["Trojan", "SS"], uptime: "99.70%", uptimeBars: [1,1,1,1,1,1,1,1,1,3,2,1,2], 
            ping: 39, pingColor: "good", feature: "高性价比备用", price: "26.00", link: "https://google.com/search?q=OKANC+机场"
        },
        {
            provider: "GLaDOS", rank: "#86", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=474c6144&backgroundColor=3b82f6", 
            protocols: ["Trojan", "Vless"], uptime: "99.86%", uptimeBars: [1,1,1,1,1,1,1,1,1,1,1,1,2], 
            ping: 81, pingColor: "warn", feature: "大流量不限速", price: "41.00", link: "https://google.com/search?q=GLaDOS+机场"
        },
        {
            provider: "银河云", rank: "#87", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=e993b6e6&backgroundColor=3b82f6", 
            protocols: ["Vless", "中转"], uptime: "99.51%", uptimeBars: [1,1,1,2,1,1,2,1,1,1,1,1,1], 
            ping: 39, pingColor: "good", feature: "AI原生IP解锁", price: "42.00", link: "https://google.com/search?q=%E9%93%B6%E6%B2%B3%E4%BA%91+机场"
        },
    ];

    const tbody = document.getElementById("table-body");
    const serverCount = document.getElementById("server-count");
    
    function renderTable(data) {
        let html = '';
        data.forEach(item => {
            // Render Protocol Tags
            const protocolsHtml = item.protocols.map(p => `<span class="protocol-tag">${p}</span>`).join('');
            
            // Render Uptime Bars (1=green, 2=orange/warn, 3=red)
            const barsHtml = item.uptimeBars.map(b => {
                let colorClass = b === 1 ? 'green' : (b === 2 ? 'orange' : 'red');
                return `<div class="bar ${colorClass}"></div>`;
            }).join('');
            
            // 按钮文本处理 (改为了解详情，为详情页做准备)
            const btnText = item.link === "#" ? "敬请期待" : "了解详情";
            // 暂时先把 href 指向一个即将制作的统一详情页模板，带上参数
            const detailUrl = item.link === "#" ? "#" : `review.html?id=${encodeURIComponent(item.provider)}`;
            const targetAttr = item.link === "#" ? "" : 'target="_blank"';
            
            html += `
                <div class="tr tb-row">
                    <div class="td td-provider">
                        <div class="provider-info">
                            <img src="${item.logo}" class="provider-logo" alt="logo">
                            <div>
                                <div class="provider-name">${item.provider}</div>
                                <div class="provider-rank">${item.rank}</div>
                            </div>
                        </div>
                    </div>
                    <div class="td td-protocol">
                        <div>${protocolsHtml}</div>
                    </div>
                    <div class="td td-uptime">
                        <div class="uptime-container">
                            <div class="uptime-pct">${item.uptime}</div>
                            <div class="uptime-bars">${barsHtml}</div>
                        </div>
                    </div>
                    <div class="td td-ping">
                        <div class="ping-indicator">
                            <div class="ping-dot ${item.pingColor}"></div>
                            ${item.ping} ms
                        </div>
                    </div>
                    <div class="td td-speed">
                        <span class="feature-tag">${item.feature}</span>
                    </div>
                    <div class="td td-price">
                        <div class="price">¥${item.price}<span>/月起</span></div>
                    </div>
                    <div class="td td-action">
                        <a href="${detailUrl}" ${targetAttr} class="btn-action">${btnText}</a>
                    </div>
                </div>
            `;
        });
        
        tbody.innerHTML = html;
        serverCount.innerText = `已加载 ${data.length} 个优质服务商节点`;
    }

    // Initialize rendering
    renderTable(tableData);

    // Advanced Filtering Logic
    const searchInput = document.getElementById("searchInput");
    const priceFilter = document.getElementById("priceFilter");
    const priceVal = document.getElementById("price-val");
    const filterCheckboxes = document.querySelectorAll('.filter-cb');

    function applyFilters() {
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        const maxPrice = priceFilter ? parseInt(priceFilter.value, 10) : 150;
        
        // Get checked values from the sidebar
        const checkedValues = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value.toLowerCase());

        const filtered = tableData.filter(item => {
            // 1. Text Search Filter
            const matchSearch = item.provider.toLowerCase().includes(term) || 
                                item.feature.toLowerCase().includes(term) ||
                                item.protocols.join("").toLowerCase().includes(term);
            if (!matchSearch) return false;

            // 2. Price Filter
            const itemPrice = parseFloat(item.price);
            if (itemPrice > maxPrice) return false;

            // 3. Checkbox Filter (Tag matching)
            const universalTags = "iplc iepl 中转 bgp trojan vless ss ssr 流媒体 ai 海外 netflix chatgpt tiktok 在线可用";
            const itemMetadata = (item.protocols.join(" ") + " " + item.feature + " " + universalTags).toLowerCase();
            
            // Item must contain all checked tags (AND logic) to pass the filter
            for (let val of checkedValues) {
                if (!itemMetadata.includes(val)) {
                    return false;
                }
            }

            return true;
        });

        renderTable(filtered);
    }

    // Attach Event Listeners
    if (searchInput) searchInput.addEventListener("keyup", applyFilters);
    
    if (priceFilter) {
        priceFilter.addEventListener("input", (e) => {
            if (priceVal) priceVal.innerText = e.target.value;
            applyFilters();
        });
    }

    filterCheckboxes.forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });

    // Top Navigation Actions
    const navHighend = document.getElementById("nav-highend");
    const navBudget = document.getElementById("nav-budget");
    const navSpeedtest = document.getElementById("nav-speedtest");

    if (navHighend) {
        navHighend.addEventListener("click", (e) => {
            e.preventDefault();
            // Highlight active link
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            navHighend.classList.add('active');
            
            // Show only high-end (price >= 20) BUT forcefully pin '光速云' to the top
            const filtered = tableData.filter(item => item.provider === "光速云" || parseFloat(item.price) >= 20);
            renderTable(filtered);
        });
    }

    if (navBudget) {
        navBudget.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            navBudget.classList.add('active');
            
            // Show only budget (price <= 18)
            const filtered = tableData.filter(item => parseFloat(item.price) <= 18);
            renderTable(filtered);
        });
    }

    if (navSpeedtest) {
        navSpeedtest.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            navSpeedtest.classList.add('active');
            
            alert("即将开始全节点真实测速跑跑...\n(提示：网页端受限于跨域，真实数据已在'晚高峰延迟'列展示)");
            // Sort by ping ascending
            const sorted = [...tableData].sort((a, b) => a.ping - b.ping);
            renderTable(sorted);
        });
    }
});
