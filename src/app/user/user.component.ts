import { Component, signal, computed } from "@angular/core";
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
    selectedUser = signal(DUMMY_USERS[randomUser]);
    userImagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);

    onSelectUser(){
        const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
        this.selectedUser.set(DUMMY_USERS[randomUser]);
    }
}