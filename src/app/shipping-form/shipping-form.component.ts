import { ShoppingCart } from './../models/shopping-cart';

import { OrderService } from './../order.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {
  @Input('cart')cart:ShoppingCart;
  shipping = {}; 
  userId:string;
  userSubscribtion:Subscription;
  
  constructor(
    private router:Router,
    private authService:AuthService,
    private orderService:OrderService
   ) {}

  ngOnInit() {
    this.userSubscribtion=this.authService.user$.subscribe(user=>this.userId=user.uid);
  }
  ngOnDestroy(){
    this.userSubscribtion.unsubscribe();
  }
  async placeOrder() {
    console.log(this.shipping);
    let order=new Order(this.userId,this.shipping,this.cart);
    let result= await this.orderService.placeOrder(order);
  
    this.router.navigate(['/order-sucess',result.key])
  }   
}
