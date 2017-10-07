import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { async } from 'rxjs/scheduler/async';
import { ShoppingCartService } from '../shopping-cart.service';
import { AppUser } from '../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
 appUser:AppUser;
 cart$:Observable<ShoppingCart>
  constructor(public auth:AuthService,private shoppingCardService:ShoppingCartService) {
    
   }

 async ngOnInit(){
     this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);

     this.cart$=await this.shoppingCardService.getCart();
     
  
  }

  logOut(){
    this.auth.logout();
  }

}
