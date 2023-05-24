import axios from "axios";

export const api = axios.create({
  baseURL: "http://<IP.DA.SUA.MAQUINA>:3333",
});
