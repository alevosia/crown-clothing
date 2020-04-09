import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase config
import config from './firebase.config'

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in with Google
export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

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
			/* eslint-disable no-alert, no-console */
			console.error('Error creating user', error)
			/* eslint-enable no-alert, no-console */
		}
	}

	return userRef
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
	const convertedCollections = collectionsSnapshot.docs.map((doc) => {
		const { title, items } = doc.data()
		return {
			id: doc.id,
			title,
			items,
			routeName: encodeURI(title.toLowerCase()),
		}
	})

	return convertedCollections.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection
		return accumulator
	}, {})
}

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe()
			resolve(userAuth)
		}, reject)
	})
}

export default firebase

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
// 	const collectionRef = firestore.collection(collectionKey)

// 	const batch = firestore.batch()

// 	objectsToAdd.forEach((obj) => {
// 		const newDoctRef = collectionRef.doc()
// 		batch.set(newDoctRef, obj)
// 	})

// 	return await batch.commit()
// }
