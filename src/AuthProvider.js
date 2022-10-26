import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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
    useEffect(()=>{
        const unsuscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsuscribe();
        }
    },[]);
    const Authinfo = {user,providerLogin,loading};
    return (
           <AuthContext.Provider value={Authinfo}>
            {children}
            </AuthContext.Provider> 
    );
};

export default AuthProvider;