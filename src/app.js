const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const v1WorkoutsAPI = require('./v1/routes/workouts')

app.use(bodyParser.json())
app.use('/api/v1/workouts', v1WorkoutsAPI)

app.get('/', (req, res) => {
	res.send('<h2>Server is running...</h2>')
})

app.listen(port)
