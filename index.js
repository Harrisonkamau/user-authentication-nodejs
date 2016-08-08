// import modules
var express = require('express'),
    exphbs = require('express-handlebars'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    TwitterStrategy = require('passport-twitter'),
    GoogleStrategy = require('passport-google'),
    FacebookStrategy = require('passport-facebook');

// config file contains all tokens
var config = require('./config.js');

// contains passport and database functionalities
var funct = require('/function.js');

// create an instance of express
var app = express()


// configure Express
