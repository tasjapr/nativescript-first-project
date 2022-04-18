import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { WalletDetailsComponent } from "./wallet-details/wallet-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabs/default",
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "wallet-details/:id", component: WalletDetailsComponent },
  {
    path: "tabs",
    loadChildren: () =>
      import("~/app/tabs/tabs.module").then((m) => m.TabsModule),
  },
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(
      routes
      //  { enableTracing: true }
    ),
  ],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
