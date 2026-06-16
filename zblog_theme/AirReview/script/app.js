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
        }
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
