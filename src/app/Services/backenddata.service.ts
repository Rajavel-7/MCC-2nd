import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Metadata } from '../backend/metadata';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackenddataService {
  private baseUrl="http://localhost:3000/AssetAPIs/getpropertyvalue/"
  propertyvalue:Observable<Metadata[]>
  constructor(private httpclient:HttpClient) {}

    getassetpropertyvalue(assetid:string){
      this.propertyvalue=this.httpclient.get<Metadata[]>(`http://localhost:3000/AssetAPIs/getpropertyvalue/${assetid}`)
      return this.propertyvalue;
    }
   }


