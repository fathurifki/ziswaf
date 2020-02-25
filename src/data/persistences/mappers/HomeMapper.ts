import { AxiosResponse } from "axios";
import { BaseResponseMapper } from "./Base";
import { Home, HomeData } from "../../../domain/entities/Home";

export class HomeMapper extends BaseResponseMapper {
  public convertFromApi(result: AxiosResponse<any>): Home {
    const { data } = result;
    console.log('MAPPER RESULT ========>', result);
    return new Home(
      data.success,
      data.message,
      data.data.map(
        (val: { id: number; name: string; age: number }) =>
          new HomeData(val.id, val.name, val.age)
      )
    );
  }
}
