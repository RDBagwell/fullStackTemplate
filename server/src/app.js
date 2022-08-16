const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..', 'public')))

module.exports = app