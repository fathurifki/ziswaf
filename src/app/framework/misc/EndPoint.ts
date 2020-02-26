require("dotenv").config();
export class Endpoint {
  public static baseUrl = process.env.REACT_APP_API_KEY;

  homeUrl(): string {
    return "/home";
  }

  productUrl(): string {
    return "/product";
  }
}
