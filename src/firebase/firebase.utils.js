import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlqL619kB3_74rDx4zYLd0rBW0ugEMpl8",
    authDomain: "crwn-db-64314.firebaseapp.com",
    databaseURL: "https://crwn-db-64314.firebaseio.com",
    projectId: "crwn-db-64314",
    storageBucket: "",
    messagingSenderId: "723474769510",
    appId: "1:723474769510:web:b7f6ffc240bc1c3f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return false;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData });
        } catch (error) {
            console.log(error.message);
        }


    }
    return userRef;
};

firebase.initializeApp(config);




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
