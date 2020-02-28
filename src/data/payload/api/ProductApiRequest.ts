import {
  CreateProductRequestInterface,
  UpdateProductRequestInterface,
  DeleteProductRequestInterface
} from "../contracts/ProductContract";

export class CreateProductRequest implements CreateProductRequestInterface {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class UpdateProductRequest implements UpdateProductRequestInterface {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class DeleteProductRequest implements DeleteProductRequestInterface {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}
