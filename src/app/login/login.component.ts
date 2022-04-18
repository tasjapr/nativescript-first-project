import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";

import { User } from "../@shared/user.model";
import { UserService } from "../@shared/user.service";

@Component({
  selector: "ns-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  user: User;
  error: boolean = false;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(
    private page: Page,
    private userService: UserService,
    private routerExtensions: RouterExtensions
  ) {
    this.page.actionBarHidden = true;
    this.user = new User();
  }

  validateLoginFields() {
    let credentialsIsNotEmpty = this.user.email && this.user.password;
    return credentialsIsNotEmpty && !this.error;
  }

  submit() {
    console.log("submit()");
    this.login();
  }

  login() {
    console.log("login() - " + this.user.email);
    this.userService
      .login(this.user)
      .then(() => {
        console.log("login success");
        this.routerExtensions.navigate(["/tabs/default"], {
          clearHistory: true,
        });
      })
      .catch(() => {
        this.error = true;
        console.log("login failed");
      });
  }

  onTextChanged(){
    this.error = false;
  }

  signUp() {
    console.log("signUp()");
    this.routerExtensions.navigate(["sign-up"]);
  }

  forgotPassword() {
    console.log("forgotPassword()");
    this.routerExtensions.navigate(["/forgot-password"]);
  }
}
