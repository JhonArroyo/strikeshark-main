import bodyParser from 'body-parser'
import { config } from 'dotenv'
import favicon from 'serve-favicon'
import  express  from 'express'
import cors from 'cors'
import  routes  from '../routes/routes.mjs'
// import  db from '../database/connectionDriver.mjs'

config()
const app = express()

const ip = process.env.IP || "localhost"
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(cors({
  origin: process.envIP+process.env.PORT,
}))
app.use(favicon('./public/favicon.ico'))

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// routes
routes(app)

//Note: Each new-strikeshark member should be registed here
app.listen(port, ip, () => {
  console.log(`StrikeShark App listening http://${ip}:${port}`)
})

