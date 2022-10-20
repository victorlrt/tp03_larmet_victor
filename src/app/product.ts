export class Product {
  name = "";
  description = "";
  price = 0;
  quantity = 0;

  constructor(name: string , description: string , price: number , quantity: number ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;

  }
}
