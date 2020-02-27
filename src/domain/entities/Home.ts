export class Book {
         public idBook: number;
         public bookName: string;
         public category: string;
         public bookshelf: string;
         public price: number;
         public count: number;

         constructor(idBook: number, bookName: string, category: string, bookshelf: string, price: number, count: number) {
           this.idBook = idBook;
           this.bookName = bookName;
           this.category = category;
           this.bookshelf = bookshelf;
           this.price = price;
           this.count = count;
         }
       }