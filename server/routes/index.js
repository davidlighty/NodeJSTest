/*jslint node: true */
'use strict';
exports.awesomeThings = function(req, res) {
	console.log("AwesomeThings");
    res.json([
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'Express'
    ]);
};