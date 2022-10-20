import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(public ts: CatalogueService) {

  }

  product1 : Product = {
    name: "Product 1",
    description: "Description 1",
    price: 10,
    quantity: 1,

  }

  product2 : Product = {
    name: "Product 2",
    description: "Description 2",
    price: 20,
    quantity: 2,

  }

  listProducts: Product[] = [];

  ngOnInit() {
    this.listProducts.push(this.product1);
    this.listProducts.push(this.product2);
  }

  getCatalogue() {
    return this.listProducts;
  }

}
