import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
    {path:'signup', loadChildren:"./signup/signup.module#SignupModule"}
    
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
    
}