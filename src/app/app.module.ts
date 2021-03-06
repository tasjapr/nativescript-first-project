import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptModule,
  NativeScriptCommonModule,
  registerElement,
} from "@nativescript/angular";

import { UserService } from "./@shared/user.service";
import { WalletsService } from "./@shared/wallets.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { WalletDetailsComponent } from "./wallet-details/wallet-details.component";

import { TabsModule } from "./tabs/tabs.module";
import { HomeModule } from "./home/home.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { RewardsModule } from "./rewards/rewards.module";
import { SettingsModule } from "./settings/settings.module";

registerElement(
  "LineChart",
  () => require("@nativescript-community/ui-chart/charts").LineChart
);

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TabsModule,
    NotificationsModule,
    DashboardModule,
    RewardsModule,
    SettingsModule,
    HomeModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    WalletDetailsComponent,
  ],
  providers: [UserService, WalletsService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
