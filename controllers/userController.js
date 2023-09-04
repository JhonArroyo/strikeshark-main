const User = require('./models/User');

// Example controller actions
// Note: All todo are example

exports.listUser = async (req, res) => {
    const user = await User.find()
    res.render('components/user', { user })
}

exports.createUser = async (req, res) => {
    const { todo } = req.body
    const newUser = new User({ todo })
    await newUser.save()
    res.redirect('/')
}