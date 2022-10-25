import React from 'react';
import { createContext } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const user = {diplayName:"karim"};
    const Authinfo = {user};
    return (
           <AuthContext.Provider value={Authinfo}>
            {children}
            </AuthContext.Provider> 
    );
};

export default AuthProvider;