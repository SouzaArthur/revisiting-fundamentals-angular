import { Component } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { Input, Output, EventEmitter} from "@angular/core";

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
    @Input({required: true}) id!: string;

    @Output() userSelected = new EventEmitter<string>();

    get userImagePath(){
        return 'assets/users/' + this.avatar
    }

    onSelectUser(){
        this.userSelected.emit(this.id);
    }
}