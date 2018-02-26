var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
    title:'article one',
    heading:'articleone',
    date:'feb 27,2018',
    content:`<p>
            my name is khan and i am not a terrorist.. my name is khan and i am not a terrorist.. my name is khan and i am not a terrorist.. my name is khan and i am not a terrorist.. my name is khan and i am not a terrorist.. my name is khan and i am not a terrorist..
        </p>`
},
 'article-two':{ title:'Article Two:apoorv',
    heading:'article Two',
    date:'feb 28,2018',
    content:`
    <p>
            my name is khan and i am not a terrorist.. 
    </p>`
     
 },
 'article-three':{ title:'article three',
    heading:'articleThree',
    date:'feb 29,2018',
    content:`<p>
            my name is khan and i am not a terrorist.. 
        </p>`
     
 }
};

function createTemplete(data){
  var title=data.title;
  var date=data.date;
  var heading=data.heading;
  var content=date.content;
  
  var htmlTemplete=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
      
    </head>    
    <body>
        <div class="container">
            <div>
                <a href="/">home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
       ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTempletes;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
})
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplete(articles[articleName]));
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
