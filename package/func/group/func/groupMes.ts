import { groupID, masterID } from "../../../config.js";
import { Client, segment } from "icqq";
/**
 * 消息回复
 *
 * 只有牢大，前端的神，你好三个关键词。其他的还在想
 *
 * @param {Client}
 *
 */
export function groupMesReply(client: Client) {
  //运用sendPrivateMsg实现发送私聊消息
  client.sendGroupMsg(groupID, "Hello");
  //监听群聊消息
  client.on("message.group", (event) => {
    if (event.atme) {
      if (event.raw_message.includes("牢大")) {
        client.sendGroupMsg(groupID, [
          "小心给你一肘击",
          segment.image("/package/asset/emoji/koubi.jpg"),
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("前端的神")) {
        client.sendGroupMsg(groupID, [
          "那必然是我张佐科张部大大",
          segment.image("/package/asset/emoji/zzk.jpg"),
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("你好")) {
        client.sendGroupMsg(groupID, [
          "你好",
          segment.face(21),
          segment.at(event.sender.user_id),
        ]);
      } else {
        client.sendGroupMsg(groupID, [
          "小的不知道哦,为什么不问问无所不知的佐科大佬呢",
          segment.face(76),
          segment.at(event.sender.user_id),
        ]);
      }
    }
  });
}
