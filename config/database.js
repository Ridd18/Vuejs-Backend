import mysql from "mysql2";

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ridd18',
    database:'demo'
});

export default db;