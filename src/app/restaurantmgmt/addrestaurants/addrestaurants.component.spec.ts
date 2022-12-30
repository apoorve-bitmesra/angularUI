import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantmgmtModule } from '../restaurantmgmt.module';

import { AddrestaurantsComponent } from './addrestaurants.component';

describe('AddrestaurantsComponent', () => {
  let component: AddrestaurantsComponent;
  let fixture: ComponentFixture<AddrestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddrestaurantsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RestaurantmgmtModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddrestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
