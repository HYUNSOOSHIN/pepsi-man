import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
}

firebase.default.initializeApp(firebaseConfig)

export const firebaseInstance = firebase

export const authService = firebase.default.auth()
export const dbService = firebase.default.firestore()
export const storageService = firebase.default.storage()
