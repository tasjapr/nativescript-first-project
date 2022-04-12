import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { CustomTabsComponent } from "./tabs/customtabs.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/tabs", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "sign-up", component: SignUpComponent },

  {
    path: "tabs",
    component: CustomTabsComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
        component: NSEmptyOutletComponent,
        outlet: "homeTab",
      },
      {
        path: "settings",
        loadChildren: () => import("./settings/settings.module").then(m => m.SettingsModule),
        component: NSEmptyOutletComponent,
        outlet: "settingsTab",
      },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
