import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kpi",
  templateUrl: "./kpi.component.html",
  styleUrls: ["./kpi.component.css"],
})
export class KpiComponent implements OnInit {
  gaugeType = "arch";
  gaugeAppendText = "%";
  gaugeSize = 200;
  gaugeThick = 12;
  gaugeCap = "butt";
  thresholdConfig = {
    "0": { color: "red" },
    "50": { color: "orange" },
    "78.5": { color: "green" },
  };
  oeeData1 = {
    a: {
      gaugeValue: 75,
      gaugeLabel: "Availability",
    },
    p: {
      gaugeValue: 87,
      gaugeLabel: "Performance",
    },
    q: {
      gaugeValue: 91,
      gaugeLabel: "Quality",
    },
    oee: {
      gaugeValue: 59,
      gaugeLabel: "OEE",
    },
    yield: {
      gaugeValue: 92,
      gaugeLabel: "Yield",
    },
    capacityUtil: {
      gaugeValue: 80,
      gaugeLabel: "Capacity Utilization",
    },
  };

  constructor() {}

  ngOnInit() {}
}
