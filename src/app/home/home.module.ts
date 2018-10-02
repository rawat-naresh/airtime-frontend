import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    HomeComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  
})
export class HomeModule { }
