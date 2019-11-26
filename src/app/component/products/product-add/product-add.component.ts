import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../../services/product-service.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductForm = this.fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: '',
  });

  constructor(private productsService: ProductServiceService,
              private fb: FormBuilder,
              private route: Router) {
  }

  onSubmit() {
    const productNew = this.addProductForm.value;
    this.productsService.add(productNew);
    this.route.navigate(['/products/moto']);
  }

  ngOnInit() {
  }

  get name() {
    return this.addProductForm.get('name');
  }
  get price() {
    return this.addProductForm.get('price');
  }

}
