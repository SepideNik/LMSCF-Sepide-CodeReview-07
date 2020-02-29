import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travelList } from '../travels';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.sass']
})
export class TravelDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartsService) { }
	trip;
  addToCart() {
   
   this.cartService.addToCart(this.trip);
  }

  ngOnInit(){
  	this.route.paramMap.subscribe(params => {
    this.trip = travelList[+params.get('id')];
  });
  }


}
