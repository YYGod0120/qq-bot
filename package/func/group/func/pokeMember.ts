import type { Client } from "icqq";
import { groupMesReply } from "./groupMes.js";
/**
 * 戳一戳回复
 *
 * @param {Client}
 *
 */
export function pokeBack(client: Client) {
  client.on("notice.group.poke", (event) => {
    if (event.target_id === 2907724711) {
      event.group.pokeMember(event.operator_id);
    }
  });
}
