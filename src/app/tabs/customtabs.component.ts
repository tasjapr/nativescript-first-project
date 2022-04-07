import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ns-tabs",
  templateUrl: "./customtabs.component.html",
  styleUrls: ["./customtabs.component.css"],
})
export class CustomTabsComponent implements OnInit {
  public homeTab: any;
  public settingsTab: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.navigate(
      [
        {
          outlets: {
            homeTab: ["home"],
            settingsTab: ["settings"],
          },
        },
      ],
      {
        relativeTo: this.route,
      }
    );
  }
}