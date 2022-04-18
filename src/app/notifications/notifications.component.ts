import { Component } from "@angular/core";
import { Page } from "@nativescript/core";
@Component({
  selector: "notifications",
  moduleId: module.id,
  templateUrl: "./notifications.component.html",
})
export class NotificationsComponent {
  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }
}
