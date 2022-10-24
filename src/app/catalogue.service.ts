import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) {}
  env = environment;

    this.listProducts.push(this.product1);
    this.listProducts.push(this.product2);
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



  getCatalogue() : Observable<Product[]> {
    return of(this.listProducts);
  }

}
