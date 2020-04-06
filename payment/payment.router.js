const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const paymentRouter = require('express').Router()

paymentRouter.post('/payment', (req, res) => {
	const { id, amount } = req.body

	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd',
	}

	console.log(body)

	stripe.charges.create(body, (stripeError, stripeResponse) => {
		if (stripeError) {
			console.error(stripeResponse)
			res.status(500)
		} else {
			console.log(stripeResponse)
			res.status(200)
		}
	})
})

module.exports = paymentRouter
