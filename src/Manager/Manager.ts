import { RestService } from "../services/RestService";

class Manager {
  private rest = new RestService();

  public async login (cpf: string) {
    const data = await this.rest.fetchToken();
    
    if (data && data.response.length > 0) {
      return data.response;
    }
    return null;
  }
}

export default new Manager();
