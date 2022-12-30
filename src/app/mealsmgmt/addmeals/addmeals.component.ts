import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantOperationsService } from '../../services/restaurant-operations.service';

@Component({
  selector: 'app-addmeals',
  templateUrl: './addmeals.component.html',
  styleUrls: ['./addmeals.component.css']
})
export class AddmealsComponent {
  constructor(private restaurantData: RestaurantOperationsService) { }
  data: any = {}
  mealsForm = new FormGroup({
    meal_type: new FormControl(''),
    content: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    image: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });


  addRestaurant() {
    console.log(this.mealsForm.value)
    this.restaurantData.addNewMeal(this.mealsForm.value).subscribe((result) => {
      console.log(result);
      this.mealsForm.reset();
    })
  }

  get name() {
    return this.mealsForm.get("name")
  }
  get meal_type() {
    return this.mealsForm.get("meal_type")
  }
  get image() {
    return this.mealsForm.get("image")
  }
  get content() {
    return this.mealsForm.get("content")
  }
}
