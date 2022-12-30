import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmealsComponent } from './addmeals/addmeals.component';
import { DeletemealsComponent } from './deletemeals/deletemeals.component';
import { ViewmealsComponent } from './viewmeals/viewmeals.component';

const routes: Routes = [
  {
    path: 'meals', children: [
      { path: 'viewmeals', component: ViewmealsComponent },
      { path: 'addmeals', component: AddmealsComponent },
      { path: 'deletemeals', component: DeletemealsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsmgmtRoutingModule { }
