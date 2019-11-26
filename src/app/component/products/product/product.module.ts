import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
// import {count} from 'rxjs/operators';
import {ProductsComponent} from '../products.component';
// import {AppModule} from '../../../app.module';
import {MenuComponent} from '../../menu/menu.component';
import {ProductAddComponent} from '../product-add/product-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductEditComponent} from '../product-edit/product-edit.component';
import {SlideComponent} from '../../slide/slide.component';

const routes: Routes = [
  {path: '', component: SlideComponent},
  {path: 'products/moto', component: ProductsComponent},
  {path: 'products/moto/create', component: ProductAddComponent},
  {path: 'products/moto/:id/edit', component: ProductEditComponent}
];

@NgModule({
  declarations: [ProductsComponent,
    MenuComponent,
    ProductAddComponent,
    ProductEditComponent,
    SlideComponent],
  exports: [
    MenuComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class ProductModule {
}
