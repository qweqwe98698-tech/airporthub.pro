const fs = require('fs');
const path = require('path');

const fileConfigs = {
    'crypto.html': {
        title: '🚀 币圈极速专线',
        color: '#10b981',
        desc: '拒绝掉线！抢先一步交易。',
        btnText: '获取超低延迟节点'
    },
    'ai_tools.html': {
        title: '🤖 AI 专属算力节点',
        color: '#8b5cf6',
        desc: '原生纯净 IP，完美解锁 ChatGPT/Claude。',
        btnText: '获取满血 AI 节点'
    },
    'ai_dev.html': {
        title: '🤖 AI 专属算力节点',
        color: '#8b5cf6',
        desc: '原生纯净 IP，完美解锁 ChatGPT/Claude。',
        btnText: '获取满血 AI 节点'
    },
    'social_media.html': {
        title: '🌍 独享海外原生 IP',
        color: '#0ea5e9',
        desc: '运营 TikTok/INS 必备，0封控防限流。',
        btnText: '立即抢购纯净节点'
    },
    'ecommerce.html': {
        title: '🛒 跨境电商专用网络',
        color: '#f59e0b',
        desc: '亚马逊/虾皮防关联，超高并发极速加载。',
        btnText: '获取电商专网'
    },
    'index.html': {
        title: '🔥 站长专属神仙机场',
        color: '#f43f5e',
        desc: '防跑路稳定首选，全网测速第一。',
        btnText: '立即抢购专属节点'
    },
    'tutorials.html': {
        title: '🔥 站长专属神仙机场',
        color: '#f43f5e',
        desc: '防跑路稳定首选，全网测速第一。',
        btnText: '立即抢购专属节点'
    },
    'apple_id.html': {
        title: '🔥 站长专属神仙机场',
        color: '#f43f5e',
        desc: '防跑路稳定首选，全网测速第一。',
        btnText: '立即抢购专属节点'
    },
    'free_nodes.html': {
        title: '🔥 站长专属神仙机场',
        color: '#f43f5e',
        desc: '防跑路稳定首选，全网测速第一。',
        btnText: '立即抢购专属节点'
    }
};

Object.keys(fileConfigs).forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const cfg = fileConfigs[file];
        
        const bannerHtml = '<div class="ad-banner" style="margin-top: auto; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-left: 15px; margin-right: 15px; margin-bottom: 20px; border: 1px solid var(--border);">\n' +
            '    <h4 style="color: ' + cfg.color + '; margin-bottom: 5px; font-size: 14px;">' + cfg.title + '</h4>\n' +
            '    <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 5px;">结账输入专属 8 折优惠码：<strong style="color: ' + cfg.color + '; user-select: all;">AMM</strong></p>\n' +
            '    <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 10px;">' + cfg.desc + '</p>\n' +
            '    <button onclick="window.location.href=\\\'index.html\\\'" style="width: 100%; padding: 8px; background: ' + cfg.color + '; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">' + cfg.btnText + '</button>\n' +
            '</div>\n</aside>';

        const adBannerRegex = /[ \t]*<div class="ad-banner"[\s\S]*?<\/div>\s*<\/aside>/;
        if (adBannerRegex.test(content)) {
            content = content.replace(adBannerRegex, bannerHtml.trim() + '\n');
        } else {
            content = content.replace(/<\/aside>/, bannerHtml);
        }
        
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Injected custom banner into ' + file);
    }
});
