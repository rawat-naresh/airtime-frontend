import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
    {path:'', pathMatch:'full',redirectTo:'signup'},
    {path:'signup', loadChildren:"./signup/signup.module#SignupModule"}
    
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
    
}