const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'apple_id.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add secret-btn CSS
const cssToAdd = `
        .secret-btn {
            background: #3b82f6 !important;
            color: #fff !important;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 4px 12px !important;
            border-radius: 6px !important;
            font-size: 13px !important;
            transition: all 0.2s;
        }
        .secret-btn:hover {
            background: #2563eb !important;
            transform: translateY(-1px);
        }
`;
content = content.replace('</style>', cssToAdd + '</style>');

// 2. Replace JS
const oldJS = `function copyToClipboard(element) {
            const text = element.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = element.innerText;
                element.innerText = "已复制！";
                element.style.background = "rgba(16, 185, 129, 0.2)";
                element.style.color = "#10b981";
                setTimeout(() => {
                    element.innerText = originalText;
                    element.style.background = "rgba(255,255,255,0.05)";
                    element.style.color = "var(--text-primary)";
                }, 1500);
            });
        }`;

const newJS = `function copyToClipboard(element) {
            const text = element.getAttribute('data-value') || element.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const originalHTML = element.innerHTML;
                element.innerHTML = "<i class='bx bx-check'></i> 已复制";
                element.style.background = "#10b981";
                element.style.color = "white";
                setTimeout(() => {
                    element.innerHTML = originalHTML;
                    element.style.background = "";
                    element.style.color = "";
                }, 1500);
            });
        }`;
content = content.replace(oldJS, newJS);

// 3. Replace the actual spans
// Find spans with class="detail-value" onclick="copyToClipboard(this)">some_text</span>
const regex = /<span class="detail-value" onclick="copyToClipboard\(this\)">([^<]+)<\/span>/g;
content = content.replace(regex, (match, text) => {
    return `<span class="detail-value secret-btn" data-value="${text}" onclick="copyToClipboard(this)"><i class='bx bx-copy'></i> 点击获取</span>`;
});

// Also replace the label text from "账号 (点击复制)" to "账号"
content = content.replace(/账号 \(点击复制\)/g, "账号");
content = content.replace(/密码 \(点击复制\)/g, "密码");

fs.writeFileSync(filePath, content);
console.log("Successfully hidden Apple IDs and added copy buttons.");
