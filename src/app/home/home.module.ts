import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule
} from "@nativescript/angular";

import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    HomeRoutingModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    NativeScriptUIChartModule,
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
