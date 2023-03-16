const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'FilmDB',
  password: '9001',
  port: 5432,
});

module.exports = pool;
