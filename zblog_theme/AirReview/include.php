<?php
#注册插件
RegisterPlugin("AirReview","ActivePlugin_AirReview");

function ActivePlugin_AirReview() {
    global $zbp;
    $zbp->LoadLanguage('theme', 'AirReview');
}
function InstallPlugin_AirReview() {}
function UninstallPlugin_AirReview() {}
?>