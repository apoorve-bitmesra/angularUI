import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRedDirective } from '../../directives/error-red.directive';

@NgModule({
  declarations: [ErrorRedDirective],
  imports: [
    CommonModule
  ],
  exports:[ErrorRedDirective]
})
export class CommonuiModule { }
