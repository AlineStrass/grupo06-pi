var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var methodOverride = require('method-override');
const res = require('express/lib/response');

//ROTAS
var indexRouter = require('./routes/indexRouter');
var adminRouter = require('./routes/adminRouter');
var produtosRouter = require('./routes/produtosRouter');
var painelUsuarioRouter = require('./routes/painelUsuarioRouter')
var clientesRouter = require('./routes/clientesRouter');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret:'projetoIntegrador-grupo06-HappyPet',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

//app.use(logMiddleware);

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/produtos', produtosRouter);
app.use('/painelusuario', painelUsuarioRouter);
app.use('/clientes', clientesRouter);


app.use((req, res)=>{
  return res.status(404).render('not-found')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
