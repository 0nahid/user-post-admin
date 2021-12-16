import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from './../Firebase/firebase.init';

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const signInWithGoogle = () => {
        // signInWithPopup(auth, googleProvider).then(result => {  }).then(error => { });
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    const logout = () => {
        signOut(auth).then(result => { }).then(error => { });
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
        });
    }, [auth])
    return { signInWithGoogle, signInWithFacebook, logout, user };
}
export default useFirebase;