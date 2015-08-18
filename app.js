var express = require('express');
var app = express();
var phantom = require('phantom');

app.set('port', (process.env.PORT || 5000));


app.get('/fetch', function(request, response) {
  url = request.query.url
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open(url, function (status) {
        page.evaluate(function () { return document.documentElement.outerHTML; }, function (result) {
          response.header('Content-Type', 'text/plain');
          response.send(String(result));
          ph.exit();
        });
      });
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
