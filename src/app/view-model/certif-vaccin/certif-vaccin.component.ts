import { Component, OnInit } from '@angular/core';
import {Citoyen} from "../../model/entity/Citoyen";
import {CitoyenDao} from "../../model/dao/CitoyenDao";

@Component({
  selector: 'app-certif-vaccin',
  templateUrl: '../../view/certif-vaccin/certif-vaccin.component.html',
  styleUrls: ['../../view/certif-vaccin/certif-vaccin.component.css']
})
export class CertifVaccinComponent implements OnInit {

  citoyen: Citoyen | undefined;
  numInscription: string = '';

  constructor() {
    this.citoyen = undefined;
  }

  ngOnInit(): void {
  }

  updateCitoyen() {
    this.citoyen = CitoyenDao.getCitoyenByNumInscription(this.numInscription);
  }

}
