import { PRODUCTS } from './../store/market';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
