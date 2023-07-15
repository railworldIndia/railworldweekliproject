import { Component } from '@angular/core';
import  { faCaretDown, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  icon = faCaretDown
  user1 = faUser
  search = faMagnifyingGlass

}
