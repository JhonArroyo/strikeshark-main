require('body-parser')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 3000

app.use(cors)
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('welcome')
})

//Note: Each new-strikeshark member should be registed here

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
