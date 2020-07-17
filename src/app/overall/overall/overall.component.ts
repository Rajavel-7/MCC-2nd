import { Component, OnInit, NgZone } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-overall",
  templateUrl: "./overall.component.html",
  styleUrls: ["./overall.component.css"],
})
export class OverallComponent {
  test = "amber";

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  };
  public barChartLabels: Label[] = [
    "Jul-2019",
    "Aug-2019",
    "Sep-2019",
    "Oct-2019",
    "Nov-2019",
    "Dec-2019",
    "Jan-2020",
    "Feb-2020",
    "Mar-2020",
    "Apr-2020",
    "May-2020",
    "Jun-2020",
    "Jul-2020"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,81,72,66,90,92,88], label: "Availablity" },
    { data: [28, 48, 40, 19, 86, 27, 90,60,62,65,70,72,54], label: "Performance" },
    { data: [87, 80, 76, 89, 69, 90, 81,78,76,77,88,80,84], label: "Quality" },
    { data: [70, 75, 78, 66, 74, 56, 82,75,71,85,86,84,72], label: "OEE" },
  ];

  constructor() {}

  OnInit(): void {}
}
