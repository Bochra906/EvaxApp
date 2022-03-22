import {Vaccin} from "./Vaccin";

export class Citoyen{
  constructor(
    public numInscription: string,
    public nom: string,
    public cin: string,
    public dateEffective: string , 
    public dateNaissance: string,
    public vaccins: Vaccin[],
  ) {
  }
}