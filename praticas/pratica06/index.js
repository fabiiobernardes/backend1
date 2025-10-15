const readline = require("readline-sync");
const controlador = require("./controlador.js");

function menu() {
  console.log("\n=== MENU PRINCIPAL ===");
  console.log("1 - Adicionar tarefa");
  console.log("2 - Buscar tarefa");
  console.log("3 - Atualizar tarefa");
  console.log("4 - Remover tarefa");
  console.log("5 - Sair");
}

async function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      const nomeAdd = readline.question("Digite o nome da tarefa: ");
      await controlador.adicionarTarefa(nomeAdd);
      break;

    case "2":
      const nomeBuscar = readline.question("Digite o nome da tarefa: ");
      await controlador.buscarTarefa(nomeBuscar);
      break;

    case "3":
      const nomeAtualizar = readline.question("Digite o nome da tarefa: ");
      const concluida = readline.question("Tarefa concluída? (true/false): ");
      await controlador.atualizarTarefa(nomeAtualizar, concluida);
      break;

    case "4":
      const nomeRemover = readline.question("Digite o nome da tarefa: ");
      await controlador.removerTarefa(nomeRemover);
      break;

    case "5":
      console.log("Encerrando o programa...");
      process.exit();
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

async function main() {
  while (true) {
    menu();
    const opcao = readline.question("Escolha uma opcao: ");
    await escolherOpcao(opcao);
  }
}

main();
