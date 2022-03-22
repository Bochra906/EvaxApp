import { Component, OnInit } from '@angular/core';
import { CentreVaccination } from "../../model/entity/CentreVaccination";
import { CentreVaccinationDao } from "../../model/dao/CentreVaccinationDao";

@Component({
  selector: 'app-centre-vaccin',
  templateUrl: '../../view/centre-vaccin/centre-vaccin.component.html',
  styleUrls: ['../../view/centre-vaccin/centre-vaccin.component.css']
})
export class CentreVaccinComponent implements OnInit {
  centreVaccinations: CentreVaccination[];

  constructor() {
    this.centreVaccinations = CentreVaccinationDao.getCentre();
  }

  ngOnInit(): void {
  }

}
