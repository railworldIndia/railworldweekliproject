import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faTwitter, faInstagram, faGoogle, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit{
  twitter = faTwitter
  insta = faInstagram
  linkedin=faLinkedin
  facbook=faFacebook

  formLogin = FormGroup;
  showSignUp=false;

  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signIn(data:any){
    console.log(data);
  }

  openSignUp(){
    this.showSignUp=true;
  }
  openSignIn(){
    this.showSignUp=false;
  }


  
}
