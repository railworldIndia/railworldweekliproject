import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  showSignUp=false;

  constructor(private router:Router, private formbuilder:FormsModule){}
  ngOnInit(): void {
    this.openSingUp();
  }




  SubmitForm(data:any):any{
    console.log(data);

  }

  openSingUp(){

    this.showSignUp=true;
  }
  openSingIn(){
    this.showSignUp=false;
  }


  

}
