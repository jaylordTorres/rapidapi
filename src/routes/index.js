import { Router } from 'express'
var router = Router()

router.get('/', function(req, res, next) {
  return res.json({ test: 'testing 2' })
})

export default router
