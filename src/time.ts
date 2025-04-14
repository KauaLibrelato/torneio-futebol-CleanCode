export class Time {
  nome: string;
  pontos: number = 0;
  saldoGols: number = 0;

  constructor(nome: string) {
    if (!nome) throw new Error("Nome inválido");
    this.nome = nome;
  }
}
