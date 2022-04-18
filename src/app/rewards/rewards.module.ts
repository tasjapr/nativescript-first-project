import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

import { RewardsComponent } from "./rewards.component";

@NgModule({
  imports: [
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "rewards", pathMatch: "full" },
      { path: "rewards", component: RewardsComponent },
    ]),
  ],
  declarations: [RewardsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RewardsModule {}
