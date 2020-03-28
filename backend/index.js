const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * MoSQL: MongoDB, CouchDB, etc
 */

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Cleiton Souza'
  });
});

app.listen(3333);
