export declare enum nameEnum {
    DingTalk = "DingTalk",
    Feishu = "Feishu",
    App = "App",
    Wxwork = "Wxwork",
    WeChat = "WeChat",
    MiniProgram = "MiniProgram"
}
interface InfoResult {
    ua: string;
    name: nameEnum | undefined;
    isH5: boolean;
}
export declare const platforminfo: InfoResult;
export default platforminfo;
