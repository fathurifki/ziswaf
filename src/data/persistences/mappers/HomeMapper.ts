import { AxiosResponse } from "axios";
import { BaseResponseMapper } from "./Base";
import { Book } from "@/domain/entities/Home";

export class HomeMapper extends BaseResponseMapper {
  public convertFromApi(result: AxiosResponse<any>): Book[] {
    const { data } = result;
    return data.data.map(
      (val: any) =>
        new Book(
          val.bookId,
          val.bookName,
          val.category,
          val.bookshelf,
          val.price,
          val.count
        )
    );
  }
}
