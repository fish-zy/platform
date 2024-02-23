# Platform.ts v0.1.6

  获取相关平台信息
  get relevant platform information

## Installation

  Using npm:

  ```shell
  $ npm i --save platforminfo
  ```

  ```js
    import platformInfo, { nameEnum } from 'platforminfo';
  ```

  For example:

  ```js
  nameEnum; // DingTalk(钉钉),Feishu（飞书）,App（APP）,Wxwork（企业微信）,WeChat（微信）,MiniProgram（微信小程序）
  platformInfo.name; // 枚举nameEnum中的值
  platformInfo.isH5; // true or false 是否是h5 
  platformInfo.ua; // navigator.userAgent

