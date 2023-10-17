import { createBot } from "@redrock-qq-bot/core"

async function handleReport (message, sender, bot) {
  if (message === "举报") {
    try {
      await bot.deleteMsg(sender.message_id)
      const reportContent = `被举报内容：${message}\n举报人：${sender.user_id}\n被举报人：${sender.sender_id}`
      const adminIds = [3276817499]
      await Promise.all(adminIds.map(async (adminId) => {
        await bot.sendPrivateMsg(adminId, reportContent)
      }))
    } catch (error) {
      throw error
    }
  }
}
async function keywordReply (message, sender, bot, key, content) {
  if (message.includes(key)) {
    try {
      await bot.sendGroupMsg(sender.group_id, content)
      console.log("消息发送成功！")
    } catch (error) {
      console.error("消息发送失败：", error)
    }
  }
}
let messageHistory = {}
async function handleRepeatingMessages (message, sender, bot) {
  const groupId = sender.group_id
  const userId = sender.user_id
  const messageCount = messageHistory[groupId]?.[userId]?.[message] || 0
  messageHistory[groupId] = messageHistory[groupId] || {}
  messageHistory[groupId][userId] = messageHistory[groupId][userId] || {}
  if (messageCount >= 6) {
    try {
      await bot.deleteMsg(sender.message_id)
      await bot.sendGroupMsg(groupId, "哼！不可以复读哦！")
    } catch (error) {
      throw error
    }
  } else {
    messageHistory[groupId][userId][message] = messageCount + 1
  }
}

const qq = 3154950773
const password = "Redrock0101"
const allowGroups = [895192790]

const bot = createBot(qq, password, allowGroups)

bot.on("system.online", () => console.log("qq已登陆"))

bot.on("message", async ({ message_type, message, sender }) => {
  if (message_type === "group") {
    /**
     * 重复内容处理
     */
    handleRepeatingMessages(message, sender, bot)

    /**
     * 举报处理
     */
    handleReport(message, sender, bot)

    /**
     * 关键词
     */
    keywordReply(message, sender, bot, "sbzzk", "还真是")
    keywordReply(message, sender, bot, "test", "(。-ω-)/准备好了哦")
  } else if (message_type === "private") {
    console.log(`收到私聊消息：${message}`)
  }
})
