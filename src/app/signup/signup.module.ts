import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup.routing.module'


@NgModule({
  imports: [
    ReactiveFormsModule,
    SignupRoutingModule
  ],
  declarations: [
      SignupComponent
  ]
})
export class SignupModule { }
