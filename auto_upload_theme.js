const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log("🚀 启动 Z-Blog 主题自动部署机器人...");
    const browser = await puppeteer.launch({
        headless: false, // 保持开启，让你看到全自动部署过程
        defaultViewport: null,
        args: ['--start-maximized']
    });
    
    try {
        const page = await browser.newPage();
        
        console.log("🔗 访问 Z-Blog 登录页面...");
        await page.goto('https://jichangpingce.club/zb_system/cmd.php?act=login', { waitUntil: 'networkidle2' });
        
        console.log("⌨️ 自动输入账号和密码...");
        await page.type('#edtUserName', 'Yexiodi98K', { delay: 50 });
        await page.type('#edtPassWord', 'Yexiodi98KYexiodi98KYexiodi98K', { delay: 50 });
        await page.click('#btnPost, .button'); 
        
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("✅ 登录成功！准备上传主题...");

        // 跳转到应用中心或主题管理页面（Z-Blog 通常通过本地上传功能安装 .zba）
        // 尝试跳转到本地上传页面
        await page.goto('https://jichangpingce.club/zb_system/cmd.php?act=ThemeMng', { waitUntil: 'networkidle2' });
        
        console.log("📂 正在寻找本地上传按钮...");
        // 此处的选择器基于 Z-Blog 默认后台，如果不一样，机器人会提示
        const uploadInputSelector = 'input[type="file"][name="app"]'; 
        
        // 由于 Z-Blog 的本地上传可能在“应用中心”插件里，如果主题管理页面没有上传按钮，则跳转应用中心
        let hasUploadBtn = await page.$(uploadInputSelector);
        
        if (!hasUploadBtn) {
             console.log("🔄 切换到应用中心本地上传页面...");
             await page.goto('https://jichangpingce.club/zb_users/plugin/AppCentre/main.php?act=upload', { waitUntil: 'networkidle2' });
             hasUploadBtn = await page.$(uploadInputSelector);
        }

        if (hasUploadBtn) {
            const zbaPath = path.join(__dirname, 'AirReview.zba');
            console.log(`上传 ZBA 主题包: ${zbaPath}`);
            const inputUploadHandle = await page.$(uploadInputSelector);
            await inputUploadHandle.uploadFile(zbaPath);
            
            // 提交上传
            console.log("🚀 点击上传并安装...");
            await page.evaluate(() => {
                const submitBtn = document.querySelector('input[type="submit"]') || document.querySelector('button[type="submit"]');
                if (submitBtn) submitBtn.click();
            });
            
            await page.waitForNavigation({ waitUntil: 'networkidle2' });
            console.log("🎉 部署成功！去后台启用你的新主题吧！");
        } else {
            console.log("⚠️ 未找到本地上传入口，请手动在后台点击上传 'AirReview.zba' 文件。");
        }
        
    } catch (error) {
        console.error("❌ 自动部署过程中出错:", error);
    } finally {
        console.log("👋 10秒后将自动关闭浏览器...");
        await new Promise(r => setTimeout(r, 10000));
        await browser.close();
    }
})();
