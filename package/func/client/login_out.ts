import type { Client } from "icqq/lib/client.js";
import { groupID } from "../../config.js";

export function loginout(client: Client) {
  client.on("system.offline", () => {
    client.sendGroupMsg(groupID, "byebye,我下班咯");
  });
}
