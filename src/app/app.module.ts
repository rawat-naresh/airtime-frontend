/*  */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* component imports */
import { AppComponent } from './app.component';

/* Feature module imports */
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    HomeModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
