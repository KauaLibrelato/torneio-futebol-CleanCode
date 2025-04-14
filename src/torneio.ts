import { logError } from "./log";
import { Partida } from "./partida";
import { Time } from "./time";

export class Torneio {
  private times: Time[] = [];
  private partidas: Partida[] = [];

  adicionarTime(nome: string) {
    try {
      if (!nome) throw new Error("Nome do time não pode ser vazio");
      const time = new Time(nome);
      this.times.push(time);
      console.log(`✅ Time "${nome}" adicionado com sucesso!`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        logError(error.message);
        console.log(`❌ Erro: ${error.message}`);
      } else {
        console.log("❌ Erro desconhecido");
      }
    }
  }

  criarPartida(
    timeCasa: string,
    timeVisitante: string,
    golsCasa: number,
    golsVisitante: number
  ) {
    try {
      const casa = this.times.find((time) => time.nome === timeCasa);
      const visitante = this.times.find((time) => time.nome === timeVisitante);
      if (!casa || !visitante) throw new Error("Time não existe");
      const partida = new Partida(casa, visitante, golsCasa, golsVisitante);
      this.partidas.push(partida);
      console.log(
        `✅ Partida entre "${timeCasa}" e "${timeVisitante}" criada com sucesso!`
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        logError(error.message);
        console.log(`❌ Erro: ${error.message}`);
      } else {
        console.log("❌ Erro desconhecido");
      }
    }
  }

  jogar() {
    this.times.forEach((time) => {
      time.pontos = 0;
      time.saldoGols = 0;
    });

    this.partidas.forEach((partida) => {
      if (partida.golsCasa > partida.golsVisitante) {
        partida.timeCasa.pontos += 3;
      } else if (partida.golsCasa < partida.golsVisitante) {
        partida.timeVisitante.pontos += 3;
      } else {
        partida.timeCasa.pontos += 1;
        partida.timeVisitante.pontos += 1;
      }

      partida.timeCasa.saldoGols += partida.golsCasa - partida.golsVisitante;
      partida.timeVisitante.saldoGols +=
        partida.golsVisitante - partida.golsCasa;
    });

    const classificacao = [...this.times];
    classificacao.sort((a, b) => {
      if (b.pontos !== a.pontos) return b.pontos - a.pontos;
      return b.saldoGols - a.saldoGols;
    });

    return {
      imprimirClassificacao: () => {
        console.log("Classificação Final:");
        classificacao.forEach((time, index) => {
          console.log(
            `${index + 1}. ${time.nome} (${
              time.pontos
            } pontos, Saldo de Gols: ${time.saldoGols})`
          );
        });
      },
      imprimirResultados: () => {
        console.log("Resultados:");
        this.partidas.forEach((p) => console.log(p.resultado()));
      },
    };
  }
}
