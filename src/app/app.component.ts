import { Component, input, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './header/header.component';
import { AppUser } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [AppHeader, AppUser],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'back-to-angular';
  dummyUsers = DUMMY_USERS;
}
