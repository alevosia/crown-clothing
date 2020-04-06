import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_9InUPmEqHRUw4qQkT2aRDWi200uRbvgA5z'

	const onToken = (token) => {
		alert('Payment successful')
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CROWN Clothing'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton
