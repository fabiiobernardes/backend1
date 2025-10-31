const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

let tokenSalvo = null;

describe('Prática 08 - testes de autenticação e rotas', () => {
test('GET /produtos sem header deve retornar 401 e msg "Não autorizado"', async () => {
    const response = await request.get('/produtos');
    expect(response.status).toBe(401);
    expect(response.body.msg).toBe('Não autorizado');
});


test('GET /produtos com token inválido deve retornar 401 e msg "Token inválido"', async () => {
    const response = await request.get('/produtos').set('authorization', '123456789');
    expect(response.status).toBe(401);
    expect(response.body.msg).toBe('Token inválido');
});


test('POST /usuarios/login deve retornar 200 e token', async () => {
    const response = await request.post('/usuarios/login').send({ 
        usuario: 'email@exemplo.com', 
        senha: 'abcd1234' 
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    tokenSalvo = response.body.token;
});


test('GET /produtos com token salvo deve retornar 200 e JSON (array)', async () => {
    const response = await request.get('/produtos').set('authorization', tokenSalvo);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});


test('POST /usuarios/renovar deve retornar 200 e novo token', async () => {
    const response = await request.post('/usuarios/renovar').set('authorization', tokenSalvo);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    tokenSalvo = response.body.token;
});


test('GET /produtos com token renovado deve retornar 200 e JSON (array)', async () => {
    const response = await request.get('/produtos').set('authorization', tokenSalvo);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});

});