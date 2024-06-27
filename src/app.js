//require('dotenv').config();
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const indexRoutes = require('./routes/index.routes');

const app = express();

app
    .set('views', path.join(__dirname, '..', 'views'))
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, '..', 'public')))
    .use(morgan('dev'))
    .use(cookieParser())
    .use(methodOverride('_method'))
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    //Configuracion de sesion
    

    //middlewares propios

    
    //Rutas
    .use('/', indexRoutes)

    .use(function(req, res, next) {
        next(createError(404));
      });

module.exports = app