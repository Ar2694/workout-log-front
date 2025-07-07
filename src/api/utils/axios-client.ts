import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// interface HttpOptions {
//   method: HttpMethod,
//   httpHeader?: any,
//   body?: any,
//   cache?: any,
//   data?: object
// }

export default class AxiosClient {

  static response: AxiosResponse;

  static async createRequest(options: AxiosRequestConfig): Promise<any> {
    try {

      const configs: any = {};

      for (const [key, value] of Object.entries(options)) {
        if (value !== undefined) {
          configs[key] = value
        }
      }

      this.response = await axios(configs);
  
      return AxiosClient;
    }
    catch (error) {
      console.log(error);
    }
  }

  static statusCode() {
    const statusCode = this.response.status;
    const statusText = this.response.statusText;

    return {
      statusCode,
      statusText
    };
  }

  static getToken() {
    return this.response.headers["xsrfHeaderName"]
  }

  static isOk(): boolean {
    return this.response.statusText === "OK";
  }

  static responseData() {
    return this.response.data;
  }
}
