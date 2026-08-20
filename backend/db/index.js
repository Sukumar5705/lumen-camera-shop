const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' }); // Assuming .env is at root or backend

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
