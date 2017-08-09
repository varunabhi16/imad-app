var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articalone= {
    title: 'Artical one | Varun' ,
    heading: 'Artical one',
    date: '5th sep 2017' ,
    Content: `                  The attached code is one of the possible solution meeting the given               requirement. Please refer/use this only if you are not able solve the above given problem scenario within 3.5 hours.`
    
};
function createTemplate(data)
{
    

var htmlTemplate={
<html>
    <head>
       <title> ${title}
       </title>
       <link href="/ui/style.css" rel="stylesheet"/>
    </head>
        <body>
                <div class = "container">
                        <div>
                            <a href ="/">Home</a> 
                        
                        <hr/>
                        
                        <h3>Artical one</h3>
                        </div>
                <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>
</html>
};
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/arical-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/arical-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
