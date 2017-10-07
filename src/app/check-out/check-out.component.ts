import { Observable } from 'rxjs/Rx';

import { async } from 'rxjs/scheduler/async';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit  {
  
  cart$:Observable<ShoppingCart>;

  
  constructor( private shoppingCartService:ShoppingCartService) {}
  async ngOnInit(){
    this.cart$=await this.shoppingCartService.getCart();
   
  
 }
 
  
  

}
