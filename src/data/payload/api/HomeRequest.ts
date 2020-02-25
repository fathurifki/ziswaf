import {
  CreateHomeData,
  UpdateHomeData,
  DeleteHomeData
} from "../contracts/HomeContract";

export class CreateHomeRequest implements CreateHomeData {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class UpdateHomeRequest implements UpdateHomeData {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}

export class DeleteHomeRequest implements DeleteHomeData {
  constructor() {}
  public toJson() {
    return JSON.stringify({});
  }
}
