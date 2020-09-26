//jshint esversion:6

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const _ = require('lodash');
const he = require('he');
const https = require('https');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render('home');
});

app.listen(3000, function () {
    console.log('Server started on port 3000;');
});