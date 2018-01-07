var Rx = require('rx');
var DatabaseService = require('./database.service');
var service = {};

var connection = DatabaseService.connection;



function getAllSites() {

    var queryString = "SELECT `Groups`.`name`, `Sites`.`name` FROM `Sites` " +
        "LEFT JOIN `Groups` ON `Groups`.`id` = `Sites`.`groupId` " +
        "ORDER BY `Groups`.`name`";

    var query = {
        sql: queryString,
        nestTables: true
    };

    var observable = Rx.Observable.create((obs) => {
        connection.query(query, (error, results, fields) => {
            if (error) {
                obs.onError(error);
            }
            else {
                obs.onNext(results);
                obs.onCompleted();
            }
        })
    })
    return observable;
}


service.getAllSites = getAllSites;

module.exports = service;
