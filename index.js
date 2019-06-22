const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 5000;
const app = express()

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('<h1>This is my first site!</h1>')
})

app.listen(PORT, ()=> {
  console.log(`Listening on port: ${PORT}`)
}) 
