const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController')

const requireAuth = require('../middleware/requireAuth')
//require auth middleware to protect routes for all workout routes
const router = express.Router()

router.use(requireAuth)

//get all workouts
router.get('/', getWorkouts)


//get a single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//detele a workout
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)

module.exports = router



