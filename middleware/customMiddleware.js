const mongoose = require('mongoose')

module.exports = {
  isLoggedIn: (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({ message: 'Log in to access' }),
  isNailTech: (req, res, next) => req.user.role === 'NailTech' ? next() : res.status(403).json({ message: 'Unauthorized' }),
  isUser: (req, res, next) => req.user.role === 'User' ? next() : res.status(403).json({ message: 'Unauthorized' }),
  isValidId: (req, res, next) => mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.status(404).json({ message: 'Invalid ID' })
}