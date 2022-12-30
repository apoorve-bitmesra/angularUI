import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealsmgmtModule } from '../mealsmgmt.module';

import { ViewmealsComponent } from './viewmeals.component';

describe('ViewmealsComponent', () => {
  let component: ViewmealsComponent;
  let fixture: ComponentFixture<ViewmealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewmealsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MealsmgmtModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewmealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
