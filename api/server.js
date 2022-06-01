const express = require('express') //bring in express
const cors = require('cors') //bring in cors

const server = express()//init server
server.use(cors()) // use cors
server.use(express.json()) // make json readable

//  const userRoutes = require('./controllers/users')
//  const authRoutes = require('./controllers/auth');

//  server.use('/auth', authRoutes)
//  server.use('/users', userRoutes)

server.get('/', (req,res) => res.send('This is the root route'))//set root page

module.exports = server //make server available to the rest of the code
