require("dotenv").config();
export class Endpoints {
  public static baseUrl = process.env.REACT_APP_API_KEY;
  public static Route = class {
    public static HOME = "/home";
    public static PRODUCT = "/product";
  };
}
