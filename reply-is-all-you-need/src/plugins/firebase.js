import firebase from 'firebase/app'
require('firebase/firestore')
require('firebase/auth')
require('firebase/functions')

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDw8BWCt1m9zcjYc_sIvPngZeqFvnGiweg',
    authDomain: 'reply-is-all-you-need.firebaseapp.com',
    projectId: 'reply-is-all-you-need',
    storageBucket: 'reply-is-all-you-need.appspot.com',
    messagingSenderId: '844962270949',
    appId: '1:844962270949:web:f2fa37d5dbe750ed674e0c',
    measurementId: 'G-9SP9QYRXKC',
  })
}
export default firebase
export const db = firebase.firestore()
