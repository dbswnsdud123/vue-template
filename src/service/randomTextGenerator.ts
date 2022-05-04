import { axiosInstance } from "../axios";

export class RandomTextGenerator {
  public get = async () => {
    const response = await axiosInstance.get(`https://catfact.ninja/fact`);
    return response.data;
  };
}
