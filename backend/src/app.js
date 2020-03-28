const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */
 
/**
 * Banco de Dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server //SQL é uma linguagem universal
 * NoSQL: MongoDB, CouchDB, etc //Cada um possui sua propria linguagem de comunicação com o banco
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where(codigoJS)
 * 
 */

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;