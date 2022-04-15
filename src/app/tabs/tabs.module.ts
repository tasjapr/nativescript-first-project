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
