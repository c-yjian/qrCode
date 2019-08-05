
//监听所有请求
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        chrome.tabs.query({active: true}, function (tab) {
            const ele = $('#url-container');
            console.log(ele)

            // 当前页面的url
            var pageUrl = tab[0].url;
            ele.html(`<div>${pageUrl}</div>`)
        });
    },
    {urls: ["*://*/*"]},  //需要监听页面过滤器,你也可以通过*来匹配。这里是监听了所有的页面
    ["blocking"]
);

function test(){

}

