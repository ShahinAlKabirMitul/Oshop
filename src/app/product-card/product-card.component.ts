import { ShoppingCartService } from './../shopping-cart.service';
import { product } from './../models/product';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') 'product':product
  @Input('show-actions') showActions=true;
  @Input('shopping-cart') shoppingCart;
  constructor(private shoppingCartService:ShoppingCartService) { }

  addToCart(product:product){
    this.shoppingCartService.addToCart(product);
  }
  getQantity(){
    if(!this.shoppingCart) return 0;
    let item= this.shoppingCart.items[this.product.$key];
    return item ? item.quantity:0;
  }

}