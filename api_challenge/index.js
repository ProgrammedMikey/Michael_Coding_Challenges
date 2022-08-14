const express = require("express");
const cors = require("cors");
const _ = require("lodash");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

const routes = require ('./server/routes/treeRoutes.js');
app.use('/', routes);

app.listen(port, () => console.log(`API Server is running on port ${port}`));