var express = require('express');
var app = express();

var articles = [{
        id: 1,
        name: 'Article #1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lobortis dui, eu elementum ipsum. Ut ac purus id elit vulputate molestie. Proin lobortis, diam sed sagittis ullamcorper, sem ipsum maximus tellus, sit amet auctor enim nisl vitae nibh. Duis vel tortor at lacus sollicitudin consequat non id eros. Aenean eu pretium magna. Ut vitae aliquam erat. Phasellus id dui ut est dignissim venenatis sit amet eu dui. Nullam est ex, posuere ac pellentesque sed, facilisis nec ante. In porta sapien vitae augue mollis fermentum. Maecenas semper ut metus fermentum ullamcorper. In ac interdum erat. Sed ac quam auctor massa rutrum tincidunt. Mauris consectetur at urna convallis viverra.'
    },
    {
        id: 2,
        name: 'Article #2',
        content: 'Vestibulum dictum leo quam. Ut tincidunt efficitur sodales. Maecenas interdum, diam vitae interdum pulvinar, ante justo porttitor turpis, sagittis elementum lorem magna non nibh. Nulla maximus massa quis lectus sollicitudin viverra. Donec commodo orci orci, non dignissim mauris euismod et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse efficitur justo mollis, ultricies ipsum eget, pharetra libero.'
    },
    {
        id: 3,
        name: 'Article #3',
        content: 'Nulla ut libero ipsum. Integer ac leo dui. Donec feugiat eleifend eros, at gravida tortor suscipit ac. Quisque non felis odio. Cras placerat nulla vel eros fermentum, sed elementum ipsum dignissim. Praesent eu magna erat. Vivamus sodales sapien nec sodales ullamcorper. Mauris a dignissim ante, eget feugiat mi. Proin fringilla sagittis purus. Mauris tristique, orci ac eleifend feugiat, lorem quam sodales justo, sed condimentum massa arcu nec tortor. Cras nec scelerisque erat.'
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