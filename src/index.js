const express = require('express');

// * Concatenar rutas o unir directorios
const path = require('path'); 

const ejs = require('ejs');

const morgan = require('morgan');


// * Calling routes
const testingRoutes = require('./routes/test.routes');

const app = express();

// * Settings
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.json());

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