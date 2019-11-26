import {Injectable} from '@angular/core';
import {IProduct} from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: IProduct[] = [
    {
      id: 1,
      name: 'CB300R',
      price: '140.000.000đ',
      image: 'assets/cb300r.png'
    },
    {
      id: 2,
      name: 'CB650R',
      price: '245.990.000đ',
      image: 'assets/2.png'
    },
    {
      id: 3,
      name: 'WINNERX',
      price: '45.990.000đ',
      image: 'assets/3.png'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  add(product) {
    return this.products.push(product);
  }

  findById(id) {
    return this.products[id];
  }

  delete(id) {
    this.products.splice(id, 1);
  }

  update(product: IProduct, id: number): void {
    this.products[id] = product;
  }
}
