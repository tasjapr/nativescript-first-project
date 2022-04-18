import { Wallet } from "./wallet.model";
import { Injectable } from "@angular/core";
import { formatNumber } from "@angular/common";

var wallets: Array<Wallet>;

@Injectable()
export class WalletsService {
  getCurrentBalance() {
    let balance = 0.0;
    wallets.map((w) => {
      balance += w.currentCost;
    });
    return formatNumber(Number(balance), "en-US", "1.0-0");
  }

  getBalanceChange() {
    let balanceChange = 0.0;
    wallets.map((w) => {
      balanceChange = balanceChange + w.change;
    });
    return Math.round(balanceChange * 100) / 100;
  }

  getUserWallets() {
    wallets = [
      {
        name: "Bitcoin",
        shortName: "BTC",
        change: -1.25,
        currentCost: 15416.2,
        iconUrl: "res://btc_icon",
        totalBalance: 3.62,
      },
      {
        name: "Etherium",
        shortName: "ETH",
        change: 7.21,
        currentCost: 5009,
        iconUrl: "res://eth_icon",
        totalBalance: 10.04,
      },
      {
        name: "Peercoin",
        shortName: "PRC",
        change: 5.68,
        currentCost: 1500.00999,
        iconUrl: "res://per_icon",
        totalBalance: 8.96,
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

  getPriceChanges() {
    var data = [
      { index: 6, value: 20500 },
      { index: 6.5, value: 22000 },
      { index: 7, value: 24000 },
      { index: 7.5, value: 21400 },
      { index: 8, value: 17000 },
      { index: 8.5, value: 18800 },
      { index: 9, value: 22700 },
    ];

    return data;
  }
}
