
import { Params } from '@angular/router';
import { number } from 'ng2-validation/dist/number';



import { Subscription } from 'rxjs/Rx';
import { product } from '../../models/product';
import { ProductService } from '../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table/src';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy  {
  products:product[];
  subscription:Subscription;
  tableResource:DataTableResource<product>;
  items:product[]=[];
  itemCount:number
  constructor(private productService:ProductService) { 
  this.subscription= this.productService.getAll()
                     .subscribe(product=>{
                     this.products=product
                     this.initializeTable(product);
                     });
  }
  
 private initializeTable(product:product[]){
    this.tableResource=new DataTableResource(product);
    this.tableResource.query({offset:0})
    .then(items=>this.items=items);
    this.tableResource.count()
    .then(count=>this.itemCount=count);
  }
  reloadItems(params){
    if(!this.tableResource)
      return;
    this.tableResource.query(params)
    .then(items=>this.items=items);
  }
  
  ngOnInit() {
  }
  filter(query:string){
    console.log('filter call')
    console.log(query);
    let filteredProducts=(query)?
        this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):this.products;
   this.initializeTable(filteredProducts);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
