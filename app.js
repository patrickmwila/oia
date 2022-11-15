/// import modules ///
const express = require('express');

/// setup an express app ///
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

/// import routes ///
const listings = require('./routes/listings');

app.use('/', listings);

/// setup sever to listen on specific port ///
app.listen(process.env.PORT || port, () => {
  console.log('Sever is up and running!');
});
