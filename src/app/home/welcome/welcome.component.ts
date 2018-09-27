import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { error } from 'util';

@Component({
    selector:'app-home-welcome',
    templateUrl:'./welcome.component.html',
    styleUrls:['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
    loginGroup:FormGroup;
    constructor(
        private fb:FormBuilder,
        private userService:UserService,
    ){}

    ngOnInit(){
        this.loginGroup = this.fb.group({
            email:['',[
                Validators.required,
                Validators.pattern("^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$")
            ]],
            password:['',Validators.required]
        });
    }

    onSubmit() {
        if(this.loginGroup.valid){
            console.log(this.loginGroup.value);
            this.userService.attemptAuth(this.loginGroup.value)
                .subscribe(
                    data => {
                        //console.log(data);
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    }

}