import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, isCartHidden }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>

			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{isCartHidden ? null : <CartDropdown />}
		</div>
	)
}

// pass the global state from redux store as a props to this component
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser: currentUser,
	isCartHidden: hidden,
})

export default connect(mapStateToProps)(Header)
