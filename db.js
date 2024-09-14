const { Pool } = require('pg');  
require('dotenv').config();

const pool = new Pool({
  user: 'franc',      
  host: 'localhost',   
  database: 'Passport',
  password: 'Faraona', 
  port: 5432,          
});

module.exports = pool;