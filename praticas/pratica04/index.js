const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next)=>{
    console.log("Data e Hora", Date())
    next()
})

const router = express.Router();

module.exports = app;

app.use('/tarefas', router);

const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
];

router.get('/', (req, res)=>{
    res.send(tarefas);
});

router.post('/', (req, res)=>{
    const novaTarefa = req.body;
    tarefas.push(novaTarefa)
    res.status(201).send(novaTarefa);
});

router.get('/:id', (req, res)=>{
    const { id } = req.params; 
    res.send(tarefas.find(x => x.id == id));
});

router.put('/:id', (req, res)=>{
    const { id } = req.params;
    if (id) return res.send("Tarefa atualizada");
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params; 
    if (id) return res.status(204).end();
    throw Error ("Tarefa não encontrada");
});


app.listen(3000, ()=>{
    console.log("App está On!")
})