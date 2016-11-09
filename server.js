var express = require('express')
var moment = require("moment")
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/:time', function (req, res) {
    var time = req.params.time;
    var unix;
    var natural;
    
    if (isNaN(time)) {
        unix = moment(time).unix();
        natural = time;
    } else {
        unix = time;
        natural = moment.unix(time).format("MMM DD, YYYY");
    }
    
    var date = { "unix": unix, "natural": natural };
    res.send(date);
    
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})