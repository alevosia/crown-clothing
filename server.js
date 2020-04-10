const path = require('path')
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const enforce = require('express-sslify')

// load up variables from .env file during development only
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
	app.use(compression())
	app.use(enforce.HTTPS({ trustProtoHeader: true }))
	app.use(express.static(path.join(__dirname, 'client/build')))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
	})
}

app.get('/service-worker.js', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

// routers
app.use(require('./payment/payment.router'))

app.listen(PORT, (error) => {
	if (error) throw error
	console.log(`Server is now listening to port ${PORT}.`)
})
