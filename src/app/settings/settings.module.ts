import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "@nativescript/angular";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";

@NgModule({
  imports: [SettingsRoutingModule, NativeScriptFormsModule],
  declarations: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
