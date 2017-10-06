import { product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:product[]=[];
  filterProducts:product[]=[];
 
  category:string
  constructor( route:ActivatedRoute,productService:ProductService) { 
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

 

}
