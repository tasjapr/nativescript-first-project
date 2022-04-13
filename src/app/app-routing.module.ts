import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "",
    redirectTo:
      "/(homeTab:home/default//settingsTab:settings/default)",
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "sign-up", component: SignUpComponent },
  {
    path: "home",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/home/home.module").then((m) => m.HomeModule),
    outlet: "homeTab",
  },
  {
    path: "settings",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/settings/settings.module").then((m) => m.SettingsModule),
    outlet: "settingsTab",
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
