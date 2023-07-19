import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { faCaretDown, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  icon = faCaretDown
  user1 = faUser
  search = faMagnifyingGlass
  menuType:String="default"

  constructor(private route:Router){}

  ngOnInit(): void {
      this.route.events.subscribe((value:any)=>{

        if(value.url){
          if(localStorage.getItem('sign-in') && value.url.includes('sign-in')){
            console.warn("in profile area !");
            this.menuType="sign-in"
          }else{
            console.warn("out side profile area !");
            this.menuType="default"
          }
        }

      })
  }

}
