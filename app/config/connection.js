const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'database-1.cgzy6w64uycw.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'baba12345678b',
    database: 'database-1'
});

}

connection.on('connect', () => {
    console.log(`--> Connected to database '${connection.config.database}'.`);
});

connection.on('error', err => {
    console.log('--> Connection error: ', err);
});

connection.connect();

module.exports = connection;
