import { User } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  register(user: User) {
    return new Promise((resolve, reject) => {});
  }

  login(user: User) {
    if (user.email === "aaa") {
      return Promise.reject("Invalid password");
    } else {
      return Promise.resolve();
    }
  }

  resetPassword(email: String) {
    return new Promise((resolve, reject) => {});
  }
}
