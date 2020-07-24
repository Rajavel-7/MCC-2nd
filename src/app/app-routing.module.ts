import { NgModule, TestabilityRegistry } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { OeeComponent } from "./oee/oee/oee.component";
import { OverallComponent } from "./overall/overall/overall.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestcompComponent } from './common/testcomp/testcomp.component';
import { LoginComponent } from './Login/login/login.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: LandingPageComponent },
  {
    path: "overall",
    component: OverallComponent,
//children: [
  //    { path: "", component: OverallComponent },
  //    { path: "oee", component: OeeComponent },
  //  ],
  },
  { path: "overall/:plant/:location", component: OverallComponent },
  { path: "overall/:plant", component:OverallComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
