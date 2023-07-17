const express = require('express')
const router = express.Router()

const workoutController = require('../../controllers/workoutController')

router.get('/', workoutController.getAllWorkouts)
router.get('/:id', workoutController.getOneWorkout)
router.post('/', workoutController.createNewWorkout)
router.put('/:id', workoutController.updateOneWorkout)
router.delete('/:id', workoutController.deleteOneWorkout)

module.exports = router
