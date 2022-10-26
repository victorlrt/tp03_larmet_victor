import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Mushroom } from './mushroom';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) {}
  env = environment;




  listProducts: Mushroom[] = [];



  getCatalogue() : Observable<Mushroom[]> {
    return this.http.get<Mushroom[]>(this.env.catalogue);
  }

}
