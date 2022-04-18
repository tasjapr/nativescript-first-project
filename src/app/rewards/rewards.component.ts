import { Component } from "@angular/core";
import { Page } from "@nativescript/core";

@Component({
  selector: "rewards",
  moduleId: module.id,
  templateUrl: "./rewards.component.html",
})
export class RewardsComponent {
  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }
}
