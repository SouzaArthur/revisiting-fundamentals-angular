import { Component } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [],
    standalone: true
})
export class AppUser{
    selectedUser = DUMMY_USERS[randomUser];
}