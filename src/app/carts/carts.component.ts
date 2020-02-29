import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.sass']
})
export class CartsComponent implements OnInit {
	travels;
	totalPrice;
	tp: number = 0;
	isTravelNull: boolean;
  constructor(private cartService: CartsService) { }

   ngOnInit() {
  	 this.travels = this.cartService.getItems();
  	 this.isTravelNull = typeof this.travels != "undefined" && this.travels != null && this.travels.length != null
						&& this.travels.length > 0;
	//window.alert(this.isTravelNull);
	for (let entry of this.travels) {
	    this.tp += Number(entry.price);

	//window.alert(this.tp);
	    // 1, "string", false
	}
	if(this.tp < 200){
		this.totalPrice = "Total Price: " + this.tp +"€";
	}
	else if (this.tp >= 200 && this.tp < 500 )
	{
		this.tp = (this.tp * 90)/100;
		this.totalPrice = "Total Price (10% discount): " + this.tp +"€";
	}else if(this.tp >= 500)
	{
		this.tp = (this.tp * 80)/100;
		this.totalPrice = "Total Price (20% discount): " + this.tp +"€";
	}
 	//window.alert(this.tp);
  }

}
