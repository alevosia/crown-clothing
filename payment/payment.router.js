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
			console.error(stripeError)
			res.status(500).send({ error: stripeError })
		} else {
			console.log(stripeResponse)
			res.status(200).send({ success: stripeResponse })
		}
	})
})

module.exports = paymentRouter
