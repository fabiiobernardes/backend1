const { conectarDb } = require('./database');

class Tarefa {
    id = null;
    nome = null;
    concluida = false;

    db = null;
    collection = null;

    constructor(nome) {
        this.nome = nome;
    }

    async init() {
        this.db = await conectarDb();
        this.collection = this.db.collection("tarefas");
    }

    async inserir() {
        const resultado = await this.collection.insertOne({ nome: this.nome, concluida: this.concluida });
        this.id = resultado.insertedId;
    }

    async buscar() {
        const resultado = await this.collection.findOne({ nome: this.nome });
        this.id = resultado._id;
        this.concluida = resultado.concluida;
    }

    async alterar() {
        await this.collection.updateOne(
            { _id: this.id },
            { $set: { nome: this.nome, concluida: this.concluida } }
        );
    }

    async apagar() {
        await this.collection.deleteOne({ _id: this.id });
    }
}

module.exports = Tarefa;
