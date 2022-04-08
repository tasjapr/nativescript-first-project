import { Wallet } from "./wallet.model";
import { Injectable } from "@angular/core";

var wallets: Array<Wallet>;

@Injectable()
export class WalletsService {
  getUserWallets() {
    wallets = [
      {
        name: "Bitcoin",
        shortName: "BTC",
        change: -1.2,
        currentCost: 4050,
        iconUrl: "res://btc_icon",
        totalBalance: 0.85,
      },
      {
        name: "Etherium",
        shortName: "ETH",
        change: 1.21,
        currentCost: 3000,
        iconUrl: "res://eth_icon",
        totalBalance: 1.04,
      },
      {
        name: "Peercoin",
        shortName: "PRC",
        change: 5.68,
        currentCost: 500,
        iconUrl: "res://per_icon",
        totalBalance: 2.96,
      },
    ];
    return wallets;
  }

  addWallet() {
    wallets.push({
      name: `New Coin ${wallets.length - 2}`,
      shortName: "NEW",
      change: 0.0,
      currentCost: 0,
      iconUrl: "res://per_icon",
      totalBalance: 0.0,
    });

    return wallets;
  }
}
