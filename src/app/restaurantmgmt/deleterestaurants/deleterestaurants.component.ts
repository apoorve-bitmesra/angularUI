import { Component } from '@angular/core';
import { RestaurantOperationsService } from '../../services/restaurant-operations.service';

@Component({
  selector: 'app-deleterestaurants',
  templateUrl: './deleterestaurants.component.html',
  styleUrls: ['./deleterestaurants.component.css']
})
export class DeleterestaurantsComponent {
  data: any;
  response: any;
  constructor(private restaurantData: RestaurantOperationsService) {
    restaurantData.getRestaurantData().subscribe((result) => {

      console.log(result)
      this.response = result
    });
  }

  ngOnInit(): void {
  }

  deleteRestaurant(data: any) {
    this.restaurantData.deleteRestaurant(data).subscribe((res) => {
      this.restaurantData.getRestaurantData().subscribe((result) => this.response = result)
    });

  }
}
