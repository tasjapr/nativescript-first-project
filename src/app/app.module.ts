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
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

import { SettingsModule } from "./settings/settings.module";
import { HomeModule } from "./home/home.module";
import { CustomTabsModule } from "./tabs/customtabs.module";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    SettingsModule,
    HomeModule,
    CustomTabsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
  ],
  providers: [UserService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
