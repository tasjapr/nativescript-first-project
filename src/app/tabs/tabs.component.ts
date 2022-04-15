import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "tabs",
  moduleId: module.id,
  templateUrl: "./tabs.component.html"
})
export class TabsComponent implements OnInit {
  public selectedIndex: number;

  ngOnInit() {
    this.routerExtension.navigate(
      [{ outlets: { homeTab: ["home"], settingsTab: ["settings"] } }],
      { relativeTo: this.activeRoute }
    );
  }
  homeTab: any;
  settingsTab: any;

  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) {
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
