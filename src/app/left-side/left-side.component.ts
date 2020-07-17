import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  location: string;
  status: string;
  plant: string;
  region: string;
  oee:number;
  view:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { status: "./assets/images/on.png", location: "Delhi", plant: "Gear Plant", region: "India",oee:74,view:"" },
  { status: "./assets/images/off.png", location: "Chennai", plant: "Gear Plant", region: "India" , oee:80,view:""},
  { status: "./assets/images/on.png", location: "Mumbai", plant: "Gear Plant", region: "India",oee:78,view:"" },
  { status: "./assets/images/on.png", location: "Bengaluru", plant: "Gear Plant", region: "India",oee:86,view:"" },
  { status: "./assets/images/off.png", location: "Ahemdabad", plant: "Gear Palnt", region: "India",oee:88,view:"" },
  { status: "./assets/images/on.png", location: "Kolkata", plant: "Gear Palnt", region: "India",oee:90,view:"" },
];

@Component({
  selector: "app-left-side",
  templateUrl: "./left-side.component.html",
  styleUrls: ["./left-side.component.css"],
})
export class LeftSideComponent implements OnInit {
  displayedColumns: string[] = ["status", "region", "plant", "location","oee","view"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}

  rowClicked(event) {
    console.log(event);
  }
}
