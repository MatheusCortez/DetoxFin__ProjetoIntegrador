const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
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

app.use(session({
  secret:'BF5ACA04FB2668640E6EC4E6278A142088676CC5263F600007F725066FC661CE'
}))


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
