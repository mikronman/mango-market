import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/users/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Mango Design';

  constructor(private userService: UserService) { this.users = [];}

  users: any[];

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
