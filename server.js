const express = require("express");
const app = express();
const cors = require("cors");

const bodyParse = require("body-parser");
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use('/static', express.static(__dirname + '/src/assets'));

app.use(cors({
    origin: '*'
}));

const clientRouter = require("./src/router/clientRouter");

const port = process.env.PORT || 3000;

app.use("/clients", clientRouter);
app.listen(port);

console.log("Api rodando na porta: "+port)

