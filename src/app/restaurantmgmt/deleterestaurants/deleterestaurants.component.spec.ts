import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantmgmtModule } from '../restaurantmgmt.module';

import { DeleterestaurantsComponent } from './deleterestaurants.component';

describe('DeleterestaurantsComponent', () => {
  let component: DeleterestaurantsComponent;
  let fixture: ComponentFixture<DeleterestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterestaurantsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RestaurantmgmtModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleterestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
