import { GoogleSignin , statusCodes } from '@react-native-community/google-signin';
import { apiSourceURL } from '../myconfig';
async function LogIn(user) {
    const req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    }
    const resp = await fetch(apiSourceURL+"/login",req)
    if(!resp.ok) {
        throw Error
    }
    return await resp.json()
}

async function LogOut(token) {
    const req = {
        method : "GET",
        headers : {
            "Authorization" : "Bearer " + token
        }
    }
    const resp = await fetch(apiSourceURL+"/logout",req)
    if(!resp.ok) {
        throw Error
    }
    return await resp.json()
}

async function Authenticate(token) {
    const req = {
        method : "GET",
        headers : {
            "Authorization" : "Bearer " + token
        }
    }
    const resp = await fetch(apiSourceURL+"/authenticate/android",req)
    console.log(apiSourceURL+"/authenticate/android")
    if(!resp.ok) {
        throw Error
    }
    return await resp.json()

}


async function GoogleLogOut() {
   if(GoogleSignin.isSignedIn()) {
        try {
            await GoogleSignin.revokeAccess()
            await GoogleSignin.signOut() 
        }
        catch {
            throw Error
        }    
   }
}

async function GoogleLogIn(idToken , accessToken) {    
        const req = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({id_token : idToken})
        }
        
        const resp = await fetch(apiSourceURL+"/login/google",req)

        if(!resp.ok) {
            console.log(resp)
            throw Error
            
        }
        return await resp.json()    
  
}

async function RefreshToken(token) {
    const req = {
        method : "GET",
        headers : {
            "Authorization" : "Bearer " + token
        }
    }
    const resp = await fetch(apiSourceURL+"/token/refresh",req)
    if(!resp.ok) {
        throw Error
    }
    return await resp.json()
}

export {LogIn,GoogleLogIn,LogOut,GoogleLogOut,Authenticate , RefreshToken}