import { groupID, masterID } from "../../../config.js";
import { Client, segment } from "icqq";
import { question,answer} from "../data/qa.js";
/**
 * 消息回复
 *
 *
 * @param {Client}
 *
 */
export function groupMesReply(client: Client) {
  //运用sendPrivateMsg实现发送私聊消息
  client.sendGroupMsg(groupID, "早上好！新的一天的学习就要开始辣！");
  //监听群聊消息
  client.on("message.group", (event) => {
    if (event.atme) {
     if (event.raw_message.includes("前端的神")) {
        client.sendGroupMsg(groupID, [
          segment.at(event.sender.user_id),
          "那必然是我们张佐科张部大大辣",
          segment.image("/package/asset/emoji/zzk.jpg"),
        ]);
      } else if (event.raw_message.includes("help")) {
        client.sendGroupMsg(groupID, [
          "尝试提出以下问题@我吧？"
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
      } else if (event.raw_message.includes("功能")) {
        client.sendGroupMsg(groupID, [
          answer.fun,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("教学")) {
        client.sendGroupMsg(groupID, [
          answer.teach,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("0基础")) {
        client.sendGroupMsg(groupID, [
          answer.zero_basis,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("作业")) {
        client.sendGroupMsg(groupID, [
          answer.home_work,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("考核")) {
        client.sendGroupMsg(groupID, [
          answer.exam,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("资料")) {
        client.sendGroupMsg(groupID, [
          answer.source,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("超级害羞，不敢问问题！")) {
        client.sendGroupMsg(groupID, [
          answer.hazikaxi,
          segment.at(event.sender.user_id),
        ]);
      } else if (event.raw_message.includes("学习注意")) {
        client.sendGroupMsg(groupID, [
          answer.study,
          segment.at(event.sender.user_id),
        ]);
      } else {
        client.sendGroupMsg(groupID, [
          segment.at(event.sender.user_id),
          "卷饼不知道哦,如果有问题，help然后@我吧？",
        ]);
      }
    }
  });
}
