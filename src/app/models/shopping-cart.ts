import { product } from './product';


import { ShoppingCartItem } from './shopping-cart-item';
export class ShoppingCart{
    items:ShoppingCartItem[]=[];

    constructor(public itemsMap:{[productId:string]:ShoppingCartItem}){
        this.itemsMap=itemsMap||{};
        
        for(let productId in itemsMap){
            let item=itemsMap[productId];
            let x=new ShoppingCartItem();
            x.$key=productId;
            Object.assign(x,item);
            this.items.push(x);
        }
            
    }
  
   get totalPrice(){
    let sum=0;
    for(let productId in this.items)
        sum+= this.items[productId].totalPrice;
    return sum;
   }
   get totalItemCount(){
        let count=0;
        for(let productId in this.itemsMap){
            count+= this.itemsMap[productId].quantity;
        }
        return count;
    }
    getQantity(product:product){
        
        let item= this.itemsMap[product.$key];
        return item ? item.quantity:0;
      }

}