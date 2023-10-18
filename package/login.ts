import { createClient } from "icqq";
import { groupID, masterID } from "./config.js";
import { segment } from "icqq";
type Account = {
  account: number;
  password: string;
};
/**
 * 密码登录
 * @param {account}
 *
 */
export function login(account: Account) {
  const client = createClient({
    platform: 1,
    sign_api_addr: "http://127.0.0.1:8090/sign?key=114514",
  });
  const userAccount = account.account;
  const password = account.password;
  client.on("system.login.slider", (e: { url: string }) => {
    console.log("输入滑块地址获取的ticket后继续。\n滑块地址:    " + e.url);
    process.stdin.once("data", (data) => {
      client.submitSlider(data.toString().trim());
    });
  });
  client.on("system.login.qrcode", (e: any) => {
    console.log("扫码完成后回车继续:    ");
    process.stdin.once("data", () => {
      client.login();
    });
  });
  client.on("system.login.device", (e: any) => {
    console.log("请选择验证方式:(1：短信验证   其他：扫码验证)");
    process.stdin.once("data", (data) => {
      if (data.toString().trim() === "1") {
        client.sendSmsCode();
        console.log("请输入手机收到的短信验证码:");
        process.stdin.once("data", (res) => {
          client.submitSmsCode(res.toString().trim());
        });
      } else {
        console.log("扫码完成后回车继续：" + e.url);
        process.stdin.once("data", () => {
          client.login();
        });
      }
    });
  });
  client.login(userAccount, password);
  //监听群聊消息
  client.on("system.online", () => {
    //运用sendPrivateMsg实现发送私聊消息
    client.sendGroupMsg(groupID, "fuck all 我tm能用了");

    //监听所有私聊消息
    client.on("message.private", (event) => {
      client.sendPrivateMsg(masterID, "123456");
      console.log(
        `收到私聊消息来自${event.sender.user_id}, 文本内容为:${event.raw_message}`
      );
    });

    //监听群聊消息
    client.on("message.group", (event) => {
      if (event.atme) {
        client.sendGroupMsg(groupID, [
          "小心我肘击你",
          segment.at(event.sender.user_id),
        ]);
      }
    });
  });
}

console.log(111);
