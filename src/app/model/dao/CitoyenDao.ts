import {Citoyen} from "../entity/Citoyen";
import {Vaccin} from "../entity/Vaccin";

export class CitoyenDao {
  private static citoyens: Citoyen[] = [
    new Citoyen('120369784', 'Sinda Ben Marzouk', '14256374', '16/08/2021', '09/03/1999', [
      new Vaccin('J&J', '02/08/2021'),
      new Vaccin('Pfizer', '12/12/2021'),
    ]) , 
    new Citoyen('125693878', 'Bochra Feki', '14398763', '20/08/2021', '17/10/1999', [
        new Vaccin('J&J', '06/08/2021'),
        new Vaccin('Pfizer', '01/02/2022'),
      ])
  ];

  public static getCitoyenByNumInscription(numInscription: string): Citoyen | undefined {
    return CitoyenDao.citoyens.find((Citoyen)=>Citoyen.numInscription==numInscription);
  }
}