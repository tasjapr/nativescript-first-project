import { IAxisValueFormatter } from "@nativescript-community/ui-chart/formatter/IAxisValueFormatter";
import { AxisBase } from "@nativescript-community/ui-chart/components/AxisBase";
import { ViewPortHandler } from "@nativescript-community/ui-chart/utils/ViewPortHandler";

export class MonthFormatter implements IAxisValueFormatter {
  getAxisLabel(
    value: any,
    axis: AxisBase,
    viewPortHandler: ViewPortHandler
  ): string {
    var monthTitle: string;
    switch (value) {
      case 1:
        monthTitle = "Jan";
        break;

      case 2:
        monthTitle = "Feb";
        break;

      case 3:
        monthTitle = "Mar";
        break;

      case 4:
        monthTitle = "Apr";
        break;

      case 5:
        monthTitle = "May";
        break;

      case 6:
        monthTitle = "Jun";
        break;

      case 7:
        monthTitle = "Jul";
        break;

      case 8:
        monthTitle = "Aug";
        break;

      case 9:
        monthTitle = "Sep";
        break;

      case 10:
        monthTitle = "Oct";
        break;

      case 11:
        monthTitle = "Nov";
        break;

      case 12:
        monthTitle = "Dec";
        break;

      default:
        monthTitle = "";
        break;
    }

    return monthTitle;
  }
}
