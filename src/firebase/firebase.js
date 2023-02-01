// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBJlZ_D7D3cW-LpxXEhQjzWZuA_Cbc7KsE',
    authDomain: 'sketch-burger.firebaseapp.com',
    projectId: 'sketch-burger',
    storageBucket: 'sketch-burger.appspot.com',
    messagingSenderId: '729253000589',
    appId: '1:729253000589:web:c27369a40537cf76a079c4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
