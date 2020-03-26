import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// firebase
import { auth } from '../../firebase/firebase.utils'

// assets
import { ReactComponent as Logo } from '../../assets/crown.svg'

// selectors
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

// components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

// styles
import './header.styles.scss'

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
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	isCartHidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
