const workoutService = require('../services/workoutService')

exports.getAllWorkouts = function (req, res) {
	const allWorkouts = workoutService.getAllWorkouts()
	res.send({ status: 'Ok', data: allWorkouts })
}

exports.getOneWorkout = function (req, res) {
	const allWorkout = workoutService.getOneWorkout()
	res.send('One workout.')
}

exports.createNewWorkout = function (req, res) {
	if (!req.body.name || !req.body.mode || !req.body.equipment || !req.body.exercises || !req.body.trainerTips) {
		return
	}

	const newWorkout = {
		name: req.body.name,
		mode: req.body.mode,
		equipment: req.body.equipment,
		exercises: req.body.exercises,
		trainerTips: req.body.trainerTips
	}

	const createdWorkout = workoutService.createNewWorkout(newWorkout)
	res.status(201).send({ status: 'OK', data: createdWorkout })
}

exports.updateOneWorkout = function (req, res) {
	const updateOneWorkout = workoutService.updateOneWorkout()
	res.send('Update a workout.')
}

exports.deleteOneWorkout = function (req, res) {
	const deleteOneWorkout = workoutService.deleteOneWorkout()
	res.send('Delete a workout.')
}

exports.deleteOneWorkout = function (req, res) {}
