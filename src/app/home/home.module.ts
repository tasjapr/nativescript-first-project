import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    NativeScriptUIChartModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
