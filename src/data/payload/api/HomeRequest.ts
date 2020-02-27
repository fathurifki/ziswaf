import {
  CreateHomeRequestInterface,
  UpdateHomeRequestInterface,
  DeleteHomeRequestInterface
} from "../contracts/HomeContract";

export class CreateHomeRequest implements CreateHomeRequestInterface {
  public bookName: string;
  public category: string;
  public bookshelf: string;
  public price: number;
  public count: number;
  constructor(
    bookName: string,
    category: string,
    bookshelf: string,
    price: number,
    count: number
  ) {
    this.bookName = bookName;
    this.category = category;
    this.bookshelf = bookshelf;
    this.price = price;
    this.count = count;
  }
  public toJson() {
    return JSON.stringify({
      bookName: this.bookName,
      category: this.category,
      bookshelf: this.bookshelf,
      price: this.price,
      count: this.count
    });
  }
}

export class UpdateHomeRequest implements UpdateHomeRequestInterface {
  public bookName: string;
  public category: string;
  public bookshelf: string;
  public price: number;
  public count: number;
  constructor(
    bookName: string,
    category: string,
    bookshelf: string,
    price: number,
    count: number
  ) {
    this.bookName = bookName;
    this.category = category;
    this.bookshelf = bookshelf;
    this.price = price;
    this.count = count;
  }
  public toJson() {
    return JSON.stringify({
      bookName: this.bookName,
      category: this.category,
      bookshelf: this.bookshelf,
      price: this.price,
      count: this.count
    });
  }
}

export class DeleteHomeRequest implements DeleteHomeRequestInterface {
  constructor() { }
  public toJson() {
    return JSON.stringify({});
  }
}
