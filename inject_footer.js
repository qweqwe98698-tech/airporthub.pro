const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const allFiles = fs.readdirSync(dirPath);
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));

const footerHtml = `
            <!-- Site Footer -->
            <footer class="site-footer" style="margin-top: 50px; padding: 40px 20px; border-top: 1px solid var(--border); background: var(--surface); text-align: center;">
                <div style="max-width: 1000px; margin: 0 auto;">
                    <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px; line-height: 1.6;">
                        <strong>关于 AIRPORT REVIEWS</strong><br>
                        我们致力于提供最客观、中立的机场评测与科学上网技术指南。所有数据基于真实 7x24 小时节点网络监控与业务压测，为您过滤跑路机场，挑选高质量原生 IP 与网络专线。
                    </p>
                    
                    <div style="margin-bottom: 20px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                        <a href="sitemap.xml" target="_blank" style="color: #a855f7; text-decoration: none; font-size: 14px; transition: 0.2s;"><i class='bx bx-map-alt'></i> 网站地图 (Sitemap)</a>
                        <a href="about.html" style="color: #a855f7; text-decoration: none; font-size: 14px; transition: 0.2s;"><i class='bx bx-shield-quarter'></i> 隐私政策</a>
                        <a href="about.html" style="color: #a855f7; text-decoration: none; font-size: 14px; transition: 0.2s;"><i class='bx bx-error-circle'></i> 免责声明</a>
                    </div>

                    <div style="margin-bottom: 25px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.1);">
                        <strong style="color: #fff; font-size: 14px; margin-bottom: 10px; display: block;"><i class='bx bx-link'></i> 友情链接</strong>
                        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                            <!-- rel="noopener" prevents tab nabbing but does NOT add nofollow, so link juice/weight is shared with these sites -->
                            <a href="https://clashwiki.cc/" target="_blank" rel="noopener" style="color: #3b82f6; text-decoration: none; font-size: 14px; transition: 0.2s; font-weight: 500;">机场推荐科学上网教程</a>
                            <a href="https://jichangxuanze.com/" target="_blank" rel="noopener" style="color: #3b82f6; text-decoration: none; font-size: 14px; transition: 0.2s; font-weight: 500;">高性价比机场推荐指南</a>
                        </div>
                    </div>
                    
                    <p style="color: #6b7280; font-size: 13px; margin: 0;">
                        &copy; 2026 AIRPORT REVIEWS. All Rights Reserved. 本站内容仅供网络架构研究与学习，请严格遵守所在地法律法规。
                    </p>
                </div>
            </footer>
        </main>`;

let updatedCount = 0;

htmlFiles.forEach(file => {
    const fullPath = path.join(dirPath, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Skip if already injected
    if (content.includes('<!-- Site Footer -->')) {
        // If we want to update the footer, we can replace it. But for now just inject if not present.
        return;
    }

    if (file === 'about.html') {
        // Remove the small footer I added previously in about.html so it doesn't duplicate
        const aboutSmallFooter = '<div style="text-align: center; margin-top: 50px; font-size: 13px; color: var(--text-muted);">\n                    <a href="sitemap.xml" target="_blank" style="color: #3b82f6; text-decoration: none;">查看网站地图 (Sitemap)</a> | \n                    <span>© 2026 AIRPORT REVIEWS All Rights Reserved.</span>\n                </div>';
        content = content.replace(aboutSmallFooter, '');
    }

    content = content.replace(/<\/main>\s*<\/div>\s*<script/g, footerHtml + '\n    </div>\n    <script');
    content = content.replace(/<\/main>\s*<\/div>\s*<\/body>/g, footerHtml + '\n    </div>\n</body>');

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('✅ 注入 Footer -> ' + file);
    updatedCount++;
});

console.log(`\n🎉 完成！共为 ${updatedCount} 个页面添加了全局 Footer 和友情链接。`);
