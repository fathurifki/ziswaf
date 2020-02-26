import { AxiosResponse } from "axios";
import { BaseResponseMapper } from "./Base";
import { Home } from "../../../domain/entities/Home";

export class HomeMapper extends BaseResponseMapper {
  public convertFromApi(result: AxiosResponse<any>): Home {
    const { data } = result;
    console.log('data mapper', data);
    
    return data.data.map(
      (val: any) =>
        new Home(val.id, val.name, val.age)
    )
  }
}
