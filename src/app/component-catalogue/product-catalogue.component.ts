import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Mushroom } from '../mushroom';
import { distinct, map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent implements OnInit {
  
  formSearchText = new FormGroup({
    nameFilter: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z]*'),
    ]),
    toxicityFilter: new FormControl('', [Validators.required]),
  });

  formChoiceEdible: FormGroup = new FormGroup({
    edibleFilter: new FormControl('')
  });

  formChoiceToxicity: FormGroup = new FormGroup({
    poisonousFilter: new FormControl('')
  });
  
  // get distinct toxicity of catalogue
  getDistinctToxicity(): Observable<string[]> {
    return this.tsCatalogue.getCatalogue().pipe(
      map((listProducts: Mushroom[]) => listProducts.map(mushroom => mushroom.toxicity)),
      distinct()
    );
  }

  constructor(public tsCatalogue: CatalogueService) { }

  catalogue$: Observable<Mushroom[]>;
  uniqueData$: Observable<string[]>;

  ngOnInit(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue();
    console.log(this.getDistinctToxicity());
  }

  submit() {
    console.log(this.formSearchText.value);
  }

  doFilterMushroomEdible(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue().pipe(
      map((
        listProducts: Mushroom[]) => listProducts.filter(

          mushroom => {
            let boolFilter = false;
            if (this.formChoiceEdible.value.edibleFilter === 'Yes') {
              console.log(this.formChoiceEdible.value.edibleFilter);
              boolFilter = mushroom.edible.valueOf() === true;

            } else {
              boolFilter = mushroom.edible.valueOf() === false;
            }

            return boolFilter;
          })));
  }
  
  // A finir avec un distinct
  doFilterMushroomToxicity(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue().pipe(
      map((
        listProducts: Mushroom[]) => listProducts.filter(

          mushroom => {
            let boolFilter = false;
           

            return boolFilter;
          })));
  }



  doFilterMushroomType(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue().pipe(
      map((
        listProducts: Mushroom[]) => listProducts.filter(

          mushroom => {
            let boolFilter = false;
            if (this.formSearchText.value.nameFilter != '') {
              boolFilter = mushroom.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(this.formSearchText.value.nameFilter.toLowerCase()) > -1;

            } else {
              boolFilter = true;
            }




            return boolFilter;
          })));
  }




}
