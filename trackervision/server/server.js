const PORT = 8000
const express = require('express')
const bcrypt = require('bcrypt')
const { v1: uuidv1} = require('uuid')
// const { connect } = require('getstream')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const sampleRequestToken = '0b853d9598b16cd1628f6dd717a4152d667d3c32'

//call for session id: https://api.themoviedb.org/3/authentication/session/new?api_key=93916c935979931b0ffa32a131a1cf5e

const API_KEY = '93916c935979931b0ffa32a131a1cf5e'
const request_token = requestToken()
//1. generate request token, 2. TMDb approve token, 3. generate access token

//create request token (60mins duration)
const requestToken = async () => {
     `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
}

//approve redirect
const approveRequest = async () => {
    await axios.get (`https://www.themoviedb.org/auth/access?request_token=${request_token}?redirect_to=http://www.yourapp.com/approved`)
}
approveRequest();

//create access token/session (need request token)
const session = `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`

//delete access token



//sign up
app.post('/signup', async (req,res) => {
    try{
        const { username, password } = req.body

        const userId = uuidv1();
        const hashedPassword = await bcrypt.hash(password, 10)
        // const client = connect(API_KEY,)
        // const token = client.createUserToken(userId)

        res.status(200).json({ username, userId, hashedPassword, token})
        
        console.log(username, password)
    } catch(error) {
        console.log(error)

        res.status(500).json({message: error})
    }
})

//login

app.post('/login', async (req,res) => {
    try {
        const { username, password, request_token } = req.body
        const client = connect(API_KEY)

        if (!users.length) return res.json(400).json({ message: 'User does not exist'})

        const success = await bcrypt.compare(password, users[0].hashedPassword)
        const token = client.createUserToken(users[0].id)
        const confirmedName = users[0].name
        const userId = users[0].id

        if (success) {
            res.status(200).json({ token, username: confirmedName, userId })
        } else {
            res.status(500).json({ message: 'Login failed'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))