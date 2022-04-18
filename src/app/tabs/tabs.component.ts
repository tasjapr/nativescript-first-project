import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "tabs",
  moduleId: module.id,
  templateUrl: "./tabs.component.html",
})
export class TabsComponent implements OnInit {
  public selectedIndex: number;

  ngOnInit() {
    this.routerExtensions.navigate(
      [
        {
          outlets: {
            homeTab: ["home"],
            notificationsTab: ["notifications"],
            dashboardTab: ["dashboard"],
            rewardsTab: ["rewards"],
            settingsTab: ["settings"],
          },
        },
      ],
      { relativeTo: this.activeRoute }
    );
  }
  homeTab: any;
  notificationsTab: any;
  dashboardTab: any;
  rewardsTab: any;
  settingsTab: any;

  constructor(
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) {
    this.homeTab = { iconSource: this.getIconSource("icn_home") };
    this.notificationsTab = {
      iconSource: this.getIconSource("icn_bell"),
    };
    this.dashboardTab = { iconSource: this.getIconSource("icn_dashboard") };
    this.rewardsTab = {
      iconSource: this.getIconSource("icn_rewards"),
    };
    this.settingsTab = {
      iconSource: this.getIconSource("icn_settings"),
    };
  }

  tabViewIndexChange(args) {
    const index = args.newIndex;
    
    this.homeTab = {
      iconSource: this.getIconSource(index === 0 ? "icn_home_selected" : "icn_home"),
    };

    this.notificationsTab = {
      iconSource: this.getIconSource(index === 1 ? "icn_bell_selected" : "icn_bell"),
    };

    this.dashboardTab = {
      iconSource: this.getIconSource(
        index === 2 ? "icn_dashboard_selected" : "icn_dashboard"
      ),
    };

    this.rewardsTab = {
      iconSource: this.getIconSource(
        index === 3 ? "icn_rewards_selected" : "icn_rewards"
      ),
    };

    this.settingsTab = {
      iconSource: this.getIconSource(index === 4 ? "icn_settings_selected" : "icn_settings"),
    };
  }

  getIconSource(icon: string): string {
    return "res://" + icon;
  }
}
