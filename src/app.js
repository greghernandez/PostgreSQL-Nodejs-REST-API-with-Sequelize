import express, { json } from 'express'
import morgan from 'morgan'
// const bodyParser = require('body-parser')

// Importing Routes
import projectsRoutes from './routes/projects'
import tasksRoutes from './routes/tasks'

// Initialization
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false}))
app.use(express.json());

// Routes
app.use('/api/projects', projectsRoutes)
app.use('/api/tasks', tasksRoutes)

export default app
