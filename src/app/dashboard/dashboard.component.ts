import { Component } from "@angular/core";
import { Page } from "@nativescript/core";
@Component({
  selector: "dashboard",
  moduleId: module.id,
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }
}
