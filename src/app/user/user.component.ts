import { Component, signal, computed } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { Input } from "@angular/core";

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [],
    standalone: true
})
export class AppUser{
    @Input() avatar!: string;
    @Input() name!: string;

    get userImagePath(){
        return 'assets/users/' + this.avatar
    }

    onSelectUser(){
    }
}