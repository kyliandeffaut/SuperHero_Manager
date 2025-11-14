import axios from "axios";

const API = "http://localhost:5000/api/auth";

export async function loginApi(username: string, password: string) {
  const res = await axios.post(`${API}/login`, { username, password });
  return res.data;
}

export async function registerApi(username: string, password: string) {
  const res = await axios.post(`${API}/register`, { username, password });
  return res.data;
}
