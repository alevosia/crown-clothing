import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const signout = async (history) => {
	await auth.signOut()
	history.push('/signin')
}
const Header = ({ user, history }) => {
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
				{user ? (
					<Fragment>
						<Link className='option' to='/account'>
							{user.displayName.substr(0, user.displayName.indexOf(' ')) ?? 'UNNAMED'}
						</Link>
						<div className='option' onClick={() => signout(history)}>
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

export default withRouter(Header)
