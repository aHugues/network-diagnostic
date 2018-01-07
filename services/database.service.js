var service = {};
var mysql = require('mysql');
var config = require('../config/database.json');

const host = config.host;
const user = config.user;
const password = config.password;
const database = config.database;

var connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

service.connection = connection;

module.exports = service;
