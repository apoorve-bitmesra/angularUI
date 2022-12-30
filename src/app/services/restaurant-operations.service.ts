import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestaurantOperationsService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:5000/restaurant/getRestaurants";
  addRestaurantUrl = "http://localhost:5000/restaurant/addRestaurant";
  deleteRestaurantUrl = "http://localhost:5000/restaurant/deleteRestaurantByName?name=";
  getmealsUrl = "http://localhost:5000/meals/getMeals";
  addmealsUrl = "http://localhost:5000/meals/addMeal";
  getUsers() {
    return [
      { name: "test1", email: "test1@test.com", age: 20 },
      { name: "test2", email: "test2@test.com", age: 21 },
      { name: "test3", email: "test3@test.com", age: 22 },
      { name: "test4", email: "test4@test.com", age: 23 },
    ]
  }
  getRestaurantData() {
    return this.http.get(this.url);
  }
  addNewRestaurant(data: any) {
    return this.http.post(this.addRestaurantUrl, data);
  }
  deleteRestaurant(data: any) {
    const url = this.deleteRestaurantUrl + data;
    return this.http.delete(url);
  }
  getMealsData() {
    return this.http.get(this.getmealsUrl);
  }
  addNewMeal(data: any) {
    return this.http.post(this.addmealsUrl, data);
  }
}
