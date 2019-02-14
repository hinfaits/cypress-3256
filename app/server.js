const path = require('path');
const express = require('express');
const app = express();
app.use('/', express.static(path.join(__dirname, 'static')));
app.listen(3000, () => console.log('Listening on http://localhost:3000/'))
