import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurants', loadChildren: () => import('./restaurantmgmt/restaurantmgmt.module')
      .then(mod => mod.RestaurantmgmtModule)
  },
  {
    path: 'meals', loadChildren: () => import('./mealsmgmt/mealsmgmt.module')
      .then(mod => mod.MealsmgmtModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
