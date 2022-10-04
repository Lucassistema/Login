const conn = require('../database/db');

async function getUserAndPassword(user, password) {

    try {

        var query ='select * from usuarios where usuario= ? and clave= ? limit 1'
        var row = await conn.query(query, [user, password]);
        return row[0];

    }catch(error) {
        console.log(error);

    }

}

module.exports = {getUserAndPassword}
