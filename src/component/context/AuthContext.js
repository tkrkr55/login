import { createContext, useContext } from "react";
import React,{useEffect, useState} from 'react'
import { login, logout , onUserStateChange } from "../../fbase";
const Authcontext = createContext();

export function AuthcontextProvider({children}){
  const [user,setUser] = useState()
  useEffect(()=>{
    onUserStateChange(user =>{
      setUser(user)
    })
    },[])
 
  return <Authcontext.Provider value={{user,login,logout, }}>
    {children}
  </Authcontext.Provider>
}

export function useAuthContext(){

  return useContext(Authcontext)
 
}