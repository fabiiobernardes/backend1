const Tarefa = require("./modelo.js");

async function adicionarTarefa(nome) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.inserir();
  console.log("Tarefa adicionada com sucesso!");
}

async function buscarTarefa(nome) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.buscar();
  if (tarefa.id) {
    console.log("Tarefa encontrada:");
    console.log(`ID: ${tarefa.id}`);
    console.log(`Nome: ${tarefa.nome}`);
    console.log(`Concluída: ${tarefa.concluida ? "Sim" : "Não"}`);
  } else {
    console.log("Tarefa não encontrada.");
  }
  return tarefa;
}

async function atualizarTarefa(nome, concluida) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.buscar();
  if (tarefa.id) {
    tarefa.concluida = concluida.toLowerCase() === "true";
    await tarefa.alterar();
    console.log("Tarefa atualizada com sucesso!");
  } else {
    console.log("Tarefa não encontrada para atualização.");
  }
}

async function removerTarefa(nome) {
  const tarefa = new Tarefa(nome);
  await tarefa.init();
  await tarefa.buscar();
  if (tarefa.id) {
    await tarefa.apagar();
    console.log("Tarefa removida com sucesso!");
  } else {
    console.log("Tarefa não encontrada para remoção.");
  }
}

module.exports = {
  adicionarTarefa,
  buscarTarefa,
  atualizarTarefa,
  removerTarefa,
};
