import { ShoppingCart } from './shopping-cart';
import { Data } from '@angular/router';
import { number } from 'ng2-validation/dist/number';
export class Order{
    datePlaced:number;
    items:any[];
    constructor(public userId:string,public shipping:any, shoppingCart:ShoppingCart){
        this.datePlaced=new Date().getTime();
        this.items= shoppingCart.items.map(i=>{
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

    }
}