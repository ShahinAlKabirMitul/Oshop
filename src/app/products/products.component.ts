import { Subscription } from 'rxjs/Rx';
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
export class ProductsComponent implements OnInit,OnDestroy {

  products:product[]=[];
  filterProducts:product[]=[];
  cart:any;
  subscription:Subscription;
  category:string
  constructor( route:ActivatedRoute,productService:ProductService,private shoppingCartService:ShoppingCartService) { 
    productService.getAll().switchMap(products=>{
      this.products=products;
      return  route.queryParamMap;
    })
     .subscribe(params=>{
        this.category=params.get('category');
        this.filterProducts=(this.category)?
            this.products.filter(s=>s.category==this.category):this.products;
      })
   
  }

  async ngOnInit(){

   this.subscription= (await this.shoppingCartService.getCart())
                      .subscribe(cart=> this.cart=cart);
  }
 
ngOnDestroy(){
 this.subscription.unsubscribe();
}

}
