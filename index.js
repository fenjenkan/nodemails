const express = require('express');
const Router = require('./routes');
var cors = require('cors');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/", Router)

app.listen (PORT, () => {console.log("Escuchando en el puerto " + PORT);});