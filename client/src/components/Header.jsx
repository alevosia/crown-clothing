import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

// assets
import { ReactComponent as Logo } from '../assets/crown.svg'

// actions
import { signOutStart } from '../redux/user/user.actions'

// selectors
import { selectCurrentUser } from '../redux/user/user.selectors'
import { selectCartHidden } from '../redux/cart/cart.selectors'

// components
import CartIcon from './CartIcon'
import CartDropdown from './CartDropdown'

// styled components
const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 425px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 0;
	}
`

const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
	/* display: flex;
	justify-content: center;
	align-items: center; */

	@media screen and (max-width: 425px) {
		width: 50px;
		padding: 0;
	}
`

const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 425px) {
		width: 100%;
		font-size: 16px;
	}
`

const OptionLink = styled(Link)`
	cursor: pointer;
	padding: 10px 15px;
	text-transform: uppercase;

	@media screen and (max-width: 425px) {
		padding: 5px 10px;
	}
`

const Header = ({ currentUser, isCartHidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo />
			</LogoContainer>

			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
