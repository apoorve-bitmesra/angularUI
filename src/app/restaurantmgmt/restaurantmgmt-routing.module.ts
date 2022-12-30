import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrestaurantsComponent } from './addrestaurants/addrestaurants.component';
import { DeleterestaurantsComponent } from './deleterestaurants/deleterestaurants.component';
import { ViewrestaurantsComponent } from './viewrestaurants/viewrestaurants.component';

const routes: Routes = [
  {
    path: 'restaurants', children: [
      { path: '', component: ViewrestaurantsComponent },
      { path: 'viewrestaurants', component: ViewrestaurantsComponent },
      { path: 'addrestaurants', component: AddrestaurantsComponent },
      { path: 'deleterestaurants', component: DeleterestaurantsComponent },
    ],
  },
  { path: '', component: ViewrestaurantsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantmgmtRoutingModule { }
