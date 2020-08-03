import { Component, OnInit } from "@angular/core";
import { BackenddataService } from "../Services/backenddata.service";

export interface PeriodicElement {
  plantLocation: string;
  plantStatus: string;
  plantName: string;
  plantOEE: number;
  plantId: string;
  plantLatLong: string;
  childID: string;
  childName: string;
  // status: String;
  // location: String;
  // plant: String;
  // region: String;
  // oee: number;
  // view: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     status: "./assets/images/on.png",
//     location: "Chennai",
//     plant: "Gear Plant",
//     region: "India",
//     oee: 74,
//     view: "",
//   },
//   {
//     status: "./assets/images/off.png",
//     location: "Kanpur",
//     plant: "Gear Plant",
//     region: "India",
//     oee: 80,
//     view: "",
//   },
//   {
//     status: "./assets/images/on.png",
//     location: "Sanad",
//     plant: "Assembly Plant",
//     region: "India",
//     oee: 78,
//     view: "",
//   },
//   {
//     status: "./assets/images/on.png",
//     location: "Bengaluru",
//     plant: "Gear Plant",
//     region: "India",
//     oee: 86,
//     view: "",
//   },
//   {
//     status: "./assets/images/off.png",
//     location: "Ahemdabad",
//     plant: "Gear Plant",
//     region: "India",
//     oee: 88,
//     view: "",
//   },
//   {
//     status: "./assets/images/on.png",
//     location: "Kolkata",
//     plant: "Gear Plant",
//     region: "India",
//     oee: 90,
//     view: "",
//   },
// ];

@Component({
  selector: "app-left-side",
  templateUrl: "./left-side.component.html",
  styleUrls: ["./left-side.component.css"],
})
export class LeftSideComponent implements OnInit {
  displayedColumns: string[] = ["status", "plant", "location", "oee", "view"];
  // dataSource = ELEMENT_DATA;
  dataSource;

  constructor(private backendService: BackenddataService) {}

  ngOnInit() {
    this.backendService.getplantlist().subscribe((data) => {
      console.log(data);
      //   const ELEMENT_DATA : PeriodicElement[] <any> = data;
      //  var  dataSource = ELEMENT_DATA;
      //var dataSource = data;
      this.dataSource = data;
    });
    // console.log("test");
    // console.log(this.backendService.msgs);
  }

  rowClicked(event) {
    console.log(event);
  }
}
