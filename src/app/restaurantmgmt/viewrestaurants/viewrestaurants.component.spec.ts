import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantmgmtModule } from '../restaurantmgmt.module';
import { ViewrestaurantsComponent } from './viewrestaurants.component';

describe('ViewrestaurantsComponent', () => {
  let component: ViewrestaurantsComponent;
  let fixture: ComponentFixture<ViewrestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrestaurantsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RestaurantmgmtModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
