import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentreVaccinComponent } from './view-model/centre-vaccin/centre-vaccin.component';
import { CertifVaccinComponent } from './view-model/certif-vaccin/certif-vaccin.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CentreVaccinComponent,
    CertifVaccinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
