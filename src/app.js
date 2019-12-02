import  express, { json } from 'express'
import morgan from 'morgan'

// Importing Routes
import accountsRoutes from './routes/accounts'
import staffRoutes from './routes/staff'

// Initialization
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(json())

// Routes
app.use('/api/accounts', accountsRoutes)
app.use('/api/accounts', staffRoutes)

export default app