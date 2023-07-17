const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

exports.getAllWorkouts = function () {
	return DB.workouts
}

exports.createNewWorkout = function (newWorkout) {
	const workoutExists = DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1

	if (workoutExists) return

	DB.workouts.push(newWorkout)
	saveToDatabase(DB)
	return newWorkout
}
