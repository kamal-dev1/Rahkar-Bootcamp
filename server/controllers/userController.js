const mysql = require('mysql2/promise');


exports.GetUsers = async (req, res ) => {
  const connection = await  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'bootcamp'
  });
  let [rows]=await connection.execute("SELECT * FROM users where name LIKE '%ل%'")
  res.json(rows);
};
exports.getUsersByFilter = async (req, res) => {
  let {name}= req.params
  const connection = await  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'bootcamp'
  });

  let data=await connection.execute("SELECT * FROM users where name LIKE Concat('%', ? ,'%')",[name])
  res.json(data[0]);
};

