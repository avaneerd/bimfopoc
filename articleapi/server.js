var express = require('express');
var app = express();

var articles = [{
        id: 1,
        name: 'Article #1',
        content: 'This is test content'
    },
    {
        id: 2,
        name: 'Article #2',
        content: 'This is test content'
    },
    {
        id: 3,
        name: 'Article #3',
        content: 'This is test content'
    }
];

app.get('/', function(req, res) {
    res.send(articles);
});

app.get('/:id', function(req, res) {
    var article = articles.filter(a => a.id === +req.params.id).pop();
    res.send(article);
});

app.listen(80);