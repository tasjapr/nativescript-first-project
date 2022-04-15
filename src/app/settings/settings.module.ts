import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

import { SettingsComponent } from "./settings.component";

@NgModule({
  imports: [
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "settings", pathMatch: "full" },
      { path: "settings", component: SettingsComponent },
    ]),
  ],
  declarations: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
