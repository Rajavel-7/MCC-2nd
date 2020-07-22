import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module";
import { NgxGaugeModule } from "ngx-gauge";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { NgChartjsModule } from "ng-chartjs";
import { ChartsModule } from "ng2-charts";
import { OeeComponent } from "./oee/oee/oee.component";
import { OverallComponent } from "./overall/overall/overall.component";
import { GooglemapdemoComponent } from "./mapDemo/googlemapdemo/googlemapdemo.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { GoogleChartsModule } from 'angular-google-charts';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { KpiComponent } from './kpi/kpi.component';
import { HttpClientModule } from '@angular/common/http';
import { BackenddataService } from './Services/backenddata.service';
import { TestcompComponent } from './common/testcomp/testcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OeeComponent,
    OverallComponent,
    GooglemapdemoComponent,
    LandingPageComponent,
    LeftSideComponent,
    KpiComponent,
    TestcompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleChartsModule,
    GoogleMapsModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule,
    NgChartjsModule,
    NgxGaugeModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [BackenddataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
