import { groupID, masterID } from "../../config.js";
import { Client, segment } from "icqq";
export function groupMesReply(client: Client) {
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
