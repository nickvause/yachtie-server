const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Define a simple API endpoint that interacts with the database
app.get('/api/config', (req, res) => {
  pool.query('SELECT * FROM account_config', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message, data: [] });
    } 
    return res.json(results);
  });
});

app.get('/api/health', (req, res) => {
  res.json({"status" : ":)"});
});

app.listen(process.env.SERVER_HOST_PORT, process.env.SERVER_HOST_ADDRESS, () => {
  console.log(`Server is running at ${process.env.SERVER_HOST_ADDRESS}:${process.env.SERVER_HOST_PORT}`);
});
