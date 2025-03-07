const express = require('express')
require('dotenv').config()
const cors = require('cors')
const PORT = 8000

const app = express()
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})