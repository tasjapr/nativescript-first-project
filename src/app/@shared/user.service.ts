import { User } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  register(user: User) {
    return new Promise((resolve, reject) => {});
  }

  login(user: User) {
    return new Promise((resolve, reject) => {});
  }

  resetPassword(email: String) {
    return new Promise((resolve, reject) => {});
  }
}
