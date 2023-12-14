
// const http=require('http')
// const PORT=3000;
// const server= http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type', 'application/json')
//     var data={
//         meassege:"salaaaaaam bootcamps",
//         name:"kamal",
//         mobile:"56456"
//     }
//     res.end(JSON.stringify(data))
// })


// server.listen(4000,()=>{
//     console.log("is ok");
// })


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ErrorHandler, Logger } = require('./error');
const app = express();

let users = [
    {
        id: 1,
        name: "Alireza",
        books: [],
    },
    {
        id: 2,
        name: "Kamal",
        books: [],
    }
];

app.use(cors());

app.use(bodyParser.json());

app.get('/username',[Logger] ,(req, res, next) => {
    const { id } = req.query;
    let findedUser = users.find((user) => user.id == id);
    if (!findedUser) ErrorHandler("User not found", res, next);

    res.json({
        name: findedUser.name
    });
});

app.get('/books/:id', (req, res, next) => {
    const { id } = req.params;
    let findedUser = users.find((user) => user.id == id);
    if (!findedUser) ErrorHandler("User not found", res, next);

    res.json({
        books: findedUser.books,
    });
});

app.post('/book/:id', (req, res, next) => {
    const { id } = req.params;
    let findedUser = users.find((user) => user.id == id);
    if (!findedUser) ErrorHandler("User not found", res, next);

    findedUser.books.push(req.body)

    res.json(findedUser);
});


app.listen(4000, ()=>{
    console.log("is ok");
});
