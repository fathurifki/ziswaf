require("dotenv").config();
export class Endpoint {
  public static baseUrl = process.env.REACT_APP_API_KEY;

  bookUrl(): string {
    return "/book";
  }

  productUrl(): string {
    return "/product";
  }
}
