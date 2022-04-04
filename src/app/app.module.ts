import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptModule,
} from "@nativescript/angular";
import { UserService } from "./@shared/user.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
  ],
  declarations: [AppComponent, LoginComponent],
  providers: [UserService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
