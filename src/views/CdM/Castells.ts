interface Colla {
  nom: string;
  localitat: string;
  web: string;
}

enum Colles {
  CastellersBarcelona = 0,
  CastellersVilafranca = 1,
  CastellersSants = 2,
  BordegassosVilanova = 3,
  VellaXiquetsValls = 4,
  CastellersTerrassa = 5,
  MinyonsTerrassa = 6,
  JoveXiquetsValls = 7,
  CastellersMollet = 8,
  ManyacsParets = 9,
  CapgrossosMataro = 10,
  XiquetsReus = 11,
  MoixiganguersIgualada = 12,
  XicsGranollers = 13,
  NensVendrell = 14,
  XiquetsTarragona = 15,
  JoveXiquetsTarragona = 16,
  CastellersSantCugat = 17,
  CastellersBadalona = 18,
  CastellersVilaDeGracia = 19,
  MarrecsSalt = 20,
  CastellersLleida = 21,
  CastellersBerga = 22,
  XicotsVilafranca = 23,
  CastellersSabadell = 24,
}

export default class Castells {
  static Colles: Colles;
  constructor() {
  }
  static getColla(colla: string | number): Colles {
    return this.Colles;
  }
}

Castells.getColla(Colles.CastellersBarcelona);