const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRouter');
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

app.use(express.json());

app.use("/api/book", bookRoutes);

// app.get('/username',[Logger] ,(req, res, next) => {
//     const { id } = req.query;
//     let findedUser = users.find((user) => user.id == id);
//     if (!findedUser) ErrorHandler("User not found", res, next);

//     res.json({
//         name: findedUser.name
//     });
// });

// app.get('/books/:id', (req, res, next) => {
//     const { id } = req.params;
//     let findedUser = users.find((user) => user.id == id);
//     if (!findedUser) ErrorHandler("User not found", res, next);

//     res.json({
//         books: findedUser.books,
//     });
// });

// app.post('/book/:id', (req, res, next) => {
//     const { id } = req.params;
//     let findedUser = users.find((user) => user.id == id);
//     if (!findedUser) ErrorHandler("User not found", res, next);

//     findedUser.books.push(req.body)

//     res.json(findedUser);
// });

app.listen(4000, ()=>{
  console.log("Server listening on port 4000");
});
