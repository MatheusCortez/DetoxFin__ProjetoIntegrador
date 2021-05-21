const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const menuRouter = require('./routes/menu')
const bodyparser = require('body-parser')
const investmentsRouter = require('./routes/investments')
const investorsProfileRouter = require('./routes/investorsprofile')
const walletRouter = require('./routes/wallet')

const app = express();
const port =3030

app.listen(port, () => {
  console.log(`rodando na porta  ${port}`)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user',menuRouter);
app.use('/user/meusInvestimentos',investmentsRouter);
app.use('/user/perfilInvestidor',investorsProfileRouter);
app.use('/user/minhaCarteira',walletRouter);

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
