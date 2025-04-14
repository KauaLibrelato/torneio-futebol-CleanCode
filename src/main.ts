import { Torneio } from "./torneio";

const torneio = new Torneio();

// Adicionando times
torneio.adicionarTime("Brasil");
torneio.adicionarTime("");
torneio.adicionarTime("Canadá");
torneio.adicionarTime("Argentina");
torneio.adicionarTime("Angola");

// Criando partidas
torneio.criarPartida("Brasil", "Canadá", 1, 0);
torneio.criarPartida("Argentina", "Angola", 2, 0);
torneio.criarPartida("Brasil", "Argentina", -10, -2);
torneio.criarPartida("Brasil", "Argentina", 0, 2);
torneio.criarPartida("Angola", "Canadá", 1, 1);
torneio.criarPartida("Brasil", "Angola", 3, 2);
torneio.criarPartida("Argentina", "Nigéria", 3, 3);
torneio.criarPartida("Argentina", "Canadá", 2, 4);

// Exibe a classificação final e o resultado de cada partida
const resultados = torneio.jogar();
resultados.imprimirClassificacao();
resultados.imprimirResultados();
