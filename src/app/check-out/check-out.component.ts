import { AuthService } from '../auth.service';
import { OrderService } from './../order.service';
import { Subscription } from 'rxjs/Rx';

import { async } from 'rxjs/scheduler/async';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit ,OnDestroy {
  shipping = {}; 
  cart:ShoppingCart;
  cartSubscribtion:Subscription;
  userId:string;
  userSubscribtion:Subscription;
  constructor(
    private authService:AuthService,
    private orderService:OrderService,
    private shoppingCartService:ShoppingCartService) {}
async ngOnInit(){
  let cart$=await this.shoppingCartService.getCart();
  this.cartSubscribtion= cart$.subscribe(cart=>this.cart=cart);
  this.userSubscribtion=this.authService.user$.subscribe(user=>this.userId=user.uid);
 }
  ngOnDestroy(){
    this.cartSubscribtion.unsubscribe();
    this.userSubscribtion.unsubscribe();
  }
  placeOrder() {
    console.log(this.shipping);
    let order={
      userId:this.userId,
      datePlaced:new Date().getTime(),
      shipping:this.shipping,
      items:this.cart.items.map(i=>{
        return{
          product:{
            title:i.title,
            imageUrl:i.imageUrl,
            price:i.price
          },
          quantity:i.quantity,
          totalPrice:i.totalPrice
        }
      })
    };
    this.orderService.storeOrder(order);
  }    
  

}
