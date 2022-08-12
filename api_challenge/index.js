// const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
// const { v4: uuid } = require("uuid");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

const routes = require ('./server/routes/treeRoutes.js');
app.use('/', routes);


//establish connection to database
// mongoose.connect(
//     'mongodb+srv://devmichaeldasilva:eYlIAuXmYC7Eio3h@cluster0.oqxkrga.mongodb.net/animal_tree',
//     { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
//     (err) => {
//         if (err) return console.log("Error: ", err);
//         console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
//     }
// );


// app.get("/animal_tree", (req, res) => {

// })

// app.get("/animal_tree/:id", (req, res) => {
//     const id = req.params.id;
//     let content;

//     try {
//         content = await fs.readFile(`data/animal_tree/:id.txt`, 'utf-8');
//     } catch (err) {
//         return res.sendStatus(404);
//     }

//     res.json ({
//         content
//     })
// })

// app.post("/animal_tree", async (req, res) => {
//     const id = uuid();
//     const content = req.body.content;

//     if (!content) {
//         return res.sendStatus(400);
//     }

//     await fs.mkdir("data/animal_tree", { recursive: true });
//     await fs.writeFile(`data/animal_tree/${id}.txt`, content)

//     res.status(201).json({
//         id: id
//     });
// })

app.listen(port, () => console.log(`API Server is running on port ${port}`));