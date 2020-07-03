import client from "./client";

const login = (email, password) => {
  console.log(email, password);
  return client.post("/auth", { email, password });
};

export default {
  login,
};
