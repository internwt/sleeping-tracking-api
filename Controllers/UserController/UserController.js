import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import User from '../../models/users'
import empty from 'is-empty'

const checkUserExistsByEmail = async (email) => {
    return await User.findOne({ email })
}

const registerUser = async (req, res) => {
    let { name, email, password } = req.body;
    email = email.toLowerCase();
    let checkUser = await checkUserExistsByEmail(email)
    if (checkUser) {
        return res.status(404).send(`user already created exists with this ${email} address`)
    }
    password = bcrypt.hashSync(password, 8)
    const user = new User({ name, email, password })
    const newUser = await user.save()
    if (newUser) {
        return res.status(200).send({
            message: 'user created successfully',
            isError: false
        })
    }
}

const loginUser = async (req, res) => {
    let { email, password } = req.body
    let checkUser = await checkUserExistsByEmail(email)
    console.log(`checkuser`, checkUser)
    email = email.toLowerCase();
    if (empty(checkUser)) {
        return res.status(404).send('user not found.')
    }
    if (!await bcrypt.compare(password, checkUser.password)) {
        return res.status(200).send('password wrong please try again later.')
    }
    jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: checkUser.password
    }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        if (err) {
            return res.status(400).send('something went wrong')
        }
        return res.status(201).send({ token, user_id: checkUser.id })
    })

}

const forgotPassword = async (req, res) => {
    let { email } = req.body;
    email = email.toLowerCase();
    // send link to email and expires after 24 hrs and once user will update link must be expires
}

const resetPassword = async (req, res) => {
    let { email } = req.body;
    email = email.toLowerCase();
    if (empty(checkUser)) {
        return res.status(404).send('user not found.')
    }
}

export {
    registerUser,
    loginUser,
    resetPassword,
    forgotPassword
}