
var request = require('request');
var parseString = require('xml2js').parseString;

/*
 * GET Weather listing.
 */

exports.forecast = function(req, res){
    getJson('http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-001.xml', function (err, result) {
        res.send(err || result);
    });
};


function getJson(url, callback) {
    // body...
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(body, function (err, _json) {
                callback(null, _json);
            });
        }else{
            callback(error || response.statusCode, null);
        }
    });
}
