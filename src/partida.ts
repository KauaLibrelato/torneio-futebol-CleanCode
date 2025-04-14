import { Time } from "./time";

export class Partida {
  constructor(
    public timeCasa: Time,
    public timeVisitante: Time,
    public golsCasa: number,
    public golsVisitante: number
  ) {
    if (golsCasa < 0 || golsVisitante < 0)
      throw new Error("Número inválido de gols");
  }

  resultado() {
    return `${this.timeCasa.nome} ${this.golsCasa} x ${this.golsVisitante} ${this.timeVisitante.nome}`;
  }
}
