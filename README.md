# Platform.ts v0.1.0

  获取相关平台信息
  get relevant platform information

## Installation
  
  In a browser:
  ```html
  <script src="platforminfo.js"></script>
  ```

  In an AMD loader:

  ```js
  require(['platforminfo'],function(platforminfo){/*...*/})
  ```

  Using npm:

  ```shell
  $ npm i --save platforminfo
  ```

  ```js
    import platformInfo from 'platforminfo';
  ```

  For example:

  ```js
  platformInfo.nameEnum; // DingTalk(钉钉),Feishu（飞书）,App（APP）,Wxwork（企业微信）,WeChat（微信）,MiniProgram（微信小程序）
  platformInfo.name; // 枚举nameEnum中的值
  platformInfo.isH5; // true or false 是否是h5 
  platformInfo.ua; // navigator.userAgent

