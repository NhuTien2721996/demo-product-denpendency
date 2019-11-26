import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductsComponent} from './component/products/products.component';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './component/menu/menu.component';
import {ProductModule} from './component/products/product/product.module';
import { ProductAddComponent } from './component/products/product-add/product-add.component';
import { ProductEditComponent } from './component/products/product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SlideComponent } from './component/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule

  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
