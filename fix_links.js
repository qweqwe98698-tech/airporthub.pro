const fs = require('fs');
const path = require('path');

const urls = {
    'Netflix': 'https://www.netflix.com/',
    'Disney+': 'https://www.disneyplus.com/',
    'Spotify': 'https://www.spotify.com/',
    'HBO Max': 'https://www.max.com/',
    'YouTube Premium': 'https://www.youtube.com/premium',
    'Hulu': 'https://www.hulu.com/',
    'Prime Video': 'https://www.primevideo.com/',
    'Apple TV+': 'https://tv.apple.com/',
    'Crunchyroll': 'https://www.crunchyroll.com/',
    'Twitch': 'https://www.twitch.tv/',
    'Tiktok Live': 'https://www.tiktok.com/live',
    'Paramount+': 'https://www.paramountplus.com/',
    'Steam': 'https://store.steampowered.com/',
    'Valorant': 'https://playvalorant.com/',
    'Discord': 'https://discord.com/',
    'Apex Legends': 'https://www.ea.com/games/apex-legends',
    'League of Legends': 'https://www.leagueoflegends.com/',
    'Epic Games': 'https://store.epicgames.com/',
    'Battle.net': 'https://us.shop.battle.net/',
    'Xbox Cloud': 'https://www.xbox.com/play',
    'GeForce NOW': 'https://www.nvidia.com/en-us/geforce-now/',
    'PUBG': 'https://pubg.com/',
    'PlayStation': 'https://store.playstation.com/',
    'Roblox': 'https://www.roblox.com/',
    'Pixiv': 'https://www.pixiv.net/',
    'Pinterest': 'https://www.pinterest.com/',
    'Behance': 'https://www.behance.net/',
    'ArtStation': 'https://www.artstation.com/',
    'Figma': 'https://www.figma.com/',
    'Midjourney': 'https://www.midjourney.com/',
    'Nyaa': 'https://nyaa.si/',
    'DLsite': 'https://www.dlsite.com/',
    'DeviantArt': 'https://www.deviantart.com/',
    'Vimeo': 'https://vimeo.com/',
    'Patreon': 'https://www.patreon.com/',
    'Gumroad': 'https://gumroad.com/'
};

['streaming.html', 'gaming.html', 'design.html'].forEach(filename => {
    const fullPath = path.join(__dirname, filename);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        let changed = false;
        content = content.replace(/<a href="#"([^>]*class="btn-visit"[^>]*)>访问 (.*?)<\/a>/g, (match, p1, name) => {
            if (urls[name]) {
                changed = true;
                return '<a href="' + urls[name] + '"' + p1 + '>访问 ' + name + '</a>';
            }
            return match;
        });
        
        if (changed) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Fixed URLs in ' + filename);
        } else {
            console.log('No URLs to fix in ' + filename);
        }
    }
});
