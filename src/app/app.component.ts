import { Component, VERSION, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  alphaNumericSpecial="^[a-z]$";
 emailValue:string;
 genderValue:string;
 submitted:boolean;
  signUpForm:FormGroup;
  ngOnInit(){
    this.signUpForm=new FormGroup(
      {
       'email':new FormControl(null,[Validators.required,Validators.email]),
       'password':new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
       'confirmPassword':new FormControl(null,[Validators.required,Validators.minLength(8)]),
       'gender':new FormControl(null,Validators.required),
       'accept':new FormControl(false,Validators.requiredTrue)
      },this.ConfirmPasswordValidator);
  }
  ConfirmPasswordValidator(form:FormGroup)
  {
    return form.get('password').value==form.get('confirmPassword').value ? null:{'confirm': true};
  }
get password() { return this.signUpForm.get('password'); }
get confirmPassword() { return this.signUpForm.get('confirmPassword'); }

  onSubmit(){
    console.log(this.signUpForm);
    this.submitted=true;
    this.emailValue=this.signUpForm.get("email").value;
    this.genderValue=this.signUpForm.get("gender").value;
  }
}
