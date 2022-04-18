import { Wallet } from "./wallet.model";
import { Injectable } from "@angular/core";
import { formatNumber } from "@angular/common";

var wallets: Array<Wallet>;

@Injectable()
export class WalletsService {
  getTotalBalance() {
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
        id: 0,
        name: "Bitcoin",
        shortName: "BTC",
        change: -1.25,
        balance: 3.6,
        iconUrl: "res://btc_icon",
        currentCost: 15400,
      },
      {
        id: 1,
        name: "Etherium",
        shortName: "ETH",
        change: 7.21,
        balance: 10.2,
        iconUrl: "res://eth_icon",
        currentCost: 5010.04,
      },
      {
        id: 2,
        name: "Peercoin",
        shortName: "PRC",
        change: 5.68,
        balance: 8.951,
        iconUrl: "res://per_icon",
        currentCost: 1508.96,
      },
    ];
    return wallets;
  }

  addWallet() {
    wallets.push({
      id: wallets.length - 1,
      name: `New Coin ${wallets.length - 2}`,
      shortName: "NEW",
      change: 0.0,
      balance: 0,
      iconUrl: "res://per_icon",
      currentCost: 0.0,
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

  getWalletById(id: number): Wallet {
    return wallets.find((item) => {
      return item.id === id;
    });
  }
}
