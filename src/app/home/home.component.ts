import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core";
import { Wallet } from "../@shared/wallet.model";
import { WalletsService } from "../@shared/wallets.service";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  public wallets: Array<Wallet>;

  constructor(
    private page: Page,
    private router: Router,
    private walletsService: WalletsService
  ) {
    this.page.actionBarHidden = true;
    
    this.wallets = walletsService.getUserWallets()
  }

  onItemTap(args) {
    
  }

  addWallet() {
     this.wallets = this.walletsService.addWallet();
  }
}
