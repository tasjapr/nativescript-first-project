import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private page: Page, private router: Router) {
    this.page.actionBarHidden = true;
  }
}
