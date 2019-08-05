"use strict";
chrome.tabs.getSelected(null,function(w){
    $('.title-content').text(w.title);
    $('.url-content').text(w.url);
    $('.url-content').attr("title",w.url);
    qrcode(w.url);
});

function qrcode(url){
    let that = this;
    let qrcode = new QRCode('qrcode', { // qrcode为容器ID
        width: 210,         // 宽度
        height: 210,        // 高度
        text:  url,   // 二维码内容即 URL
        // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f',   // 背景色
        // foreground: '#ff0'    // 前景色
    })
}

