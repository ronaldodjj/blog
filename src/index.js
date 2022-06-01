const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const Sequelize = require('sequelize');

// * Concatenar rutas o unir directorios
const path = require('path'); 

const ejs = require('ejs');

const morgan = require('morgan');

//* Database connection

const connection = require('./connection');

// * Calling routes
const testingRoutes = require('./routes/test.routes');

// * Settings

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
// * https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm

// * for parsing application/json
app.use(bodyParser.json()); 

//* for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

//* for parsing multipart/form-data
app.use(upload.array()); 



// * Ejecuting routes 
app.use(testingRoutes);

// * Static files
 /* 
 *  Developer: Ronaldo Martnez
 *  Date: 5/26/2022
 *  Description:New static file sroute added
 */
app.use(express.static(path.join(__dirname, 'static')));

// !app.use(express.static('./static'));
//app.use('/static',express.static(__dirname + '/static'));

// * Starting server
app.listen(process.env.PORT || 3000)
console.log(process.env.PORT || 3000, 'is the magic port');