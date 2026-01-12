const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require('../controllers/workoutController')

// Create a router
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a workout '})
})

// UPDATE an existing workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a workout '})
})

module.exports = router