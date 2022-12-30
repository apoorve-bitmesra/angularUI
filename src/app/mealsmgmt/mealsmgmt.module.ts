import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MealsmgmtRoutingModule } from './mealsmgmt-routing.module';
import { AddmealsComponent } from './addmeals/addmeals.component';
import { DeletemealsComponent } from './deletemeals/deletemeals.component';
import { ViewmealsComponent } from './viewmeals/viewmeals.component';
import { CommonuiModule } from '../common/commonui/commonui.module';

@NgModule({
  declarations: [
    AddmealsComponent,
    DeletemealsComponent,
    ViewmealsComponent
  ],
  imports: [
    CommonModule,
    MealsmgmtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonuiModule,
    NgbDropdownModule
  ]
})
export class MealsmgmtModule { }
