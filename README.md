[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## fetchyfetch

An Node/Express app that can be used to fetch raw HTML from dynamically generated webpages. Useful for Testing purposes.

It uses [PhantomJS](http://phantomjs.org/) via its NodeJS [bridge](https://github.com/sgentle/phantomjs-node) for fetching the content.

After deploying it (or just locally) call `/fetch` endpoint with the desired url as `url` parameter, it will return the raw HTML of the page.

For Heroku deployment use [phantomjs buildpack](https://github.com/stomita/heroku-buildpack-phantomjs) and [nodejs buildpack](https://github.com/heroku/heroku-buildpack-nodejs) both of which are included in app.json, so deploy to heroku would just do fine.
