import { login } from "./package/login.js";
import { createClient } from "icqq";
const client = createClient({
    platform: 3,
    sign_api_addr: "http://127.0.0.1:8080/sign",
});
login({ account: 2907724711, password: "yangg308911" });
client.on("system.online", () => console.log("Logged in!"));
client.on("message", (e) => {
    console.log(e);
    e.reply("hello world", true); //true表示引用对方的消息
});
//# sourceMappingURL=bot.js.map