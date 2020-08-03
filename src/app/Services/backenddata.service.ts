import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Metadata } from "../backend/metadata";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BackenddataService {
  private baseUrl = "http://localhost:3000/AssetAPIs/getpropertyvalue/";
  propertyvalue: Observable<Metadata[]>;

  private msgstore = [];
  private msgSubject = new Subject();

  msgs = this.msgSubject.asObservable();
  constructor(private httpclient: HttpClient) {}

  getassetpropertyvalue(assetid: string) {
    this.propertyvalue = this.httpclient.get<Metadata[]>(
      `http://localhost:3000/AssetAPIs/getpropertyvalue/${assetid}`
    );
    return this.propertyvalue;
  }

  getchildassets(data: any) {
    var response = this.httpclient.post(
      "http://localhost:3000/AssetAPIs/associateAssetsByPlant",
      data
    );
    return response;
  }

  getplantlist() {
    var response = this.httpclient.get(
      `http://localhost:3000/AssetAPIs/dashboard/getplantdetails`
    );
    // this.msgstore.push(response);
    // this.msgSubject.next(this.msgstore);
    return response;
  }
}
