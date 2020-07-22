import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Metadata } from '../backend/metadata';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackenddataService {
  private baseUrl="http://localhost:3000/AssetAPIs/getpropertyvalue/6cd75400-bfc1-4ae8-a1b6-6844e9523dbd"
  propertyvalue:Observable<Metadata[]>
  constructor(private httpclient:HttpClient) {}

    getassetpropertyvalue(){
      this.propertyvalue=this.httpclient.get<Metadata[]>(this.baseUrl)
      return this.propertyvalue;
    }
   }


