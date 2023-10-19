import { groupID, masterID } from "../../../config.js";
import { Client, segment } from "icqq";
import { question,answer} from "../data/qa.js";
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
     if (event.raw_message.includes("前端的神")) {
        client.sendGroupMsg(groupID, [
          "那必然是我们张佐科张部大大辣",
          segment.image("/package/asset/emoji/zzk.jpg"),
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("help")) {
        client.sendGroupMsg(groupID, [
          "尝试提出以下问题@我吧？\n"
          +question.fun
          +question.teach
          +question.home_work
          +question.exam
          +question.source
          +question.study
          +question.zero_basis
          +question.hazikaxi
          ,
          segment.face(21),
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.fun)) {
        client.sendGroupMsg(groupID, [
          answer.fun,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.teach)) {
        client.sendGroupMsg(groupID, [
          answer.teach,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.zero_basis)) {
        client.sendGroupMsg(groupID, [
          answer.zero_basis,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.home_work)) {
        client.sendGroupMsg(groupID, [
          answer.home_work,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.exam)) {
        client.sendGroupMsg(groupID, [
          answer.exam,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.source)) {
        client.sendGroupMsg(groupID, [
          answer.source,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.hazikaxi)) {
        client.sendGroupMsg(groupID, [
          answer.hazikaxi,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes(question.study)) {
        client.sendGroupMsg(groupID, [
          answer.study,
          segment.at(event.sender.user_id),
        ]);
      } else {
        client.sendGroupMsg(groupID, [
          "卷饼不知道哦,如果有问题，help然后@我吧？",
          segment.at(event.sender.user_id),
        ]);
      }
    }
  });
}
