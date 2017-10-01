import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // calling the auth service to check the login status in view
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
