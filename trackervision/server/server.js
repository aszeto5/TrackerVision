const PORT = 8000
const express = require('express')
const bcrypt = require('bcrypt')
const { v1: uuidv1} = require('uuid')
// const { connect } = require('getstream')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const API_KEY = '93916c935979931b0ffa32a131a1cf5e'
//exmample api request: https://api.themoviedb.org/3/movie/550?api_key=93916c935979931b0ffa32a131a1cf5e

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

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))