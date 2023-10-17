import { groupID, masterID } from "./package/config.js";
import { login } from "./package/login.js";
import { createClient } from "icqq";
const client = createClient({
    platform: 3,
    sign_api_addr: "http://qi.yize.site/sign?key=939151520 ",
});
login({ account: 2907724711, password: "yangg308911" });
//监听群聊消息
client.on("system.online", () => {
    console.log("账号登录成功");
});
client.on("system.online", () => {
    //运用sendPrivateMsg实现发送私聊消息
    client.sendPrivateMsg(masterID, "Hello World");
    //监听所有私聊消息
    client.on("message.private", (event) => {
        console.log(`收到私聊消息来自${event.sender.user_id}, 文本内容为:${event.raw_message}`);
    });
});
//# sourceMappingURL=bot.js.map