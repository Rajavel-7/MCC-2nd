import { Component, OnInit, ViewChild } from "@angular/core";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { Router } from "@angular/router";
import { ChartType } from "angular-google-charts";

@Component({
  selector: "app-googlemapdemo",
  templateUrl: "./googlemapdemo.component.html",
  styleUrls: ["./googlemapdemo.component.css"],
})
export class GooglemapdemoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    google.charts.setOnLoadCallback(this.drawRegionsMap);
  }

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  center = { lat: 23.68515838949394, lng: 83.09564445951632 };
  markerOptions: google.maps.MapOptions = {
    draggable: false,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#1d2c4d",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8ec3b9",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1a3646",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#64779e",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#334e87",
          },
        ],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#023e58",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#283d6a",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6f9ba5",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#023e58",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3C7680",
          },
        ],
      },
      {
        featureType: "road",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#304a7d",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#2c6675",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#255763",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#b0d5ce",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#023e58",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#283d6a",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#3a4762",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#0e1626",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#4e6d70",
          },
        ],
      },
    ],
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    // { lat: 28.328174876337695, lng: 77.14867119632329 },
    // { lat: 22.699784325991246, lng: 73.28148369632329 },
    // { lat: 12.923834230264506, lng: 77.58812432132329 },
    // { lat: 20.411158799184783, lng: 79.43382744632329 },
    // { lat: 17.586013487569705, lng: 81.01585869632329 },
    // { lat: 19.25369529920001, lng: 72.84203057132329 },
    // { lat: 11.651332771966269, lng: 79.060546875 },
    { lat: 13.0827, lng: 80.2707 },
    { lat: 26.4499, lng: 80.3319 },
    { lat: 22.992, lng: 72.3773 },
  ];
  zoom = 4;

  display?: google.maps.LatLngLiteral;

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
    console.log(this.markerPositions);
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
    //console.log(this.display);
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
    console.log(marker.getPosition().toJSON());
    console.log(marker);
  }

  navigateToOEE(marker: MapMarker) {
    this.router.navigate(["/overall"]);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ["Country", "Popularity"],
      ["Germany", 200],
      ["United States", 300],
      ["Brazil", 400],
      ["Canada", 500],
      ["France", 600],
      ["RU", 700],
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(
      document.getElementById("regions_div")
    );

    chart.draw(data, options);
  }
}
