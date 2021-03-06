import { Component } from "@angular/core";
import { formatNumber } from "@angular/common";
import { RouterExtensions } from "@nativescript/angular";
import { Font, Page } from "@nativescript/core";
import { Wallet } from "../@shared/wallet.model";
import { WalletsService } from "../@shared/wallets.service";
import { MonthFormatter } from "../utils/formatters/MonthFormatter";
import { PriceFormatter } from "../utils/formatters/PriceFormatter";

import { LineChart } from "@nativescript-community/ui-chart/charts/LineChart";
import { LineDataSet } from "@nativescript-community/ui-chart/data/LineDataSet";
import { LineData } from "@nativescript-community/ui-chart/data/LineData";
import { AxisDependency } from "@nativescript-community/ui-chart/components/YAxis";
import { FontStyle, FontWeight } from "@nativescript/core/ui/styling/font";

import { isIOS } from "@nativescript/core";

declare var UITableViewCellSelectionStyle;
declare var android;

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  public wallets: Array<Wallet>;

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private walletsService: WalletsService
  ) {
    this.page.actionBarHidden = true;
    this.wallets = walletsService.getUserWallets();
  }

  onItemLoading(args: any) {
    if (isIOS) {
      const cell = args.ios;
      cell.selectionStyle =
        UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    }
  }

  onLoaded(event) {
    if (event.object.android) {
      event.object.android.setSelector(
        new android.graphics.drawable.StateListDrawable()
      );
    }
  }

  onItemTap(id: number) {
    this.routerExtensions.navigate(["/wallet-details", id]);
  }

  getTotalBalance(): string {
    return this.walletsService.getTotalBalance().toString();
  }

  getBalanceChange(): string {
    let balanceChange = this.walletsService.getBalanceChange();
    let prefix: string;
    if (balanceChange > 0) prefix = "+";
    else prefix = "-";

    return prefix + balanceChange + "%";
  }

  getFormattedCurrentCost(wallet: Wallet) {
    return "$" + formatNumber(Number(wallet.currentCost), "en-US", "1.0-0");
  }

  addWallet() {
    this.wallets = this.walletsService.addWallet();
  }

  onChartLoaded(args) {
    const chart = args.object as LineChart;

    var xAxis = chart.getXAxis();
    var rAxis = chart.getAxisRight();
    var lAxis = chart.getAxisLeft();
    var labelsFont = new Font(
      "Avenir",
      13,
      FontStyle.NORMAL,
      FontWeight.MEDIUM
    );

    xAxis.setPosition(1);
    xAxis.setTextColor("#A7C1EA");
    xAxis.setAvoidFirstLastClipping(false);
    xAxis.setDrawGridLines(false);
    xAxis.setDrawAxisLine(false);
    xAxis.setValueFormatter(new MonthFormatter());
    xAxis.setTextSize(50);
    xAxis.setFont(labelsFont);

    lAxis.setEnabled(false);

    rAxis.setGridColor("#ffffff30");
    rAxis.setGranularity(3000);
    rAxis.setGranularityEnabled(true);
    rAxis.enableGridDashedLine(4, 4, 0);
    rAxis.setTextColor(chart.style.getCssVariable("--axis-text-color"));
    rAxis.setDrawAxisLine(false);
    rAxis.setValueFormatter(new PriceFormatter());
    rAxis.setFont(labelsFont);

    const sets = [];
    const data = this.walletsService.getPriceChanges();

    const set = new LineDataSet(data, "Legend Label", "index", "value");
    set.setColor(chart.style.getCssVariable("--line-color"));
    set.setLineWidth(3);
    set.setAxisDependency(AxisDependency.RIGHT);

    sets.push(set);

    // Create a data object with the data sets
    const ld = new LineData(sets);
    ld.setValueTextSize(20);

    // Set data
    chart.setData(ld);

    // get the legend (only possible after setting data)
    var legend = chart.getLegend();

    legend.setVerticalAlignment(1);
    legend.setHorizontalAlignment(0);
    legend.setForm(0);
    legend.setOrientation(1);
    legend.setDrawInside(true);
    legend.setFormSize(40);
    legend.setXEntrySpace(400);
  }
}
