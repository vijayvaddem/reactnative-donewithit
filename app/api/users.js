import client from "../api/client";

const register = (userInfo) => client.post("/users", userInfo);

export default { register };
