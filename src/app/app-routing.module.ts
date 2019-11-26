import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './component/products/products.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'products', loadChildren: './component/products/product/product.module#ProductModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {
}
