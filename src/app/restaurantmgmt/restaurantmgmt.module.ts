import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantmgmtRoutingModule } from './restaurantmgmt-routing.module';
import { AddrestaurantsComponent } from './addrestaurants/addrestaurants.component';
import { DeleterestaurantsComponent } from './deleterestaurants/deleterestaurants.component';
import { ViewrestaurantsComponent } from './viewrestaurants/viewrestaurants.component';
import { CommonuiModule } from '../common/commonui/commonui.module';

@NgModule({
  declarations: [
    AddrestaurantsComponent,
    DeleterestaurantsComponent,
    ViewrestaurantsComponent
  ],
  imports: [
    CommonModule,
    RestaurantmgmtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonuiModule
  ]
})
export class RestaurantmgmtModule { }
