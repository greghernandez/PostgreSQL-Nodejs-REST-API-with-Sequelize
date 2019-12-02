import { Router } from 'express'
const router = Router()

import { createAcccount } from '../controllers/account.controller'

// Route - api/accounts
router.post('/', createAcccount)

export default router