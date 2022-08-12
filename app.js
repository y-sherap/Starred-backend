const express = require('express')
const cors = require('cors')

const app = express()


const AuthRouter = require('./routes/AuthRouter')
const PlaylistRouter = require('./routes/PlaylistRouter')
const SongRouter = require('./routes/SongRouter')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/auth', AuthRouter)
app.use('/playlist', PlaylistRouter)
app.use('/song', SongRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))