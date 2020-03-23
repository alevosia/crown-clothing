import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyDl_PAGOMopzgg6uVmPkiCEXfMy9WzpSzU',
	authDomain: 'crown-clothing-205db.firebaseapp.com',
	databaseURL: 'https://crown-clothing-205db.firebaseio.com',
	projectId: 'crown-clothing-205db',
	storageBucket: 'crown-clothing-205db.appspot.com',
	messagingSenderId: '144266235975',
	appId: '1:144266235975:web:d26fcc535ed05a67976162',
	measurementId: 'G-XWZCHF1HX8',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

// Create user
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const userSnapshot = await userRef.get()

	if (!userSnapshot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			})
		} catch (error) {
			console.error('Error creating user', error)
		}
	}

	return userRef
}

export default firebase
