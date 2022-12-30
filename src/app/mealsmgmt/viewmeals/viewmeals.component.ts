import { Component } from '@angular/core';
import { RestaurantOperationsService } from '../../services/restaurant-operations.service';

@Component({
  selector: 'app-viewmeals',
  templateUrl: './viewmeals.component.html',
  styleUrls: ['./viewmeals.component.css']
})
export class ViewmealsComponent {
  data: any;
  response: any;
  constructor(private restaurantData: RestaurantOperationsService) {
    restaurantData.getMealsData().subscribe((result) => {

      console.log(result)
      this.response = result
    });
  }
}
