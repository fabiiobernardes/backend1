const request = require("supertest");
const app = require("../app");

describe("Testes da API de Tarefas", () => {
  let tarefaId;

  test("GET /tarefas deve retornar status 200 e JSON", async () => {
    const res = await request(app).get("/tarefas");
    console.log("GET /tarefas:", res.statusCode, res.body); 
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  test("POST /tarefas deve criar uma nova tarefa", async () => {
    const novaTarefa = { nome: "Estudar Node", concluida: false };
    const res = await request(app).post("/tarefas").send(novaTarefa);
    console.log("POST /tarefas:", res.statusCode, res.body); 
    expect(res.status).toBe(201);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.body).toHaveProperty("id");
    tarefaId = res.body.id;
    expect(tarefaId).toBeDefined();
  });

  test("GET /tarefas/:id deve retornar a tarefa criada", async () => {
    const res = await request(app).get(`/tarefas/${tarefaId}`);
    console.log("GET /tarefas/:id:", res.statusCode, res.body); 
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(tarefaId);
  });

  test("GET /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).get("/tarefas/1");
    console.log("GET /tarefas/1:", res.statusCode, res.body); 
    expect(res.status).toBe(404);
  });

  test("PUT /tarefas/:id deve atualizar a tarefa", async () => {
    const res = await request(app)
      .put(`/tarefas/${tarefaId}`)
      .send({ nome: "Estudar Node e Express", concluida: true });
    console.log("PUT /tarefas/:id:", res.statusCode, res.body); 
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe("Estudar Node e Express");
    expect(res.body.concluida).toBe(true);
  });

  test("PUT /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).put("/tarefas/1").send({ nome: "Teste", concluida: false });
    console.log("PUT /tarefas/1:", res.statusCode, res.body); 
    expect(res.status).toBe(404);
  });

  test("DELETE /tarefas/:id deve retornar 204", async () => {
    const res = await request(app).delete(`/tarefas/${tarefaId}`);
    console.log("DELETE /tarefas/:id:", res.statusCode); 
    expect(res.status).toBe(204);
  });

  test("DELETE /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).delete("/tarefas/1");
    console.log("DELETE /tarefas/1:", res.statusCode, res.body); 
    expect(res.status).toBe(404);
  });
});
