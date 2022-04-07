import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "@nativescript/angular";

import { CustomTabsComponent } from "./customtabs.component";

@NgModule({
  imports: [NativeScriptFormsModule],
  declarations: [CustomTabsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CustomTabsModule {}
