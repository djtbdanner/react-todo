var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000; // Heroku env variable

app.use(function(req, res, next) {
//  console.log('\n-\n' + req.protocol + '\n-\n');
  if (req.headers['x-forwarded-proto'] === 'https') {
  //  console.log(' REDIRECTING to http://' + req.hostname + req.url);
    res.redirect('http://' + req.hostname + req.url);

  } else {
  //  console.log(' navigating to http://' + req.hostname + req.url);
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
console.log("Express server is up on port " + PORT + "!");
});
