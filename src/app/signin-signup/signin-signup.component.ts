import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  facebook=faFacebook

  loginForm!: FormGroup;
  
  
  showSignUp=true;

  constructor(private formBuilder:FormBuilder, private router:Router, private http:HttpClient){}

  openSignUp():boolean{
    this.showSignUp=true;
    
    console.log('showsignup in opensignup method : ', this.showSignUp)
    return true;
  }
  openSignIn():boolean{
    this.showSignUp=false;
    console.log('showsignup in opensignin method : ', this.showSignUp)
    return false;
    
  }
  
  ngOnInit(): void {

     console.log('showsignup : ', this.showSignUp)
    
    if (this.openSignUp()) {
      this.loginForm = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    } else {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  }

  signIn(){
    localStorage.setItem('userid', this.loginForm.value.email)
    localStorage.setItem('password', this.loginForm.value.password)

    var body1:any;
    body1={
      "email":this.loginForm.value.email,
      "password":this.loginForm.value.password
    }
    console.log(body1)
    let useridForm = this.loginForm.value.email
   let passwordForm = this.loginForm.value.password

    const url1='http://localhost:3000/user?email=${useridForm}&password=${passwordForm}';
    this.http.get(url1).subscribe((res:any[5])=>{
      console.warn(res);

      const myMap = new Map(Object.entries(res[0]))
      let userid = myMap.get('email')
      let password = myMap.get('password')

      if(userid===useridForm && password===passwordForm){
        this.router.navigate(['/']);
      }
      
      
      
    })

  }
  
 

  signUp(){

    var body:any;
    body={
      "name":this.loginForm.value.name,
      "address":this.loginForm.value.address,
      "email":this.loginForm.value.email,
      "password":this.loginForm.value.password
    }

    localStorage.setItem('userid', this.loginForm.value.email)
    localStorage.setItem('password', this.loginForm.value.password)

    console.log(body)
    let headers= new HttpHeaders();
    // headers = headers.set('userid')
    let option:any={
      headers:headers,
      responseType:'text',
    }

    const url="http://localhost:3000/user";

    this.http.post(url, body).subscribe(( response)=>{
      console.log(response);
      
       
        this.router.navigate(['/sign-in']);
        this.openSignIn();

    })
  }

 









  

  

  
}
