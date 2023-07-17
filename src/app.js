const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const v1Router = require('./v1/routes')

app.use('/api/v1', v1Router)

app.get('/', (req, res) => {
	res.send('<h2>Server is running...</h2>')
})

app.listen(port, () => console.log(`API is running on port ${port}`))
