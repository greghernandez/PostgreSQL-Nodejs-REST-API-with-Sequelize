import { Router } from 'express'
const router = Router()

import { createProject, getProjects, getOneProject, deleteProject, updateProject } from '../controllers/project.controller'

// Route - /api/projects
router.post('/', createProject)
router.get('/', getProjects)

// Route - /api/projects/:projectId
router.get('/:id', getOneProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

export default router