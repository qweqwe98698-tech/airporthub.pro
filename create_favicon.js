const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2dd4bf" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="100" height="100" rx="24" fill="#171e28" />
  <path d="M50 20 A30 30 0 1 1 20 50 A30 30 0 0 1 50 20 Z" fill="none" stroke="url(#grad)" stroke-width="6" />
  <path d="M25 50 L75 50 M50 20 Q70 50 50 80 M50 20 Q30 50 50 80" fill="none" stroke="url(#grad)" stroke-width="4" filter="url(#glow)" />
</svg>`;

fs.writeFileSync(path.join(__dirname, 'favicon.svg'), svgContent);

const files = [
    'index.html',
    'tutorials.html',
    'apple_id.html',
    'free_nodes.html',
    'ai_tools.html',
    'ai_dev.html',
    'social_media.html',
    'ecommerce.html',
    'crypto.html'
];

files.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        if (!content.includes('favicon.svg')) {
            content = content.replace('</head>', '    <link rel="icon" type="image/svg+xml" href="favicon.svg">\n</head>');
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Added favicon to ' + file);
        } else {
            console.log('Favicon already exists in ' + file);
        }
    }
});
