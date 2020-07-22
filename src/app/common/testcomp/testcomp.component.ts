import { Component, OnInit } from '@angular/core';
import { BackenddataService } from 'src/app/Services/backenddata.service';
import { Metadata } from 'src/app/backend/metadata';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
  metadata:Metadata[];
  constructor(private metadataser:BackenddataService)  { }

  ngOnInit() {
    this.finaldataflow()
  }
 finaldataflow()
   {
     this.metadataser.getassetpropertyvalue().subscribe(data =>
      {
        this.metadata=data; 
      })
   }
 
}
