const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRouter');
const userRoutes = require('./routes/userRouter');
const { ErrorHandler, Logger } = require('./error');
const app = express();
app.use(cors());
app.use(express.json());


// let users = [
//   {
//     id: 1,
//     name: "Alireza",
//     books: [],
//   },
//   {
//     id:2,
//     name:"hamid",
//     books:[]
//   },
//   {
//     id: 2,
//     name: "Kamal",
//     books: [],
//   },

// ];

// -controllers
// -models
// -routes


// localhost:4000/api/book
app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
//http://localhost:4000/username
// app.post('/username',[Logger] ,(req, res, next) => {
//     const { id } = req.body;
//     let findedUser = users.find((user) => user.id == id);

//     if (!findedUser) ErrorHandler("User not found", res, next);

//     res.json(
//       findedUser
//     );
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
