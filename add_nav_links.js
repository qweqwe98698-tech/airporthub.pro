const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && f !== 'promos.html');

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    
    const indexHtmlRegex = /(<a href="index\.html"[\s\S]*?<\/a>)/;
    
    if (indexHtmlRegex.test(content)) {
        if (content.includes('href="review.html"')) {
            console.log('Already added to ' + file);
            return;
        }

        const isReviewActive = file === 'review.html';
        const isArticlesActive = file === 'articles.html';

        const reviewLink = '\n                <a href="review.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: ' + (isReviewActive ? '#fff' : 'var(--text-muted)') + '; background: ' + (isReviewActive ? 'rgba(255,255,255,0.05)' : 'transparent') + '; text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class=\'bx bx-star\' style="font-size: 20px; color: ' + (isReviewActive ? '#fff' : 'inherit') + ';"></i> 机场评测\n                </a>';

        const articlesLink = '\n                <a href="articles.html" style="display: flex; align-items: center; gap: 10px; padding: 12px 15px; color: ' + (isArticlesActive ? '#fff' : 'var(--text-muted)') + '; background: ' + (isArticlesActive ? 'rgba(255,255,255,0.05)' : 'transparent') + '; text-decoration: none; border-radius: 8px; transition: 0.2s; margin-top: 5px;">\n                    <i class=\'bx bx-news\' style="font-size: 20px; color: ' + (isArticlesActive ? '#fff' : 'inherit') + ';"></i> 最新文章\n                </a>';

        content = content.replace(indexHtmlRegex, '$1' + reviewLink + articlesLink);
        fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
        console.log('Added to ' + file);
    }
});
