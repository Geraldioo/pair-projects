const express = require('express')
const app = express()
const port = 6969
const route = require('./routes/index')
// const path = require('path')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(route);

app.listen(port, () => {
  console.log(`App listening to f*ck ${port}`)
})