import type { Client } from "icqq";
import { groupMesReply } from "./func/groupMes.js";
import { pokeBack } from "./func/pokeMember.js";

export function group(client: Client) {
  client.on("system.online", () => {
    groupMesReply(client);
    pokeBack(client);
  });
}
