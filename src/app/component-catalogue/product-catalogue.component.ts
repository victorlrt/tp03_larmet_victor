import { Component, OnInit } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent {

  constructor(public tsCatalogue: CatalogueService) {
    this.catalogue$ = this.tsCatalogue.getCatalogue();

  }

  catalogue$: Observable<Product[]>;



}
