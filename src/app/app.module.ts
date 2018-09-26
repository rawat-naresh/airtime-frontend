/*  */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* component imports */
import { AppComponent } from './app.component';

/* Feature module imports */
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from 'src/app/app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
