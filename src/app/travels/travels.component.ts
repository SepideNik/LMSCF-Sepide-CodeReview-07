import { Component, OnInit } from '@angular/core';
import { travelList } from '../travels';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from '../carts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
  
  reviewForm = new FormGroup({
  name: new FormControl(''),  
  desc: new FormControl(''),
   });

  public show:boolean = false;
  public buttonName:any = 'Show';

  travels = travelList;
  // reviews =[];
  review;
  
  constructor(private route: ActivatedRoute, private cartService: CartsService) { }
  trip;
  addToCart(event) {
  	var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var id = idAttr.nodeValue;
  	this.route.paramMap.subscribe(params => {
    this.trip = travelList[Number(id)-1];
     });
   // window.alert("This trip added successfuly");
   this.cartService.addToCart(this.trip);
  }

   toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  sendExperience(){
   
     var rev = this.reviewForm.value;

     this.review = [{
        name:rev.name,
        desc: rev.desc}];
        this.reviewForm.reset();
        this.show = !this.show;
        this.buttonName = "Hide";

    // var reviewArray: {[key: string]: string} = {
    // name: this.info.firstName,
    // desc: this.info.Desc
    //   }
    // const reviewArray: Record<string, string>[] = [
    // {'name': this.info.firstName},
    // {'desc': this.info.Desc}];

     // let reviewArray = [
     // {"name":this.info.get['name']},
     // {"desc":this.info.get['desc']}]
     
     //window.alert(rev.desc);

     //Console.log(reviewArray);


    // this.reviews.push(review);
    // for (let entry of this.reviews) {
    // console.log(entry); // 1, "string", false
    // }
    // console.log(this.reviews);

  }
  filterTravels(e){
    const target = e.target || e.srcElement || e.currentTarget;
   // window.alert(target);
     const priceAtrr = target.attributes.priceAtrr;
     // window.alert(idAttr.value);
     if (priceAtrr.value == "500"){
       this.travels = travelList.filter(obj => Number(obj.price) <= 500 ); 

     }else if(priceAtrr.value == "1000"){
       // this.travels = travelList.forEach(function (trip) {
       //          if (Number(trip.price) >= 500) {

       //             return;
       //          } 
       //      }); 
       // var query = {address: "England", name: "Mark"};

       this.travels = travelList.filter(obj => Number(obj.price) <= 1000 );         

     }else if(priceAtrr.value == "all"){
       this.travels = travelList;
     }
   
  }

  ngOnInit(): void {
    //window.alert('load');
  }

}
