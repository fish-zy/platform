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
declare function platforminfo(): InfoResult;
export default platforminfo;
