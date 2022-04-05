import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core";

@Component({
  selector: "ns-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent {
  constructor(private page: Page, private router: Router) {
    this.page.actionBarHidden = true;
  }
}
