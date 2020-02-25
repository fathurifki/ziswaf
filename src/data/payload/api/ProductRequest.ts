import {
  CreateProductData,
  UpdateProductData,
  DeleteProductData
} from "../contracts/ProductContract";

export class CreateProductRequest implements CreateProductData {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class UpdateProductRequest implements UpdateProductData {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class DeleteProductRequest implements DeleteProductData {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}
