import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealsmgmtModule } from '../mealsmgmt.module';

import { AddmealsComponent } from './addmeals.component';

describe('AddmealsComponent', () => {
  let component: AddmealsComponent;
  let fixture: ComponentFixture<AddmealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmealsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MealsmgmtModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
