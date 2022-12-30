import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RestaurantmgmtModule } from './restaurantmgmt/restaurantmgmt.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MealsmgmtModule } from './mealsmgmt/mealsmgmt.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantmgmtModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MealsmgmtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
