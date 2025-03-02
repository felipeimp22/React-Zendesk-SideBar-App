import { ZendeskClient } from "../context/ZendeskContext";
import ZAFClient from "zendesk_app_framework_sdk";
import { IRequestConfig } from "../interfaces/IRequestConfig";

export class RestService {
  private client: ZAFClient = ZendeskClient
  
  public async fetchToken () {
    try {
      const requestConfig: IRequestConfig = {
        type: 'POST',
        url: `https://test/api/login`,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          email: "test",
          password: "123",
        })
      }

      const response = await this.client.request(requestConfig);
      return response.token;
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  }
}