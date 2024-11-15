import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useLocation } from "react-router-dom";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUSer]=useState(null)
    const [loading,setloading]=useState(true)
  
  
    const creatnewUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin=(email,password)=>{
     return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
      return signOut(auth)
    }
    const updateUserProfile=(updatedata)=>{
      return updateProfile(auth.currentUser,updatedata)
         }




    const authInfu={ 
      creatnewUser,user,setUSer,logOut,signin,loading,updateUserProfile
    }
 
   useEffect(()=>{
    const unsubsCribe= onAuthStateChanged(auth, (currenruser) => {
  
      setUSer(currenruser)
      setloading(false)

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