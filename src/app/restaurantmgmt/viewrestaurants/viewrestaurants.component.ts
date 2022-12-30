import { Component } from '@angular/core';
import { RestaurantOperationsService } from '../../services/restaurant-operations.service';

@Component({
  selector: 'app-viewrestaurants',
  templateUrl: './viewrestaurants.component.html',
  styleUrls: ['./viewrestaurants.component.css']
})
export class ViewrestaurantsComponent {
  data: any;
  response: any;
  constructor(private restaurantData: RestaurantOperationsService) {
    restaurantData.getRestaurantData().subscribe((result) => {

      console.log(result)
      this.response = result
    });
  }

}
