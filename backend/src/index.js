const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());//para definir quais URLs poderão acessar este backend
app.use(express.json());
app.use(routes);

app.listen(3333);
