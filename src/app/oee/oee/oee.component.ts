import { Component, OnInit, NgZone } from "@angular/core";

/* Imports AMChart */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

//am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-oee",
  templateUrl: "./oee.component.html",
  styleUrls: ["./oee.component.css"],
})
export class OeeComponent implements OnInit {
  gaugeType = "full";
  gaugeAppendText = "%";
  gaugeSize = 200;
  gaugeThick = 8;
  gaugeCap = "round";
  thresholdConfig = {
    "0": { color: "red" },
    "50": { color: "orange" },
    "78.5": { color: "green" },
  };
  oeeData1 = {
    a: {
      gaugeValue: 87,
      gaugeLabel: "AVAILABILITY",
    },
    p: {
      gaugeValue: 67,
      gaugeLabel: "PERFORMANCE",
    },
    q: {
      gaugeValue: 91,
      gaugeLabel: "QUALITY",
    },
    oee: {
      gaugeValue: 76,
      gaugeLabel: "OEE",
    },
  };
  private chart1: am4charts.XYChart;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    console.log(data);
  }

  //get OEE trend
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let gData = [];

      //console.log(data);
      // Create chart instance
      let chart = am4core.create("oeeChartDiv1", am4charts.XYChart);

      //json Payload
      data["data"].forEach((e) => {
        let a = Math.round(e.Availability);
        let p = Math.round(e.Performance);
        let q = Math.round(e.Quality);
        let oee = Math.round(e.OEE);
        gData.push({ a: a, p: p, q: q, oee: oee, Sdate: e.Sdate });
      });
      //console.log(gData);

      // Add data
      chart.data = gData; //data["data"];

      // Set input format for the dates
      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      //XY Axis Labels
      dateAxis.title.text = "Date";
      valueAxis.title.text = "Percentage";

      //Chart Title
      let title = chart.titles.create();
      title.text = "OEE Trend";
      title.fontSize = 20;
      title.marginBottom = 5;

      // Create series for Availability----------------------------------------------------
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "a";
      series.dataFields.dateX = "Sdate";
      series.tooltipText = "{valueY}";
      series.tensionX = 0.9;
      series.strokeWidth = 2;
      series.minBulletDistance = 15;
      series.stroke = am4core.color("rgb(233, 30, 99)");

      // Drop-shaped tooltips
      series.tooltip.background.cornerRadius = 10;
      series.tooltip.background.strokeOpacity = 0;
      series.tooltip.pointerOrientation = "right";
      series.tooltip.label.minWidth = 40;
      series.tooltip.label.minHeight = 40;
      series.tooltip.label.textAlign = "middle";
      series.tooltip.label.textValign = "middle";

      // Make bullets grow on hover
      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color("#fff");

      let bullethover = bullet.states.create("hover");
      bullethover.properties.scale = 1.3;

      // Create series for Performance-------------------------------------------------
      let seriesP = chart.series.push(new am4charts.LineSeries());
      seriesP.dataFields.valueY = "p";
      seriesP.dataFields.dateX = "Sdate";
      seriesP.tooltipText = "{valueY}";
      seriesP.tensionX = 0.8;
      seriesP.strokeWidth = 2;
      seriesP.minBulletDistance = 15;
      seriesP.stroke = am4core.color("rgb(156, 39, 176)");

      // Drop-shaped tooltips
      seriesP.tooltip.background.cornerRadius = 10;
      seriesP.tooltip.background.strokeOpacity = 0;
      seriesP.tooltip.pointerOrientation = "right";
      seriesP.tooltip.label.minWidth = 40;
      seriesP.tooltip.label.minHeight = 40;
      seriesP.tooltip.label.textAlign = "middle";
      seriesP.tooltip.label.textValign = "middle";

      // Make bullets grow on hover
      let bulletP = seriesP.bullets.push(new am4charts.CircleBullet());
      bulletP.circle.strokeWidth = 2;
      bulletP.circle.radius = 4;
      bulletP.circle.fill = am4core.color("#fff");

      let bullethoverP = bulletP.states.create("hover");
      bullethoverP.properties.scale = 1.3;

      //Create series for Quality ------------------------------------------------
      let seriesQ = chart.series.push(new am4charts.LineSeries());
      seriesQ.dataFields.valueY = "q";
      seriesQ.dataFields.dateX = "Sdate";
      seriesQ.tooltipText = "{valueY}";
      seriesQ.tensionX = 0.8;
      seriesQ.strokeWidth = 2;
      seriesQ.minBulletDistance = 15;
      seriesQ.stroke = am4core.color("rgb(1, 224, 224)");

      // Drop-shaped tooltips
      seriesQ.tooltip.background.cornerRadius = 10;
      seriesQ.tooltip.background.strokeOpacity = 0;
      seriesQ.tooltip.pointerOrientation = "right";
      seriesQ.tooltip.label.minWidth = 40;
      seriesQ.tooltip.label.minHeight = 40;
      seriesQ.tooltip.label.textAlign = "middle";
      seriesQ.tooltip.label.textValign = "middle";

      // Make bullets grow on hover
      let bulletQ = seriesQ.bullets.push(new am4charts.CircleBullet());
      bulletQ.circle.strokeWidth = 2;
      bulletQ.circle.radius = 4;
      bulletQ.circle.fill = am4core.color("#fff");

      let bullethoverQ = bulletQ.states.create("hover");
      bullethoverQ.properties.scale = 1.3;

      //Create series for OEE --------------------------------------------------------
      let seriesO = chart.series.push(new am4charts.LineSeries());
      seriesO.dataFields.valueY = "oee";
      seriesO.dataFields.dateX = "Sdate";
      seriesO.tooltipText = "OEE:{valueY}";
      seriesO.tensionX = 0.8;
      seriesO.strokeWidth = 2;
      seriesO.minBulletDistance = 15;
      seriesO.stroke = am4core.color("rgb(1, 120, 1)");

      // Drop-shaped tooltips
      seriesO.tooltip.background.cornerRadius = 10;
      seriesO.tooltip.background.strokeOpacity = 0;
      seriesO.tooltip.pointerOrientation = "right";
      seriesO.tooltip.label.minWidth = 40;
      seriesO.tooltip.label.minHeight = 40;
      seriesO.tooltip.label.textAlign = "middle";
      seriesO.tooltip.label.textValign = "middle";

      // Make bullets grow on hover
      let bulletO = seriesO.bullets.push(new am4charts.CircleBullet());
      bulletO.circle.strokeWidth = 2;
      bulletO.circle.radius = 4;
      bulletO.circle.fill = am4core.color("#fff");

      let bullethoverO = bulletO.states.create("hover");
      bullethoverO.properties.scale = 1.3;

      // Make a panning cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panXY";
      chart.cursor.xAxis = dateAxis;
      chart.cursor.snapToSeries = series;

      // Create vertical scrollbar and place it before the value axis
      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.parent = chart.leftAxesContainer;
      chart.scrollbarY.toBack();

      // Create a horizontal scrollbar with previe and place it underneath the date axis
      let scrollbarX1 = new am4charts.XYChartScrollbar();
      scrollbarX1.series.push(series);
      chart.scrollbarX = scrollbarX1;
      chart.scrollbarX.minHeight = 15;
      chart.scrollbarX.parent = chart.bottomAxesContainer;

      dateAxis.start = 0.79;
      dateAxis.keepSelection = true;

      this.chart1 = chart;
    });
  }
}

const data = {
  data: [
    {
      Availability: 93.728,
      Goal: 4502,
      GoodPart: 1962.0,
      OEE: 89.976,
      Performance: 96.682,
      PotentialPartCount: 1853.5,
      Quality: 99.291,
      Sdate: "2019-11-01",
      StaticGoal: 3706,
    },
    {
      Availability: 90.625,
      Goal: 3782,
      GoodPart: 2120.0,
      OEE: 93.28,
      Performance: 103.318,
      PotentialPartCount: 1931.8,
      Quality: 99.624,
      Sdate: "2019-11-02",
      StaticGoal: 3782,
    },
    {
      Availability: 83.674,
      Goal: 5284,
      GoodPart: 2564.0,
      OEE: 67.661,
      Performance: 80.957,
      PotentialPartCount: 3221.1,
      Quality: 99.883,
      Sdate: "2019-11-03",
      StaticGoal: 5284,
    },
    {
      Availability: 84.084,
      Goal: 9234,
      GoodPart: 5007.0,
      OEE: 85.11,
      Performance: 101.563,
      PotentialPartCount: 5000.5,
      Quality: 99.662,
      Sdate: "2019-11-04",
      StaticGoal: 9232,
    },
    {
      Availability: 81.449,
      Goal: 7941,
      GoodPart: 5760.0,
      OEE: 90.989,
      Performance: 113.012,
      PotentialPartCount: 5380.9,
      Quality: 98.85,
      Sdate: "2019-11-05",
      StaticGoal: 7941,
    },
    {
      Availability: 73.262,
      Goal: 7505,
      GoodPart: 5841.0,
      OEE: 84.376,
      Performance: 115.722,
      PotentialPartCount: 5884.2,
      Quality: 99.523,
      Sdate: "2019-11-06",
      StaticGoal: 7505,
    },
    {
      Availability: 85.037,
      Goal: 8272,
      GoodPart: 4729.0,
      OEE: 83.114,
      Performance: 98.462,
      PotentialPartCount: 4836.3,
      Quality: 99.265,
      Sdate: "2019-11-07",
      StaticGoal: 8272,
    },
    {
      Availability: 90.638,
      Goal: 3017,
      GoodPart: 2059.0,
      OEE: 89.265,
      Performance: 99.394,
      PotentialPartCount: 1960.6,
      Quality: 99.086,
      Sdate: "2019-11-08",
      StaticGoal: 3016,
    },
    {
      Availability: 90.628,
      Goal: 3842,
      GoodPart: 2020.0,
      OEE: 86.537,
      Performance: 96.337,
      PotentialPartCount: 1984.1,
      Quality: 99.117,
      Sdate: "2019-11-09",
      StaticGoal: 3842,
    },
    {
      Availability: 93.39,
      Goal: 3619,
      GoodPart: 1996.0,
      OEE: 95.911,
      Performance: 103.317,
      PotentialPartCount: 1768.9,
      Quality: 99.402,
      Sdate: "2019-11-10",
      StaticGoal: 3619,
    },
    {
      Availability: 56.121,
      Goal: 7552,
      GoodPart: 3314.0,
      OEE: 57.62,
      Performance: 103.229,
      PotentialPartCount: 4888.8,
      Quality: 99.46,
      Sdate: "2019-11-11",
      StaticGoal: 7552,
    },
    {
      Availability: 70.295,
      Goal: 7626,
      GoodPart: 3490.0,
      OEE: 63.693,
      Performance: 92.062,
      PotentialPartCount: 4657.5,
      Quality: 98.421,
      Sdate: "2019-11-12",
      StaticGoal: 7626,
    },
    {
      Availability: 59.621,
      Goal: 10078,
      GoodPart: 2904.0,
      OEE: 40.151,
      Performance: 70.846,
      PotentialPartCount: 6147.8,
      Quality: 95.057,
      Sdate: "2019-11-13",
      StaticGoal: 10078,
    },
    {
      Availability: 63.798,
      Goal: 4708,
      GoodPart: 2483.0,
      OEE: 62.157,
      Performance: 98.566,
      PotentialPartCount: 3395.5,
      Quality: 98.846,
      Sdate: "2019-11-14",
      StaticGoal: 4708,
    },
    {
      Availability: 0.0,
      Goal: 791,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2019-11-15",
      StaticGoal: 791,
    },
    {
      Availability: 86.028,
      Goal: 3244,
      GoodPart: 1140.0,
      OEE: 67.294,
      Performance: 78.498,
      PotentialPartCount: 1440.0,
      Quality: 99.65,
      Sdate: "2019-11-16",
      StaticGoal: 3244,
    },
    {
      Availability: 62.899,
      Goal: 1202,
      GoodPart: 498.0,
      OEE: 40.541,
      Performance: 65.749,
      PotentialPartCount: 1044.1,
      Quality: 98.031,
      Sdate: "2019-11-17",
      StaticGoal: 1202,
    },
    {
      Availability: 62.891,
      Goal: 4318,
      GoodPart: 2469.0,
      OEE: 57.43,
      Performance: 90.318,
      PotentialPartCount: 3654.3,
      Quality: 101.106,
      Sdate: "2019-11-18",
      StaticGoal: 4318,
    },
    {
      Availability: 81.075,
      Goal: 7579,
      GoodPart: 3812.0,
      OEE: 75.881,
      Performance: 94.208,
      PotentialPartCount: 4270.1,
      Quality: 99.348,
      Sdate: "2019-11-19",
      StaticGoal: 7579,
    },
    {
      Availability: 72.326,
      Goal: 8500,
      GoodPart: 4397.0,
      OEE: 66.093,
      Performance: 91.34,
      PotentialPartCount: 5654.8,
      Quality: 100.046,
      Sdate: "2019-11-20",
      StaticGoal: 8500,
    },
    {
      Availability: 62.788,
      Goal: 11116,
      GoodPart: 4799.0,
      OEE: 49.817,
      Performance: 81.209,
      PotentialPartCount: 8188.3,
      Quality: 97.7,
      Sdate: "2019-11-21",
      StaticGoal: 11116,
    },
    {
      Availability: 0.0,
      Goal: 6187,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2019-11-22",
      StaticGoal: 6187,
    },
    {
      Availability: 83.414,
      Goal: 6002,
      GoodPart: 1993.0,
      OEE: 79.226,
      Performance: 94.693,
      PotentialPartCount: 2138.3,
      Quality: 100.302,
      Sdate: "2019-11-25",
      StaticGoal: 6002,
    },
    {
      Availability: 85.334,
      Goal: 6285,
      GoodPart: 3415.0,
      OEE: 89.4,
      Performance: 104.98,
      PotentialPartCount: 3246.9,
      Quality: 99.795,
      Sdate: "2019-11-26",
      StaticGoal: 6285,
    },
    {
      Availability: 79.789,
      Goal: 12000,
      GoodPart: 6171.0,
      OEE: 64.26,
      Performance: 81.96,
      PotentialPartCount: 8162.7,
      Quality: 98.264,
      Sdate: "2019-11-27",
      StaticGoal: 12000,
    },
    {
      Availability: 0.0,
      Goal: 9514,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2019-11-28",
      StaticGoal: 9514,
    },
    {
      Availability: 0.0,
      Goal: 9514,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2019-11-29",
      StaticGoal: 9514,
    },
    {
      Availability: 0.0,
      Goal: 6300,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2019-11-30",
      StaticGoal: 6300,
    },
    {
      Availability: 91.928,
      Goal: 3977,
      GoodPart: 1902.0,
      OEE: 86.133,
      Performance: 94.14,
      PotentialPartCount: 1877.0,
      Quality: 99.529,
      Sdate: "2019-12-01",
      StaticGoal: 3977,
    },
    {
      Availability: 78.916,
      Goal: 11323,
      GoodPart: 6376.0,
      OEE: 64.773,
      Performance: 84.073,
      PotentialPartCount: 8367.1,
      Quality: 97.627,
      Sdate: "2019-12-02",
      StaticGoal: 11323,
    },
    {
      Availability: 78.868,
      Goal: 12419,
      GoodPart: 6489.0,
      OEE: 69.216,
      Performance: 89.06,
      PotentialPartCount: 7968.8,
      Quality: 98.542,
      Sdate: "2019-12-03",
      StaticGoal: 12419,
    },
    {
      Availability: 66.444,
      Goal: 10083,
      GoodPart: 4998.0,
      OEE: 55.567,
      Performance: 84.651,
      PotentialPartCount: 7645.4,
      Quality: 98.794,
      Sdate: "2019-12-04",
      StaticGoal: 9287,
    },
    {
      Availability: 49.963,
      Goal: 11809,
      GoodPart: 3663.0,
      OEE: 42.518,
      Performance: 86.144,
      PotentialPartCount: 7322.9,
      Quality: 98.786,
      Sdate: "2019-12-05",
      StaticGoal: 11809,
    },
    {
      Availability: 22.051,
      Goal: 8349,
      GoodPart: 2371.0,
      OEE: 16.721,
      Performance: 76.342,
      PotentialPartCount: 12052.8,
      Quality: 99.33,
      Sdate: "2019-12-09",
      StaticGoal: 8349,
    },
    {
      Availability: 25.796,
      Goal: 9488,
      GoodPart: 2834.0,
      OEE: 21.457,
      Performance: 84.355,
      PotentialPartCount: 11226.6,
      Quality: 98.608,
      Sdate: "2019-12-10",
      StaticGoal: 9487,
    },
    {
      Availability: 26.181,
      Goal: 6809,
      GoodPart: 2102.0,
      OEE: 22.222,
      Performance: 85.604,
      PotentialPartCount: 8040.2,
      Quality: 99.151,
      Sdate: "2019-12-11",
      StaticGoal: 6809,
    },
    {
      Availability: 26.782,
      Goal: 6844,
      GoodPart: 2107.0,
      OEE: 22.201,
      Performance: 83.682,
      PotentialPartCount: 8067.0,
      Quality: 99.06,
      Sdate: "2019-12-12",
      StaticGoal: 6844,
    },
    {
      Availability: 0.018,
      Goal: 4527,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2019-12-13",
      StaticGoal: 4527,
    },
    {
      Availability: 0.0,
      Goal: 4377,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2019-12-14",
      StaticGoal: 4377,
    },
    {
      Availability: 14.842,
      Goal: 7636,
      GoodPart: 1478.0,
      OEE: 11.959,
      Performance: 82.32,
      PotentialPartCount: 10505.1,
      Quality: 97.881,
      Sdate: "2019-12-15",
      StaticGoal: 7636,
    },
    {
      Availability: 25.656,
      Goal: 11041,
      GoodPart: 3255.0,
      OEE: 20.254,
      Performance: 80.083,
      PotentialPartCount: 13660.3,
      Quality: 98.577,
      Sdate: "2019-12-16",
      StaticGoal: 11041,
    },
    {
      Availability: 21.424,
      Goal: 9903,
      GoodPart: 2394.0,
      OEE: 19.978,
      Performance: 93.678,
      PotentialPartCount: 10185.7,
      Quality: 99.543,
      Sdate: "2019-12-17",
      StaticGoal: 9901,
    },
    {
      Availability: 43.997,
      Goal: 14166,
      GoodPart: 5975.0,
      OEE: 53.269,
      Performance: 123.971,
      PotentialPartCount: 9534.2,
      Quality: 97.663,
      Sdate: "2019-12-18",
      StaticGoal: 14166,
    },
    {
      Availability: 67.465,
      Goal: 14772,
      GoodPart: 5894.0,
      OEE: 44.624,
      Performance: 80.048,
      PotentialPartCount: 11226.9,
      Quality: 82.63,
      Sdate: "2019-12-19",
      StaticGoal: 14772,
    },
    {
      Availability: 46.114,
      Goal: 6473,
      GoodPart: 1877.0,
      OEE: 43.386,
      Performance: 104.912,
      PotentialPartCount: 3677.3,
      Quality: 89.68,
      Sdate: "2019-12-20",
      StaticGoal: 6473,
    },
    {
      Availability: 70.826,
      Goal: 10996,
      GoodPart: 1705.0,
      OEE: 42.439,
      Performance: 62.662,
      PotentialPartCount: 3414.9,
      Quality: 95.625,
      Sdate: "2020-01-02",
      StaticGoal: 10996,
    },
    {
      Availability: 86.228,
      Goal: 6485,
      GoodPart: 3806.0,
      OEE: 91.967,
      Performance: 109.85,
      PotentialPartCount: 3517.7,
      Quality: 97.092,
      Sdate: "2020-01-03",
      StaticGoal: 6485,
    },
    {
      Availability: 51.107,
      Goal: 8731,
      GoodPart: 1419.0,
      OEE: 40.961,
      Performance: 81.955,
      PotentialPartCount: 2944.6,
      Quality: 97.795,
      Sdate: "2020-01-04",
      StaticGoal: 8731,
    },
    {
      Availability: 85.549,
      Goal: 3693,
      GoodPart: 1694.0,
      OEE: 73.977,
      Performance: 87.137,
      PotentialPartCount: 1946.4,
      Quality: 99.238,
      Sdate: "2020-01-05",
      StaticGoal: 3693,
    },
    {
      Availability: 72.412,
      Goal: 9300,
      GoodPart: 4756.0,
      OEE: 70.981,
      Performance: 99.507,
      PotentialPartCount: 5695.3,
      Quality: 98.509,
      Sdate: "2020-01-06",
      StaticGoal: 9300,
    },
    {
      Availability: 72.416,
      Goal: 8025,
      GoodPart: 4762.0,
      OEE: 67.952,
      Performance: 95.49,
      PotentialPartCount: 5956.7,
      Quality: 98.267,
      Sdate: "2020-01-07",
      StaticGoal: 8024,
    },
    {
      Availability: 73.404,
      Goal: 10813,
      GoodPart: 5686.0,
      OEE: 61.496,
      Performance: 95.094,
      PotentialPartCount: 7859.2,
      Quality: 88.1,
      Sdate: "2020-01-08",
      StaticGoal: 10813,
    },
    {
      Availability: 86.14,
      Goal: 11024,
      GoodPart: 5084.0,
      OEE: 86.366,
      Performance: 101.643,
      PotentialPartCount: 5003.6,
      Quality: 98.642,
      Sdate: "2020-01-09",
      StaticGoal: 11023,
    },
    {
      Availability: 54.341,
      Goal: 6005,
      GoodPart: 2393.0,
      OEE: 67.34,
      Performance: 125.527,
      PotentialPartCount: 3020.6,
      Quality: 98.721,
      Sdate: "2020-01-10",
      StaticGoal: 6005,
    },
    {
      Availability: 0.0,
      Goal: 3997,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2020-01-11",
      StaticGoal: 3997,
    },
    {
      Availability: 0.0,
      Goal: 3997,
      GoodPart: 0.0,
      OEE: 0.0,
      Performance: 0.0,
      PotentialPartCount: 0.0,
      Quality: 0.0,
      Sdate: "2020-01-12",
      StaticGoal: 3997,
    },
    {
      Availability: 65.102,
      Goal: 10021,
      GoodPart: 5057.0,
      OEE: 53.749,
      Performance: 97.614,
      PotentialPartCount: 7997.3,
      Quality: 84.579,
      Sdate: "2020-01-13",
      StaticGoal: 10021,
    },
    {
      Availability: 76.465,
      Goal: 13114,
      GoodPart: 7134.0,
      OEE: 66.201,
      Performance: 91.88,
      PotentialPartCount: 9159.8,
      Quality: 94.228,
      Sdate: "2020-01-14",
      StaticGoal: 12714,
    },
    {
      Availability: 72.212,
      Goal: 9615,
      GoodPart: 6560.0,
      OEE: 70.764,
      Performance: 99.25,
      PotentialPartCount: 7879.7,
      Quality: 98.736,
      Sdate: "2020-01-15",
      StaticGoal: 9212,
    },
    {
      Availability: 67.675,
      Goal: 14573,
      GoodPart: 7930.0,
      OEE: 65.887,
      Performance: 98.819,
      PotentialPartCount: 10230.4,
      Quality: 98.522,
      Sdate: "2020-01-16",
      StaticGoal: 14573,
    },
    {
      Availability: 68.697,
      Goal: 10490,
      GoodPart: 5239.0,
      OEE: 74.63,
      Performance: 109.881,
      PotentialPartCount: 5967.0,
      Quality: 98.868,
      Sdate: "2020-01-17",
      StaticGoal: 10490,
    },
    {
      Availability: 87.821,
      Goal: 3824,
      GoodPart: 1699.0,
      OEE: 74.085,
      Performance: 80.734,
      PotentialPartCount: 1949.3,
      Quality: 104.49,
      Sdate: "2020-01-18",
      StaticGoal: 3824,
    },
    {
      Availability: 81.741,
      Goal: 3842,
      GoodPart: 1635.0,
      OEE: 69.696,
      Performance: 85.368,
      PotentialPartCount: 1994.0,
      Quality: 99.878,
      Sdate: "2020-01-19",
      StaticGoal: 3842,
    },
    {
      Availability: 80.941,
      Goal: 11525,
      GoodPart: 5782.0,
      OEE: 72.162,
      Performance: 91.128,
      PotentialPartCount: 6810.6,
      Quality: 97.834,
      Sdate: "2020-01-20",
      StaticGoal: 11525,
    },
    {
      Availability: 79.365,
      Goal: 12237,
      GoodPart: 6462.0,
      OEE: 74.435,
      Performance: 95.356,
      PotentialPartCount: 7379.2,
      Quality: 98.356,
      Sdate: "2020-01-21",
      StaticGoal: 12237,
    },
    {
      Availability: 76.269,
      Goal: 14135,
      GoodPart: 7237.0,
      OEE: 67.176,
      Performance: 89.221,
      PotentialPartCount: 9157.2,
      Quality: 98.718,
      Sdate: "2020-01-22",
      StaticGoal: 14134,
    },
    {
      Availability: 71.536,
      Goal: 13022,
      GoodPart: 7293.0,
      OEE: 63.106,
      Performance: 90.078,
      PotentialPartCount: 9823.2,
      Quality: 97.932,
      Sdate: "2020-01-23",
      StaticGoal: 13022,
    },
    {
      Availability: 59.284,
      Goal: 7275,
      GoodPart: 1927.0,
      OEE: 51.063,
      Performance: 84.121,
      PotentialPartCount: 3207.7,
      Quality: 102.391,
      Sdate: "2020-01-24",
      StaticGoal: 7275,
    },
    {
      Availability: 52.763,
      Goal: 3867,
      GoodPart: 2020.0,
      OEE: 51.303,
      Performance: 98.388,
      PotentialPartCount: 3346.8,
      Quality: 98.826,
      Sdate: "2020-01-25",
      StaticGoal: 3867,
    },
    {
      Availability: 64.531,
      Goal: 4610,
      GoodPart: 1882.0,
      OEE: 59.882,
      Performance: 93.091,
      PotentialPartCount: 2671.4,
      Quality: 99.682,
      Sdate: "2020-01-26",
      StaticGoal: 4610,
    },
    {
      Availability: 83.593,
      Goal: 13088,
      GoodPart: 5425.0,
      OEE: 69.298,
      Performance: 83.693,
      PotentialPartCount: 6654.2,
      Quality: 99.051,
      Sdate: "2020-01-27",
      StaticGoal: 13088,
    },
    {
      Availability: 84.115,
      Goal: 15159,
      GoodPart: 7387.0,
      OEE: 75.571,
      Performance: 91.071,
      PotentialPartCount: 8308.7,
      Quality: 98.651,
      Sdate: "2020-01-28",
      StaticGoal: 15159,
    },
    {
      Availability: 72.097,
      Goal: 13108,
      GoodPart: 7174.0,
      OEE: 62.841,
      Performance: 88.498,
      PotentialPartCount: 9703.7,
      Quality: 98.49,
      Sdate: "2020-01-29",
      StaticGoal: 13108,
    },
    {
      Availability: 55.854,
      Goal: 14207,
      GoodPart: 4551.0,
      OEE: 46.609,
      Performance: 85.3,
      PotentialPartCount: 8299.6,
      Quality: 97.829,
      Sdate: "2020-01-30",
      StaticGoal: 14207,
    },
    {
      Availability: 67.439,
      Goal: 10650,
      GoodPart: 4678.0,
      OEE: 59.487,
      Performance: 88.454,
      PotentialPartCount: 6684.3,
      Quality: 99.723,
      Sdate: "2020-01-31",
      StaticGoal: 10650,
    },
    {
      Availability: 86.202,
      Goal: 7644,
      GoodPart: 3254.0,
      OEE: 70.358,
      Performance: 81.72,
      PotentialPartCount: 3931.2,
      Quality: 99.877,
      Sdate: "2020-02-01",
      StaticGoal: 7644,
    },
    {
      Availability: 83.907,
      Goal: 7615,
      GoodPart: 3496.0,
      OEE: 73.895,
      Performance: 88.017,
      PotentialPartCount: 4021.4,
      Quality: 100.057,
      Sdate: "2020-02-02",
      StaticGoal: 7615,
    },
    {
      Availability: 83.099,
      Goal: 11223,
      GoodPart: 5637.0,
      OEE: 74.379,
      Performance: 90.189,
      PotentialPartCount: 6441.9,
      Quality: 99.243,
      Sdate: "2020-02-03",
      StaticGoal: 11223,
    },
    {
      Availability: 74.731,
      Goal: 16245,
      GoodPart: 7805.0,
      OEE: 68.65,
      Performance: 92.887,
      PotentialPartCount: 9663.9,
      Quality: 98.898,
      Sdate: "2020-02-04",
      StaticGoal: 16245,
    },
    {
      Availability: 79.078,
      Goal: 11780,
      GoodPart: 6616.0,
      OEE: 76.139,
      Performance: 96.952,
      PotentialPartCount: 7386.0,
      Quality: 99.31,
      Sdate: "2020-02-05",
      StaticGoal: 11779,
    },
    {
      Availability: 76.525,
      Goal: 12454,
      GoodPart: 5826.0,
      OEE: 73.728,
      Performance: 96.858,
      PotentialPartCount: 6716.7,
      Quality: 99.471,
      Sdate: "2020-02-06",
      StaticGoal: 12454,
    },
    {
      Availability: 73.295,
      Goal: 11738,
      GoodPart: 6242.0,
      OEE: 69.786,
      Performance: 95.853,
      PotentialPartCount: 7602.8,
      Quality: 99.332,
      Sdate: "2020-02-07",
      StaticGoal: 11738,
    },
    {
      Availability: 65.894,
      Goal: 4631,
      GoodPart: 2025.0,
      OEE: 65.116,
      Performance: 99.063,
      PotentialPartCount: 2643.4,
      Quality: 99.754,
      Sdate: "2020-02-08",
      StaticGoal: 4631,
    },
    {
      Availability: 89.273,
      Goal: 3810,
      GoodPart: 2017.0,
      OEE: 87.27,
      Performance: 99.161,
      PotentialPartCount: 1964.5,
      Quality: 98.583,
      Sdate: "2020-02-09",
      StaticGoal: 3810,
    },
    {
      Availability: 86.558,
      Goal: 11353,
      GoodPart: 5940.0,
      OEE: 77.022,
      Performance: 89.777,
      PotentialPartCount: 6555.3,
      Quality: 99.116,
      Sdate: "2020-02-10",
      StaticGoal: 11353,
    },
    {
      Availability: 85.473,
      Goal: 12197,
      GoodPart: 6318.0,
      OEE: 81.21,
      Performance: 97.028,
      PotentialPartCount: 6612.9,
      Quality: 97.923,
      Sdate: "2020-02-11",
      StaticGoal: 12197,
    },
    {
      Availability: 76.988,
      Goal: 12263,
      GoodPart: 6419.0,
      OEE: 74.933,
      Performance: 98.923,
      PotentialPartCount: 7281.4,
      Quality: 98.391,
      Sdate: "2020-02-12",
      StaticGoal: 12263,
    },
    {
      Availability: 80.18,
      Goal: 14309,
      GoodPart: 8031.0,
      OEE: 76.067,
      Performance: 96.299,
      PotentialPartCount: 8974.1,
      Quality: 98.516,
      Sdate: "2020-02-13",
      StaticGoal: 14309,
    },
    {
      Availability: 69.223,
      Goal: 9393,
      GoodPart: 6209.0,
      OEE: 65.307,
      Performance: 95.543,
      PotentialPartCount: 8081.3,
      Quality: 98.744,
      Sdate: "2020-02-14",
      StaticGoal: 9393,
    },
    {
      Availability: 85.282,
      Goal: 2198,
      GoodPart: 1489.0,
      OEE: 68.727,
      Performance: 81.725,
      PotentialPartCount: 1841.6,
      Quality: 98.609,
      Sdate: "2020-02-15",
      StaticGoal: 2198,
    },
    {
      Availability: 85.428,
      Goal: 3790,
      GoodPart: 1826.0,
      OEE: 78.403,
      Performance: 93.586,
      PotentialPartCount: 1979.6,
      Quality: 98.067,
      Sdate: "2020-02-16",
      StaticGoal: 3790,
    },
    {
      Availability: 88.574,
      Goal: 9237,
      GoodPart: 7599.0,
      OEE: 80.135,
      Performance: 91.46,
      PotentialPartCount: 8060.3,
      Quality: 98.92,
      Sdate: "2020-02-17",
      StaticGoal: 9237,
    },
    {
      Availability: 86.318,
      Goal: 7737,
      GoodPart: 6484.0,
      OEE: 81.747,
      Performance: 96.194,
      PotentialPartCount: 6742.0,
      Quality: 98.451,
      Sdate: "2020-02-18",
      StaticGoal: 7736,
    },
    {
      Availability: 80.858,
      Goal: 9847,
      GoodPart: 7525.0,
      OEE: 73.518,
      Performance: 91.804,
      PotentialPartCount: 8700.3,
      Quality: 99.039,
      Sdate: "2020-02-19",
      StaticGoal: 9847,
    },
    {
      Availability: 71.558,
      Goal: 10191,
      GoodPart: 7357.0,
      OEE: 70.173,
      Performance: 100.091,
      PotentialPartCount: 8911.5,
      Quality: 97.976,
      Sdate: "2020-02-20",
      StaticGoal: 10191,
    },
    {
      Availability: 72.326,
      Goal: 6031,
      GoodPart: 4523.0,
      OEE: 72.4,
      Performance: 100.39,
      PotentialPartCount: 5310.2,
      Quality: 99.713,
      Sdate: "2020-02-21",
      StaticGoal: 6031,
    },
    {
      Availability: 88.396,
      Goal: 2219,
      GoodPart: 1729.0,
      OEE: 75.376,
      Performance: 85.32,
      PotentialPartCount: 1949.8,
      Quality: 99.942,
      Sdate: "2020-02-22",
      StaticGoal: 2219,
    },
    {
      Availability: 78.82,
      Goal: 2809,
      GoodPart: 2146.0,
      OEE: 73.818,
      Performance: 94.876,
      PotentialPartCount: 2471.1,
      Quality: 98.712,
      Sdate: "2020-02-23",
      StaticGoal: 2809,
    },
    {
      Availability: 87.029,
      Goal: 9473,
      GoodPart: 7568.0,
      OEE: 77.557,
      Performance: 90.376,
      PotentialPartCount: 8294.3,
      Quality: 98.606,
      Sdate: "2020-02-24",
      StaticGoal: 9473,
    },
    {
      Availability: 80.17,
      Goal: 10125,
      GoodPart: 7487.0,
      OEE: 72.081,
      Performance: 90.907,
      PotentialPartCount: 8828.9,
      Quality: 98.904,
      Sdate: "2020-02-25",
      StaticGoal: 10125,
    },
    {
      Availability: 75.809,
      Goal: 10666,
      GoodPart: 7605.0,
      OEE: 68.771,
      Performance: 90.931,
      PotentialPartCount: 9399.7,
      Quality: 99.764,
      Sdate: "2020-02-26",
      StaticGoal: 10666,
    },
    {
      Availability: 79.699,
      Goal: 10243,
      GoodPart: 7668.0,
      OEE: 72.662,
      Performance: 92.312,
      PotentialPartCount: 8970.0,
      Quality: 98.764,
      Sdate: "2020-02-27",
      StaticGoal: 10243,
    },
    {
      Availability: 77.354,
      Goal: 9985,
      GoodPart: 7047.0,
      OEE: 67.583,
      Performance: 87.939,
      PotentialPartCount: 8863.1,
      Quality: 99.351,
      Sdate: "2020-02-28",
      StaticGoal: 9985,
    },
    {
      Availability: 68.014,
      Goal: 2999,
      GoodPart: 2005.0,
      OEE: 65.797,
      Performance: 96.982,
      PotentialPartCount: 2590.2,
      Quality: 99.751,
      Sdate: "2020-02-29",
      StaticGoal: 2999,
    },
    {
      Availability: 88.458,
      Goal: 2252,
      GoodPart: 1825.0,
      OEE: 78.856,
      Performance: 89.389,
      PotentialPartCount: 1967.2,
      Quality: 99.727,
      Sdate: "2020-03-01",
      StaticGoal: 2252,
    },
    {
      Availability: 85.948,
      Goal: 8044,
      GoodPart: 6384.0,
      OEE: 77.35,
      Performance: 90.772,
      PotentialPartCount: 7015.4,
      Quality: 99.146,
      Sdate: "2020-03-02",
      StaticGoal: 8044,
    },
    {
      Availability: 82.32,
      Goal: 7901,
      GoodPart: 6620.0,
      OEE: 80.846,
      Performance: 97.304,
      PotentialPartCount: 6960.1,
      Quality: 100.93,
      Sdate: "2020-03-03",
      StaticGoal: 7901,
    },
    {
      Availability: 76.0,
      Goal: 8421,
      GoodPart: 5716.0,
      OEE: 65.888,
      Performance: 86.695,
      PotentialPartCount: 7374.0,
      Quality: 100.0,
      Sdate: "2020-03-04",
      StaticGoal: 8421,
    },
    {
      Availability: 71.005,
      Goal: 6943,
      GoodPart: 4525.0,
      OEE: 62.196,
      Performance: 88.581,
      PotentialPartCount: 6184.1,
      Quality: 98.885,
      Sdate: "2020-03-05",
      StaticGoal: 6943,
    },
    {
      Availability: 84.011,
      Goal: 5764,
      GoodPart: 4695.0,
      OEE: 78.287,
      Performance: 93.663,
      PotentialPartCount: 5097.6,
      Quality: 99.491,
      Sdate: "2020-03-06",
      StaticGoal: 5764,
    },
    {
      Availability: 87.068,
      Goal: 4433,
      GoodPart: 3133.0,
      OEE: 69.084,
      Performance: 79.724,
      PotentialPartCount: 3854.8,
      Quality: 99.524,
      Sdate: "2020-03-07",
      StaticGoal: 4433,
    },
    {
      Availability: 88.307,
      Goal: 4486,
      GoodPart: 3275.0,
      OEE: 71.345,
      Performance: 81.754,
      PotentialPartCount: 3901.8,
      Quality: 98.823,
      Sdate: "2020-03-08",
      StaticGoal: 4486,
    },
    {
      Availability: 66.777,
      Goal: 7772,
      GoodPart: 4851.0,
      OEE: 55.872,
      Performance: 70.803,
      PotentialPartCount: 7380.0,
      Quality: 118.173,
      Sdate: "2020-03-09",
      StaticGoal: 7772,
    },
    {
      Availability: 81.877,
      Goal: 7383,
      GoodPart: 6058.0,
      OEE: 75.26,
      Performance: 79.325,
      PotentialPartCount: 6842.0,
      Quality: 115.876,
      Sdate: "2020-03-10",
      StaticGoal: 7383,
    },
    {
      Availability: 82.324,
      Goal: 5692,
      GoodPart: 4724.0,
      OEE: 76.223,
      Performance: 77.792,
      PotentialPartCount: 5268.0,
      Quality: 119.022,
      Sdate: "2020-03-11",
      StaticGoal: 5692,
    },
    {
      Availability: 84.94,
      Goal: 5643,
      GoodPart: 4591.0,
      OEE: 72.538,
      Performance: 68.509,
      PotentialPartCount: 5379.7,
      Quality: 124.654,
      Sdate: "2020-03-12",
      StaticGoal: 5643,
    },
    {
      Availability: 63.184,
      Goal: 4423,
      GoodPart: 2707.0,
      OEE: 47.823,
      Performance: 48.93,
      PotentialPartCount: 4811.4,
      Quality: 154.686,
      Sdate: "2020-03-13",
      StaticGoal: 4423,
    },
    {
      Availability: 17.443,
      Goal: 111,
      GoodPart: 14.0,
      OEE: 9.783,
      Performance: 64.095,
      PotentialPartCount: 121.6,
      Quality: 87.5,
      Sdate: "2020-03-14",
      StaticGoal: 111,
    },
    {
      Availability: 87.752,
      Goal: 2257,
      GoodPart: 1824.0,
      OEE: 78.802,
      Performance: 89.9,
      PotentialPartCount: 1967.5,
      Quality: 99.89,
      Sdate: "2020-03-15",
      StaticGoal: 2257,
    },
    {
      Availability: 70.038,
      Goal: 5945,
      GoodPart: 331.0,
      OEE: 63.749,
      Performance: 75.072,
      PotentialPartCount: 441.3,
      Quality: 121.245,
      Sdate: "2020-03-16",
      StaticGoal: 5944,
    },
  ],
  schema: {
    fields: [
      {
        name: "Sdate",
        type: "string",
      },
      {
        name: "GoodPart",
        type: "number",
      },
      {
        name: "OEE",
        type: "number",
      },
      {
        name: "PotentialPartCount",
        type: "number",
      },
      {
        name: "Availability",
        type: "number",
      },
      {
        name: "Quality",
        type: "number",
      },
      {
        name: "Performance",
        type: "number",
      },
      {
        name: "Goal",
        type: "integer",
      },
      {
        name: "StaticGoal",
        type: "integer",
      },
    ],
    pandas_version: "0.20.0",
    primaryKey: ["Sdate"],
  },
};
