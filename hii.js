var mysql = require("mysql");
varcon =mysql.createConnection({
    host ="local host",
    user = "root",
    database : "college"
});
module.exports = con;