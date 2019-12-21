import { Router } from 'express'
const router = Router()

import { createTask, getTasks, getOneTask, deleteTask, updateTask, getTasksByProject } from '../controllers/task.controller'

// Route - /api/task
router.post('/', createTask)
router.get('/', getTasks)

// Route - /api/tasks/:taskId
router.get('/:id', getOneTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

// Route - /api/task/project/:projectId
router.get('/project/:project_id', getTasksByProject)

export default router