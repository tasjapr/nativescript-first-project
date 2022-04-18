import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

import { NotificationsComponent } from "./notifications.component";

@NgModule({
  imports: [
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "notifications", pathMatch: "full" },
      { path: "notifications", component: NotificationsComponent },
    ]),
  ],
  declarations: [NotificationsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NotificationsModule {}
