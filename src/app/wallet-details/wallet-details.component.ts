import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";
import { ActivatedRoute } from "@angular/router";
import { Wallet } from "../@shared/wallet.model";
import { Subscription } from "rxjs";
import { RouterExtensions } from "@nativescript/angular";

import { WalletsService } from "../@shared/wallets.service";

@Component({
  selector: "wallet-details",
  moduleId: module.id,
  templateUrl: "./wallet-details.component.html",
})
export class WalletDetailsComponent implements OnInit {
  wallet: Wallet;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private page: Page,
    private walletsService: WalletsService,
    private routerExtensions: RouterExtensions
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      const id = +params["id"];
      this.wallet = this.walletsService.getWalletById(id);
      console.log(this.wallet);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.routerExtensions.back();
  }
}
