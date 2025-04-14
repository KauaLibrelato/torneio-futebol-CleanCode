# Torneio de Futebol

Este projeto é um sistema simples para gerenciar um torneio de futebol. Ele permite registrar times, criar partidas, exibir os resultados e classificar os times com base nos pontos e saldo de gols.

## Funcionalidades

- Registrar times no torneio.
- Criar partidas entre os times.
- Exibir os resultados das partidas.
- Calcular e exibir a classificação final do torneio, ordenada por pontos e, em caso de empate, por saldo de gols.
- Registrar erros e exceções em um arquivo de log.

## Pré-requisitos

- Node.js
- npm (ou yarn)
- TypeScript

## Como executar

### 1. Clonando o repositório

Primeiro, clone o repositório para o seu computador:

```bash
git clone https://github.com/SEU-USUARIO/torneio-futebol.git
cd torneio-futebol
```

### 2. Instalando as dependências

Instale as dependências do projeto utilizando o npm:

```bash
npm install
# Ou, se preferir, pode usar o yarn:
yarn install
```

### 3. Executando o projeto

Com as dependências instaladas, você pode rodar o projeto com o ts-node:

```bash
npx ts-node src/main.ts
```
Isso vai executar o código e exibir a classificação do torneio e os resultados das partidas no terminal.

## Estrutura de arquivos

 ```bash
   src/
   ├── main.ts         # Classe Main para executar o torneio.
   ├── torneio.ts      # Lógica do torneio, incluindo as regras de pontos e classificação.
   ├── partida.ts      # Representação das partidas entre times.
   ├── time.ts         # Representação dos times no torneio.
   ├── log.ts          # Função para registrar logs de erros.
   logs/              # Diretório onde os logs de erros serão salvos.
   ├── errors.log      # Arquivo de log que registra os erros durante a execução do programa.
   package.json        # Gerenciador de dependências do projeto.
   tsconfig.json       # Arquivo de configuração do TypeScript.
   README.md           # Documentação
   ```

## Como funciona?

### 1. Registro de Times:

- Os times podem ser registrados no torneio com o comando adicionarTime(nome), onde nome é o nome do time.

### 2. Criação de Partidas:

- As partidas podem ser criadas entre dois times com o comando criarPartida(timeCasa, timeVisitante, golsCasa, golsVisitante), onde:
   - timeCasa e timeVisitante são os nomes dos times.
   - golsCasa e golsVisitante são o número de gols de cada time.

### 3. Exibição da Classificação:

- Após a execução das partidas, a classificação é exibida ordenada por pontos e saldo de gols.

### 4. Exibição dos Resultados:
- O resultado final de cada partida é impresso após a execução do torneio.

## Exemplo de Execução

```bash
    ✅ Time "Brasil" adicionado com sucesso!
    ❌ Erro: Nome inválido
    ✅ Time "Canadá" adicionado com sucesso!
    ✅ Time "Argentina" adicionado com sucesso!
    ✅ Time "Angola" adicionado com sucesso!

    ✅ Partida entre "Brasil" e "Canadá" criada com sucesso!
    ✅ Partida entre "Argentina" e "Angola" criada com sucesso!
    ❌ Erro: Número inválido de gols
    ✅ Partida entre "Brasil" e "Argentina" criada com sucesso!
    ✅ Partida entre "Angola" e "Canadá" criada com sucesso!
    ✅ Partida entre "Brasil" e "Angola" criada com sucesso!
    ❌ Erro: Time não existe
    ✅ Partida entre "Argentina" e "Canadá" criada com sucesso!

    Classificação Final:
    1. Brasil (6 pontos, Saldo de Gols: 3)
    2. Angola (4 pontos, Saldo de Gols: 2)
    3. Canadá (4 pontos, Saldo de Gols: -1)
    4. Argentina (3 pontos, Saldo de Gols: -4)

    Resultados:
    Brasil 1 x 0 Canadá
    Argentina 0 x 1 Angola
    Brasil 0 x 2 Argentina
    Angola 1 x 1 Canadá
    Brasil 3 x 2 Angola
    Argentina 2 x 4 Canadá
```
