import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core";

import { User } from "../@shared/user.model";
import { UserService } from "../@shared/user.service";

@Component({
  selector: "ns-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  user: User;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(
    private page: Page,
    private userService: UserService,
    private router: Router
  ) {
    this.page.actionBarHidden = true;
    this.user = new User();
  }

  validateLoginFields() {
    return this.user.email && this.user.password;
  }

  submit() {
    console.log("submit()");
    this.login();
  }

  login() {
    console.log("login()");
    this.userService
      .login(this.user)
      .then(() => {
        this.router.navigate(["/home"]);
      })
      .catch(() => {
        //show error
      });
  }

  signUp() {
    console.log("signUp()");
    this.router.navigate(["/sign-up"]);
  }

  forgotPassword() {
    console.log("forgotPassword()");
    this.router.navigate(["/forgot-password"]);
  }
}
