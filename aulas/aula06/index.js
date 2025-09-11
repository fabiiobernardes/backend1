// importar o framework
const express = require("express");

// importar middleware de terceiros
const cors = require('cors');

const router = require('./router')

// criar uma instancia de aplicação
const app = express();

// middleware integrado
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//midleware de terceiros
app.use(cors());

// middleware de aplicação
app.use((req, res, next)=>{
    console.log("Passei pelo middleware de app");
    next();
});

app.use('/tarefas', router);

// criar um middleware
app.get('/', (req, res)=>{
    res.send("Ola");
});

//middleware de erro
app.use((err, req, res, next)=>{
    res.status(500).send(err.messsage);
});

// iniciar aplicação em uma porta
app.listen(3000, ()=>{
    console.log("App está On!")
})