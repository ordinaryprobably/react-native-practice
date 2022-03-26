import { create } from "apisauce";

const clientApi = create({
  baseURL: "http://172.30.1.58:9000/api",
});

export default clientApi;
