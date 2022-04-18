import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

import { TabsComponent } from "./tabs.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
        path: "default",
        component: TabsComponent,
        children: [
          {
            path: "home",
            outlet: "homeTab",
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import("~/app/home/home.module").then((m) => m.HomeModule),
          },
          {
            path: "notifications",
            outlet: "notificationsTab",
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import("~/app/notifications/notifications.module").then(
                (m) => m.NotificationsModule
              ),
          },
          {
            path: "dashboard",
            outlet: "dashboardTab",
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import("~/app/dashboard/dashboard.module").then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: "rewards",
            outlet: "rewardsTab",
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import("~/app/rewards/rewards.module").then(
                (m) => m.RewardsModule
              ),
          },
          {
            path: "settings",
            outlet: "settingsTab",
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import("~/app/settings/settings.module").then(
                (m) => m.SettingsModule
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [TabsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TabsModule {}
