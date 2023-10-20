import { createClient } from "icqq";
import { sign_api_addr } from "./config.js";
import { login } from "./func/client/login.js";
import { groupMesReply } from "./func/group/func/groupMes.js";
import { group } from "./func/group/index.js";

export function index() {
  const client = createClient({
    platform: 1,
    sign_api_addr: sign_api_addr,
  });
  login({ account: 3154950773, password: "Redrock0101" }, client);
  group(client);
}
