import { create } from "apisauce";
import settings from "./config/settings";

const apiClient = create({
  baseURL: "https://60cdf77891cc8e00178dc3a7.mockapi.io/api/v1/magas",
});

export default apiClient;
