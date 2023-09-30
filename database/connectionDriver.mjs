import { mongoose, config } from "../libs/packageProviders.mjs"


// MongoDB connection URL
config()
const hostname = process.env.DB_HOSTNAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbURL = `mongodb+srv://${username}:${password}@${hostname}/?retryWrites=true&w=majority`

// Mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// Establish a connection to the database
try {
  await mongoose.connect(dbURL, options)
  console.log('Connected to the Database')
} catch (error) {
  console.error('Error connecting to the database:', error)
}


