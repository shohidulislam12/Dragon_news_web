import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUSer]=useState()
    const name=""
    const creatnewUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfu={
        name,creatnewUser,user,setUSer
    }
   useEffect(()=>{
    const unsubsCribe= onAuthStateChanged(auth, (currenruser) => {
            if (currenruser) {
             console.log('user is',currenruser)
            } else {
              console.log('useer sign out')
            }
          });
          return ()=>{
            unsubsCribe()
          }
    },[])
    return (
        <AuthContext.Provider value={authInfu} >
{
    children
}

        </AuthContext.Provider>
    );
};

export default AuthProvider;