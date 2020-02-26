import {
  CreateHomeRequestInterface,
  UpdateHomeRequestInterface,
  DeleteHomeRequestInterface
} from "../contracts/HomeContract";

export class CreateHomeRequest implements CreateHomeRequestInterface {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class UpdateHomeRequest implements UpdateHomeRequestInterface {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class DeleteHomeRequest implements DeleteHomeRequestInterface {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}
