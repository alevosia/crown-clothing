import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => {
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
					<Fragment>
						<Link className='option' to='/account'>
							{currentUser.displayName.split(' ')[0] ?? 'UNNAMED'}
						</Link>
						<div className='option' onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					</Fragment>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)