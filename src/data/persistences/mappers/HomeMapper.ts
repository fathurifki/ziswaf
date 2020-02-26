import { AxiosResponse } from "axios";
import { BaseResponseMapper } from "./Base";
import { Home, HomeData } from "../../../domain/entities/Home";

export class HomeMapper extends BaseResponseMapper {
  public convertFromApi(result: AxiosResponse<any>): Home {
    const { data } = result;
    return new Home(
      data.success,
      data.message,
      data.data.map(
        (val: HomeData) =>
          new HomeData(val.id, val.name, val.age)
      )
    );
  }
}
