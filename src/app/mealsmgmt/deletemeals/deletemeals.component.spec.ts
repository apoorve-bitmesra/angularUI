import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealsmgmtModule } from '../mealsmgmt.module';

import { DeletemealsComponent } from './deletemeals.component';

describe('DeletemealsComponent', () => {
  let component: DeletemealsComponent;
  let fixture: ComponentFixture<DeletemealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemealsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MealsmgmtModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletemealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
