import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantOperationsService } from '../../services/restaurant-operations.service';

@Component({
  selector: 'app-addrestaurants',
  templateUrl: './addrestaurants.component.html',
  styleUrls: ['./addrestaurants.component.css']
})
export class AddrestaurantsComponent {
  constructor(private restaurantData: RestaurantOperationsService) { }
  data: any = {}
  restaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    location: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    image: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    cuisine: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    min_price: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    contact: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    locality: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    city: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });


  addRestaurant() {
    console.log(this.restaurantForm.value)
    this.restaurantData.addNewRestaurant(this.restaurantForm.value).subscribe((result) => {
      console.log(result);
      this.restaurantForm.reset();
    })
  }

  get name() {
    return this.restaurantForm.get("name")
  }
  get description() {
    return this.restaurantForm.get("description")
  }
  get address() {
    return this.restaurantForm.get("address")
  }
  get location() {
    return this.restaurantForm.get("location")
  }
  get image() {
    return this.restaurantForm.get("image")
  }
  get cuisine() {
    return this.restaurantForm.get("cuisine")
  }
  get min_price() {
    return this.restaurantForm.get("min_price")
  }
  get contact() {
    return this.restaurantForm.get("contact")
  }
  get locality() {
    return this.restaurantForm.get("locality")
  }
  get city() {
    return this.restaurantForm.get("city")
  }
}
