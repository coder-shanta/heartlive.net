(function(){
    var UA = {};
    var ua = navigator.userAgent.toLowerCase(),s;
    UA.ie =  (s = ua.match(/(msie\s|trident.*rv:)([\d.]+)/))?s[2]:false;
    UA.firefox = (s =ua.match(/firefox\/([\d.]+)/))?!!s[1]:false;
    UA.chrome = (s = ua.match(/chrome\/([\d.]+)/))?!!s[1]:false;
    UA.opera = (s = ua.match(/opera.([\d.]+)/))?!!s[1]:false;
    UA.safari =  (s = ua.match(/version\/([\d.]+).*safari/))?!!s[1]:false;
    UA.android =  (s=ua.match(/android/))?!!s:false;
    UA.iphone =  (s=ua.match(/iphone os/))?!!s:false;
    UA.ipad =  (s=ua.match(/ipad/))?!!s:false;
    UA.ios = UA.ipad || UA.iphone;
    UA.isWin32 = /win32/i.test(window.navigator.platform);
    UA.isWeixin = (s=ua.match(/MicroMessenger/i))?!!s:false;  //判断是否是在微信浏览器里面
    UA.isQQ = (s=ua.match(/\sqq\//))?!!s:false;
    UA.isQzone = (s=ua.match(/\sqzone\//))?!!s:false;  //判断是否是在微信浏览器里面
    UA.isUcweb = (s=ua.match(/ucbrowser/))?!!s:false;
    UA.isMqq = (s = (ua.match(/mqqbrowser/) && !UA.isWeixin))?!!s:false; //是否是手机qq浏览器
    UA.isWeibo = (s=ua.match(/weibo/))?!!s:false;
    UA.isThird = UA.isQQ || UA.isQzone || UA.isWeibo || UA.isWeixin;

    var iosVersion;
    if(ua.indexOf("like mac os x") > 0){
        //ios
        var regStr_saf = /os [\d._]*/gi ;
        var verinfo = ua.match(regStr_saf) ;
        iosVersion = (verinfo+"").replace(/[^0-9|_.]/ig,"").replace(/_/ig,".");
        UA.iosVersion = iosVersion || '';
    }

    window.UA=UA;

  if(typeof module !== 'undefined' && module.exports){
    module.exports = UA;
  }
})();
