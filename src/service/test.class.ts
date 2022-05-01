import { axiosInstance } from "../axios";

export class Test {
  public get = async () => {
    const response = await axiosInstance.get(`https://catfact.ninja/fact`);
    return response.data;
  };
}

export const testInstance = new Test();
