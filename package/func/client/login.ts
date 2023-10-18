import { Client, createClient } from "icqq";
import { groupID, masterID, sign_api_addr } from "../../config.js";
import { segment } from "icqq";
type Account = {
  account: number;
  password: string;
};

/**
 * 密码登录
 *
 * api签名等内容写在config.ts
 * @param {Account}
 *
 */
export function login(account: Account, client: Client) {
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
}
