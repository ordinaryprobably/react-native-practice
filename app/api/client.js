import { create } from "apisauce";

const clientApi = create({
  baseURL: "http://172.30.1.29:9000/api",
});

export default clientApi;
