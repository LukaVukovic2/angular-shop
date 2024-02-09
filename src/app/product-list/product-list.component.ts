import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: []
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.getProducts();
  }
}