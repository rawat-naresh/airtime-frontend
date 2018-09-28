import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup.routing.module'
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    SharedModule
  ],
  declarations: [
      SignupComponent
  ]
})
export class SignupModule { }
