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

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
