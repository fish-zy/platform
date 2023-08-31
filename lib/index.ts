(function (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
    // @ts-ignore
  } else if (typeof define === 'function' && define.amd) {
    // @ts-ignore
    define([], factory);
  } else if (typeof exports === 'object') {
    exports['platform'] = factory;
  } else {
    // @ts-ignore
    root['platform'] = factory();
  }

})(this, function () {
  const ua = navigator.userAgent;
  enum nameEnum {
    DingTalk = 'DingTalk',
    Feishu = 'Feishu',
    App = 'App',
    Wxwork = 'Wxwork',
    WeChat = 'WeChat',
    MiniProgram = 'MiniProgram'
  }
  let name = '';
  const isH5 = ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  if (ua.indexOf('DingTalk') > -1) { // 钉钉
    name = nameEnum.DingTalk;
  } else if (ua.match(/Feishu/)) { // 飞书
    name = nameEnum.Feishu
  } else if (ua.match(/-BFD-APP/) || ua.match(/-MAX-APP/)) { // APP
    name = nameEnum.App
  } else if (ua.match(/wxwork/i)) { // 企业微信
    name = nameEnum.Wxwork
  } else if (ua.match(/MicroMessenger\/([\d.]+)/)) { // 微信
    name = nameEnum.WeChat;
  } else if (ua.match(/miniProgram/)) { // 小程序
    name = nameEnum.MiniProgram;
  }
  return {
    ua,
    name,
    isH5,
    nameEnum
  }
})