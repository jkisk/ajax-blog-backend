const express = require('express')
const router = express.Router()
const ctrl = require('./controller.js')



router.post('/', ctrl.create)
router.get('/', ctrl.getAll )
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)



module.exports = router