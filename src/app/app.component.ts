import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  public selectedIndex: number;

  ngOnInit() {
    this.selectedIndex = 0;
  }
  homeTab: any;
  settingsTab: any;

  constructor() {
    this.homeTab = { iconSource: this.getIconSource("icn_home_selected") };
    this.settingsTab = {
      iconSource: this.getIconSource("icn_settings_selected"),
    };
  }

  tabViewIndexChange(args) {
    const index = args.newIndex;
    this.homeTab = {
      iconSource: this.getIconSource(
        index === 0 ? "icn_home_selected" : "icn_home"
      ),
    };
    this.settingsTab = {
      iconSource: this.getIconSource(
        index === 1 ? "icn_settings_selected" : "icn_settings"
      ),
    };
  }

  getIconSource(icon: string): string {
    return "res://" + icon;
  }
}
