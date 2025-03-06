import { Component, computed } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { Input, input } from "@angular/core";

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [],
    standalone: true
})
export class AppUser{
    @Input({required: true}) avatar!: string;
    @Input({required: true}) name!: string;

    get userImagePath(){
        return 'assets/users/' + this.avatar
    }

    onSelectUser(){
    }
}