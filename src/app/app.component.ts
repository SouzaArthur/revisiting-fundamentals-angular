import { Component, input, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './header/header.component';
import { AppUser } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  imports: [AppHeader, AppUser, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'back-to-angular';
  dummyUsers = DUMMY_USERS;
  selectedUserName: string = '';

  userSelected(id: string){
    console.log("selected id: " + id); 
    var userNameSelected = DUMMY_USERS.find((item) => item.id == id)?.name
    this.selectedUserName =  userNameSelected ? userNameSelected : '';
  }
}
