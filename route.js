
var Weather = require('./routes/weather');


module.exports = function (app) {

    app.get('/', function(req, res){
        res.send('Hello');
    });

    // app.get('/api/v1/weather/assistant/:city', Weather.assistant);
    // app.get('/api/v1/weather/week/:city', Weather.week);
    app.get('/api/v1/weather/forecast/:city', Weather.forecast);

}
