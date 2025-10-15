require('dotenv').config();
const {MongoClient} = require ("mongodb");


const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOSS}/`;

const client = new MongoClient(url);
let db = null;

async function conectar() {
    try{
    if(db == null){
        await client.connect();
        db = client.db("agenda");
    }
    console.log("Conectado ao MONGODB");
    return db;
} catch (e) {
    console.log("Erro ao conectar no MONGODB", e.message);
}

}

module.exports = conectar;