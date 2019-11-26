import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../../../services/product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  EditProductForm: FormGroup;
  index = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private productsService: ProductServiceService,
              private router: Router) {
  }

  ngOnInit() {
    const product = this.productsService.findById(this.index);
    this.EditProductForm = this.fb.group({
      name: [[product.name], [Validators.required]],
      price: [[product.price], [Validators.required]]
    });
  }

  onSubmit() {
    this.productsService.update(this.EditProductForm.value, this.index);
    this.router.navigate(['/products/moto']);
  }

  get name() {
    return this.EditProductForm.get('name');
  }

  get price() {
    return this.EditProductForm.get('price');
  }

}
