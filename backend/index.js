const express = require('express');
const app = express();
const cors = require('cors');
const { readdirSync } = require('fs');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());


// Use the router for a specific path
readdirSync('./routes').map((route) => app.use('/api/', require('./routes/' + route)));

const server = () => {
  app.listen(PORT, () => {
    console.log('You are listening to PORT: ', PORT);
  });
};

server();
