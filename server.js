var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*var articleOne = {
    title: 'Article One | Monalisa banerjee',
    heading: 'Articlew One',
    content:`<p>This is my first article. How are you? i'm good! How are you? I'm good!</p>
            
            <p>This is my first article. How are you? i'm good! How are you? I'm good!</p>
            
            <p>This is my first article. How are you? i'm good! How are you? I'm good!</p>`
    
};
function createtenplate(data){
var content = data.content;
var htmlContent = {`<!DOCTYPE html>
        <head><title> article one | Monalisa Banerjee</title>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body> 
        <div class= 'cls'>
            <div>
                <a href="/">Home</a>
            </div>
            <h3>
                Article one
            </h3>
            <div>
                ${content}
            </div>
         </div>
        </body>
</html>
`;
}*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    //res.send('Article one requested and will be served here');
});

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    //res.send('Article two requested and will be served here');
});

app.get('/article-three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    //res.send('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
