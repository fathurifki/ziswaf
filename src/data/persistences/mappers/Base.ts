import { BaseEntity } from "../../../domain/entities/Base";
import { AxiosResponse } from "axios";

export class BaseResponseMapper {
         public convertBaseResponseFromApi(
           result: AxiosResponse<any>
         ): BaseEntity {
           const { data } = result;
           console.log('data base', data);
           return new BaseEntity(data.success, data.message);
         }
       }
