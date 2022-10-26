import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from  '@angular/forms';

import { AppComponent } from './component-main/app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';
import { ComponentFormComponent } from './component-form/component-form.component';
import { ComponentSummaryComponent } from './component-summary/component-summary.component';
import { CheckFormStringDirective } from './directive/directive-string/check-form-string.directive';
import { CheckFormNumberDirective } from './directive/directive-number/check-form-number.directive';
import { PipeFormatTelPipe } from './pipe/pipe-format-tel.pipe';
import { CheckFormEMailDirective } from './directive/directive-email/check-form-email.directive';
import { ProductCatalogueComponent } from './component-catalogue/product-catalogue.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    ComponentFooterComponent,
    ComponentFormComponent,
    ComponentSummaryComponent,
    CheckFormStringDirective,
    CheckFormNumberDirective,
    PipeFormatTelPipe,
    CheckFormEMailDirective,
    ProductCatalogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
