import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = fb.group({
      "firstname" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      "lastname" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      "username" : ['',Validators.required],
      "email" : ['',[
        Validators.required,
        Validators.pattern("")
      ]],
      "password" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])]
    });

    // this.signupForm.valueChanges
    //                   .filter(data => this.signupForm.valid)
    //                   .map(data => {
    //                     data.lastUpdated = new Date();
    //                     return data;
    //                   })
    //                   .subscribe(data => {
    //                     console.log(JSON.stringify(data));
    //                   });
  }

  onSubmit(){
     // console.log(JSON.stringify(this.signupForm.value)+"Form submitted successfully");
  }

  ngOnInit() {
  }

}