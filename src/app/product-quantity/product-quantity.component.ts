import { ShoppingCartService } from './../shopping-cart.service';
import { product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') 'product':product
  @Input('shopping-cart') shoppingCart;
  constructor(private shoppingCartService:ShoppingCartService) { }

  addToCart(){
    this.shoppingCartService.addToCart(this.product);
  }
  RemoveFromCart(){
    this.shoppingCartService.RemoveFromCart(this.product);
  }
 

}
