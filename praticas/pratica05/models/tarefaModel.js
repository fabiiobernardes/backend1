let tarefas = [];

function listar() {
  return tarefas;
}

function buscarPeloId(tarefaId) {
  return tarefas.find(t => t.id === tarefaId) || null;
}

function criar(tarefa) {
  const novaTarefa = {
    id: Math.random().toString(36).slice(2, 4),
    ...tarefa
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

function atualizar(tarefaId, dados) {
  const tarefa = tarefas.find(t => t.id === tarefaId);
  if (!tarefa) return null;
  tarefa.nome = dados.nome;
  tarefa.concluida = dados.concluida;
  return tarefa;
}

function remover(tarefaId) {
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) return null;
  const removida = tarefas.splice(index, 1);
  return removida[0];
}

module.exports = { listar, buscarPeloId, criar, atualizar, remover };
