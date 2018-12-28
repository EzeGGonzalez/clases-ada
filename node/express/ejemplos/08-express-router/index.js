const express = require('express')
const app = express()
const indexRouter = require('./routes/index')

app.use('/', indexRouter);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})