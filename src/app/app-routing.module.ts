import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';



const routes: Routes = [{
    path: "", component:HomeComponent
  },{
    path: "travel-detail/:id", component:TravelDetailComponent
  },{
    path: "myCart", component:CartsComponent
  },{
    path: "blog", component:BlogComponent
  },{
    path: "travels", component:TravelsComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
