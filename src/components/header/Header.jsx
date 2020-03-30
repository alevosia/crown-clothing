import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

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

// styled components
const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`

const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`

const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const OptionLink = styled(Link)`
	cursor: pointer;
	padding: 10px 15px;
	text-transform: uppercase;
`

// Header component
const Header = ({ currentUser, isCartHidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo />
			</LogoContainer>

			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{isCartHidden ? null : <CartDropdown />}
		</HeaderContainer>
	)
}

// pass the global state from redux store as a props to this component
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	isCartHidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
