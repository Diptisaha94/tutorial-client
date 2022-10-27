import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const registerEmailPassword =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginWithEmailAndPassword=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUserName=(name,photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    useEffect(()=>{
        const unsuscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsuscribe();
        }
    },[]);
    const Authinfo = {user,providerLogin,loading,logOut,registerEmailPassword,updateUserName,setUser,setLoading,loginWithEmailAndPassword};
    return (
           <AuthContext.Provider value={Authinfo}>
            {children}
            </AuthContext.Provider> 
    );
};

export default AuthProvider;