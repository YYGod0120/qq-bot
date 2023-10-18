import { groupID, masterID } from "./package/config.js";
import { login } from "./package/login.js";
import { createClient } from "icqq";
const client = createClient({
  platform: 1,
  sign_api_addr: "http://127.0.0.1:8090/sign?key=114514",
});
login({ account: 2907724711, password: "yangg308911" });
