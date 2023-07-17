const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

exports.getAllWorkouts = function (req, res) {
	const allWorkouts = Workout.getAllWorkouts()
	return allWorkouts
}

exports.getOneWorkout = function (req, res) {
	return
}

exports.createNewWorkout = function (newWorkout) {
	const workoutToInsert = {
		id: uuid(),
		...newWorkout,
		createdAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }),
		updatedAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' })
	}

	const createdWorkout = Workout.createNewWorkout(workoutToInsert)
	return createdWorkout
}

exports.updateOneWorkout = function (req, res) {}

exports.deleteOneWorkout = function (req, res) {
	return
}
