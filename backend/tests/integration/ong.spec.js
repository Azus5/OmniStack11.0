//O axios não é recomendado para testes, então é recomendado usar o "supertest"
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    //Antes de cada teste deve executar esta função
    beforeEach(async () => {
        //Zera o banco de dados antes de iniciar
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //Depois de todos os testes executar esta função função
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create an new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "MCPS",
            email: "contato@email.com",
            whatsapp: "2612540000",
            city: "São Paulo",
            uf: "SP"
        })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    }) 
})