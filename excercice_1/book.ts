class Book {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}
let mybook: Book = new Book("Improbable", 20);
console.log(mybook);
