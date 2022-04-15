import { IAxisValueFormatter } from "@nativescript-community/ui-chart/formatter/IAxisValueFormatter";
import { AxisBase } from "@nativescript-community/ui-chart/components/AxisBase";
import { ViewPortHandler } from "@nativescript-community/ui-chart/utils/ViewPortHandler";

export class PriceFormatter implements IAxisValueFormatter {
  getAxisLabel(
    value: any,
    axis: AxisBase,
    viewPortHandler: ViewPortHandler
  ): string {
    return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
