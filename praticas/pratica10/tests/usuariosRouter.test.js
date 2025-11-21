const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

let usuarioId;
let authToken;

describe('Testes para o recurso /usuarios', () => {
   

    test('POST /usuarios - Deve criar um novo usuário com status 201', async () => {
        const response = await request.post('/usuarios').send({ email: 'usuario@email.com', senha: 'abcd1234' });
        expect(response.statusCode).toBe(201);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('_id');
        expect(response.body.email).toBe('usuario@email.com');
        usuarioId = response.body._id;
    });

    test('POST /usuarios - Deve retornar 422 quando o corpo está vazio', async () => {
        const response = await request.post('/usuarios').send({});
        expect(response.statusCode).toBe(422);
        expect(response.type).toBe('application/json');
        expect(response.body.msg).toBe('Email e Senha são obrigatórios');
    });

    test('POST /usuarios/login - Deve logar o usuário com sucesso e retornar token (200)', async () => {
        const response = await request.post('/usuarios/login').send({ usuario: 'usuario@email.com', senha: 'abcd1234' });
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('token');
        authToken = response.body.token;
    });

    test('POST /usuarios/login - Deve retornar 401 para credenciais inválidas', async () => {
        const response = await request.post('/usuarios/login').send({});
        expect(response.statusCode).toBe(401);
        expect(response.type).toBe('application/json');
        expect(response.body.msg).toBe('Credenciais inválidas');
    });

    test('POST /usuarios/renovar - Deve renovar o token com sucesso (200)', async () => {
        const response = await request.post('/usuarios/renovar').set('Authorization', `Bearer ${authToken}`);
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('token');
    });

    test('POST /usuarios/renovar - Deve retornar 401 para token inválido', async () => {
        const response = await request.post('/usuarios/renovar').set('Authorization', 'Bearer 123456789');
        expect(response.statusCode).toBe(401);
        expect(response.type).toBe('application/json');
        expect(response.body.msg).toBe('Token invalido');
    });

    test('DELETE /usuarios/${id} - Deve remover o usuário com sucesso (204)', async () => {
        const response = await request.delete(`/usuarios/${usuarioId}`).set('Authorization', `Bearer ${authToken}`);
        expect(response.statusCode).toBe(204);
        expect(response.body).toEqual({});
    });
});