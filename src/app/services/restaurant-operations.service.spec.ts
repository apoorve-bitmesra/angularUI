import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantOperationsService } from './restaurant-operations.service';

describe('RestaurantOperationsService', () => {
  let service: RestaurantOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
    });
    service = TestBed.inject(RestaurantOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
