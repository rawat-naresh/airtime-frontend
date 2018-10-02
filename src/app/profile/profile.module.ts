import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileResolver } from './profile-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent
  ],
  providers:[ProfileResolver]
})
export class ProfileModule { }
