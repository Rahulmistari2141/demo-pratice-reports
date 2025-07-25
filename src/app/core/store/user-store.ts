import { signal } from "@angular/core";
import { User } from "../type/user-type";

export class userStore{
    users = signal<User[]>([]);

    addUser(user:User){
        this.users.update((users) => {
            return [...users, user];
        });
    }
}