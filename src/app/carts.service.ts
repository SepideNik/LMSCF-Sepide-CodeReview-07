import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

   items = [];
 constructor() { }

 addToCart(travels) {
   this.items.push(travels);
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }
}
