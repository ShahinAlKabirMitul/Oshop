import { ShoppingCart } from '../models/shopping-cart';
import { Observable, Subscription } from 'rxjs/Rx';
import { any } from 'codelyzer/util/function';
import { ShoppingCartService } from './../shopping-cart.service';
import { product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:product[]=[];
  filterProducts:product[]=[];
  cart$:Observable<ShoppingCart>;
 
  category:string
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private shoppingCartService:ShoppingCartService) { 

    }

  async ngOnInit(){

   this.cart$= await this.shoppingCartService.getCart();
   this.populateProducts(); 
  }
 
 private populateProducts(){
  this.productService.getAll().switchMap(products=>{
      this.products=products;
      return  this.route.queryParamMap;
     })
    .subscribe(params=>{
        this.category=params.get('category');
        this.applyFilter();
     })
 } 
 private applyFilter(){
  this.filterProducts=(this.category)?
  this.products.filter(s=>s.category==this.category):this.products;
 }

}
