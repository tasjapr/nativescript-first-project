import { Component } from "@angular/core";
import {RouterExtensions} from "@nativescript/angular"
import { Page } from "@nativescript/core";

@Component({
  selector: "ns-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {
  constructor(private page: Page, private routerExtension: RouterExtensions) {
    this.page.actionBarHidden = true;
  }

  logout() {
    console.log("logout");
    this.routerExtension.navigateByUrl("login");
  }
}
