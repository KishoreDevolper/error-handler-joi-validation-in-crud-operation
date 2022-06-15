const express = require('express');

const app = express();

const dbsetup = require('./db/seeds/db-setup');

dbsetup();

const routes = require('./routes/user.routes');

const PORT = 5000;

app.use(express.json());

app.use('/api', routes)

app.listen(PORT,()=> console.log(`Server looking on the port ${PORT}`))