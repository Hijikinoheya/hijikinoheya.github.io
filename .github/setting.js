// server.js

const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const serverName = 'My Server';
  const serverPort = 8080;
  const environment = 'Development';

  const html = pug.renderFile('index.pug', { serverName, serverPort, environment });
  res.send(html);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});