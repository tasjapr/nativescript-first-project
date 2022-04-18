import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "rewards", pathMatch: "full" },
      { path: "rewards", component: DashboardComponent },
    ]),
  ],
  declarations: [DashboardComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DashboardModule {}
