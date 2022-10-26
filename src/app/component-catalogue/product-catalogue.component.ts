import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Mushroom } from '../mushroom';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent implements OnInit {

  constructor(public tsCatalogue: CatalogueService) {
    //this.catalogue$ = this.tsCatalogue.getCatalogue();

  }

  catalogue$: Observable<Mushroom[]>;

  ngOnInit(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue();
  }


}
