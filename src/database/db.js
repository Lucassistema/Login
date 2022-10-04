const util = require('util');
const mysql = require('mysql');

const conn = mysql.createConnection({
    
    host: "localhost",
    db: "universidad",
    user: "root",
    password: "root/360"

    //host: process.env.HOST,
    //user: process.env.USER,
    //password: process.env.PASSWORD,
    //database:'universidad'

    

});

conn.connect((err)=> {
    if(err){
        throw err;
    }else {
        console.log("Estas conectado a la BD")
        conn.query = util.promisify(conn.query);
    }
});

module.exports = mysql;
