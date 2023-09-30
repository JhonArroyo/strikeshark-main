import { bodyParser, config, favicon, express, os, cors } from '../libs/_packageProviders.mjs'
// export db to use connection
import routes from '../routes/routes.mjs'

config()
const app = express()

const ip = process.env.IP
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(cors({
  origin: process.envIP + process.env.PORT,
}))
app.use(favicon('./public/favicon.ico'))

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// routes
routes(app)

const getLocalAddress = () => {
  if (ip == "") {
    const interfaces = os.networkInterfaces()
    for (const iface in interfaces) {
      for (const addressInfo of interfaces[iface]) {
        if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
          return addressInfo.address
        }
      }
    }
  } else {
    return ip
  }
}

// Define color constants using ANSI escape codes
const colors = {
  reset: "\x1b[0m",
  fgYellow: "\x1b[33m",
  fgGreen: "\x1b[32m"
}

// Get local and public addresses
const localAddress = 'localhost'
const publicAddress = getLocalAddress() == null ? ip : getLocalAddress()

// Define the message
const localMessage = `Local address: http://${localAddress}:${port}/`
const publicMessage = `Public address: http://${publicAddress}:${port}/`

// Log the messages with the desired colors
console.log(`🦈 -Strikeshark Initialized- 🦈`)
console.log(`${colors.fgYellow}${localMessage}${colors.reset}
\b`)
console.log(`${colors.fgGreen}${publicMessage}${colors.reset}`)

// Listen on the local address (localhost)
app.listen(port, localAddress, () => {
})

// Listen on the network address (public address)b6
app.listen(port, publicAddress, () => {
  
})

process.on('uncaughtException', (error) => {
  if (error.code === 'EADDRNOTAVAIL') {
    console.error('Address not available:', error.message)
    process.exit(1) 
  } else {
    // Handle other uncaught exceptions
    console.error('Uncaught exception:', error.message)
    process.exit(1) // Exit the application with a non-zero status
  }
})
