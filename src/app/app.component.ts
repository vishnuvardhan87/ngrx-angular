import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online-store';
  cart: Array<any>;

  constructor(private store: Store<any>){}

  ngOnInit(){
    this.store.select('cart').subscribe((state => this.cart = state))
  }
}
