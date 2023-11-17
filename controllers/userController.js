const passport = require('passport')
const User = require('../models/userModel')

const loginPage = (req,res) => {
    res.send({ message: 'Login page'})
}

const registerPage = (req,res) => {
    res.send({ message: 'Register page'})
}

const loginUser = passport.authenticate('local',{
    successRedirect: '/posts',
    failureRedirect: '/login',
    failureFlash: false
})

const registerUser = async (req,res) => {
    try{
        const {username, password} = req.body
        const user = new User({username})
        await User.register(user,password)
        passport.authenticate('local')(req,res, function() {
            res.redirect('/login')
        })

    }catch (err) {
        console.log(err)
        res.redirect('/register')
    }
}

const logoutUser = (req,res) => {
    res.logout(function(err) {
        if (err) { return next(err) }
        res.redirect('/')
    })
}
module.exports = {
    loginPage,
    loginUser,
    registerPage,
    registerUser,
    logoutUser
}