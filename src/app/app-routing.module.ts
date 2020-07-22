import { NgModule, TestabilityRegistry } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { OeeComponent } from "./oee/oee/oee.component";
import { OverallComponent } from "./overall/overall/overall.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestcompComponent } from './common/testcomp/testcomp.component';

const routes: Routes = [
  { path: "test", component: TestcompComponent },
  { path: "", component: LandingPageComponent },
  {
    path: "overall",
    component: DashboardComponent,
    children: [
      { path: "", component: OverallComponent },
      { path: "oee", component: OeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
