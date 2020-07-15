import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  location: string;
  status: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { status: 1, location: "Delhi", weight: 1.0079, symbol: "H" },
  { status: 2, location: "Chennai", weight: 4.0026, symbol: "He" },
  { status: 3, location: "Mumbai", weight: 6.941, symbol: "Li" },
  { status: 4, location: "Bengaluru", weight: 9.0122, symbol: "Be" },
  { status: 5, location: "Ahemdabad", weight: 10.811, symbol: "B" },
];

@Component({
  selector: "app-left-side",
  templateUrl: "./left-side.component.html",
  styleUrls: ["./left-side.component.css"],
})
export class LeftSideComponent implements OnInit {
  displayedColumns: string[] = ["status", "location", "weight", "symbol"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}

  rowClicked(event) {
    console.log(event);
  }
}
