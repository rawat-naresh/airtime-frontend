import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { filter, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  usernameExists:boolean = false;
  signupSuccessful:boolean = false;
  signupForm : FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signupForm = fb.group({
      "firstname" : ['',[
        Validators.required,
        Validators.pattern("^([a-zA-Z]*)$"),
      ]],
      "lastname" : ['',[
        Validators.required,
        Validators.pattern("^([a-zA-Z]*)$"),
      ]],
      "username" : ['',[
        Validators.required,
        Validators.pattern("^([a-zA-Z_]*)$"),
      ]],
      "email" : ['',[
        Validators.required,
        Validators.pattern("^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$")
      ]],
      "password" : ['',Validators.compose([
        Validators.required,
        //Validators.pattern("^(a-ZA-Z)$")
      ])],
      "cpassword":['', [
        Validators.required,
      ]]

    },{validator:this.passwordMatchValidator});

  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('cpassword').value
    ? null : {'mismatch': true};
  }

  onSubmit(){
    if(this.signupForm.valid){
      console.log("okay");
      this.userService.signup(this.signupForm.value).subscribe( data => {
        console.log(data);
        this.signupSuccessful = true;
        this.signupForm.reset();
      })
      // console.log(this.signupForm.value);
    }
  }

  ngOnInit() {
    this.signupForm.controls['username'].valueChanges.pipe(
      filter( username => this.signupForm.controls['username'].valid),
      debounceTime(500),
      distinctUntilChanged(),
     ).subscribe(username => {
      this.userService.checkUser(username).subscribe(
        (data)=>{
          this.usernameExists = true;
        },
        (error)=>{
          this.usernameExists = false;
        }
    
    )
     });
  }

}