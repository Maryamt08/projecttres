const express = require('express')
const router = express.Router()
const Comment = require('../models/reviews');
const { isLoggedIn, isValidId } = require('../middleware/customMiddleware')

router.get('/getNailTech/:id', isValidId, (req, res) => {
    Comment
        .find({ nailTech: req.params.id })
        .populate('NailTech')
        .sort({ 'createdAt': -1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newReview', isLoggedIn, (req, res) => {
    Comment
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.put('/editReview/:id', isLoggedIn, isValidId, (req, res) => {
    Comment
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.delete('/deleteReview/:id', isLoggedIn, isValidId, (req, res) => {
    Comment
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Review Deleted' }))
        .catch(err => res.status(500).json(err))

})



module.exports = router;