import { BaseResponse } from "../../../domain/entities/Base";
import { AxiosResponse } from "axios";

export class BaseResponseMapper {
  public convertBaseResponseFromApi(result: AxiosResponse<any>): BaseResponse {
    const { data } = result;
    return new BaseResponse( data.success, data.message );
  }
}
