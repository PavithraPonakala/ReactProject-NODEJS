const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '1098',
  host: 'localhost',
  port: 5432,
  database: 'react_project'
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};