var Rx = require('rx');
var express = require('express');
var router = express.Router();

var SitesService = require('../services/sites.service');
var controller = {};


function getAllSites(req, res) {

    var observer = Rx.Observer.create(
        (data) => res.json(data),
        (error) => console.error(error),
        () => {}
    );

    SitesService.getAllSites().subscribe(observer);
}


router.get('/', getAllSites);

module.exports = router;
