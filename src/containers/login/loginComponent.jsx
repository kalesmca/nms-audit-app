import React from "react";
import {auth, googleProvider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import { async } from "@firebase/util";

const LoginComponent = () =>{
    const signIn = async() =>{
        try{
            await signInWithPopup(auth, googleProvider);
        }
        catch(err){
            console.log('err');
        }
    }

    const signOut = async() =>{
        try{
            await signOut(auth);
        }
        catch(err){
            console.log('signout  err');
        }
    }
    return(
        <div>
        <div>Login LoginComponent</div>
        <div>
            <button onClick={()=> {signIn()}}>Signin with Google Account</button>
        </div>
        <div>
        <button onClick={()=> {signOut()}}>Log-out</button>

        </div>
        </div>
    )
}

export default LoginComponent;