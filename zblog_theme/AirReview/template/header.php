{* Template Name: 公共头部 *}
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{$name}-{$title}</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{$host}zb_users/theme/{$theme}/style/style.css">
    <!-- Icon Font (Boxicons) -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <style>
        .article-read-container { max-width: 800px; margin: 40px auto; background: var(--bg-card); padding: 40px; border-radius: 12px; border: 1px solid var(--border); }
        .article-header { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 30px; }
        .article-header h1 { font-size: 28px; color: #fff; line-height: 1.4; margin-bottom: 15px; }
        .meta-tags { display: flex; gap: 15px; color: var(--text-muted); font-size: 13px; }
        .meta-tags span { display: flex; align-items: center; gap: 5px; }
        .article-body { font-size: 16px; line-height: 1.8; color: var(--text-main); }
        .article-body h2 { color: #fff; font-size: 22px; margin: 35px 0 15px 0; border-left: 4px solid #8b5cf6; padding-left: 10px; }
        .article-body img { max-width: 100%; border-radius: 8px; margin: 20px 0; border: 1px solid var(--border); }
        @media (max-width: 768px) {
            .dashboard-wrapper { flex-direction: column; }
            .sidebar { width: 100% !important; position: static !important; height: auto !important; border-right: none !important; border-bottom: 1px solid var(--border); }
            .main-content { overflow-y: visible !important; height: auto !important; }
            .article-read-container { padding: 20px; margin: 15px; }
            .topbar { padding: 15px; flex-direction: column; gap: 15px; align-items: flex-start; }
        }
    </style>
</head>
<body>
    <div class="dashboard-wrapper">
