import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../iproduct';
import {ProductServiceService} from '../../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts = this.productsService.getAll();

  constructor(private productsService: ProductServiceService) {
  }

  ngOnInit() {
  }

  delete(id) {
    if (confirm('bạn có chắc chắn muốn xóa không?')) {
      this.productsService.delete(id);
    }
  }

}
