import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CentreVaccinComponent} from "./view-model/centre-vaccin/centre-vaccin.component";
import {CertifVaccinComponent} from "./view-model/certif-vaccin/certif-vaccin.component";

const routes: Routes = [
  {path: "centres", component: CentreVaccinComponent},
  {path: "certif", component: CertifVaccinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
