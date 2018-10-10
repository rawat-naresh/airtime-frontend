let express = require('express');
let app = express();
let path = require('path');

//path of our application after build
let appPath = '/dist/airtime-frontend/';

//serve all the static files given directory
app.use(express.static(path.join(__dirname,appPath)));

//for any route we serve index.html
app.get('/*', function(req, res, next) {
    res.sendFile(path.join(__dirname,appPath,'index.html'));
});

//listening to the incomming request
app.listen(process.env.PORT || 8080);