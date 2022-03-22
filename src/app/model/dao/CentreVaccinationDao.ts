import {CentreVaccination} from "../entity/CentreVaccination";

export class CentreVaccinationDao{
  private static centreVaccinations: CentreVaccination[] = [
    new CentreVaccination('College pilote mannouba', '70656963', 'Mannouba', '36963' , '40652'),    
    new CentreVaccination('Palais des congrés', '71569123', 'Tunis', '70563' , '80563'),
    new CentreVaccination('Maison des jeunes Ariana', '70963789', 'Ariana', '50639' , '60234'),
    new CentreVaccination('College pilote nabeul', '72639756', 'Nabeul', '20397' , '40652'),
    new CentreVaccination('Lycée les péres blancs', '70656964', 'Tunis', '42639' , '49876'),
    new CentreVaccination('College el ghazella ', '71539784', 'Ariana', '50263' , '52789'),    
  ];

  static getCentre(): CentreVaccination[]{
    return CentreVaccinationDao.centreVaccinations;
  }



}