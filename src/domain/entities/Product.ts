export class ProductData {
  public success: boolean;
  public message: string;
  public data?: Product[];
  constructor(success: boolean, message: string, data?: Product[]) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
export class Product {
  public productId: number;
  public productName: string;
  public productPrice: number;
  constructor(productId: number, productName: string, productPrice: number) {
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice;
  }
}
