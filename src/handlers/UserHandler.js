import { apiSourceURL } from '../myconfig';

async function CreateUser(user) {
    var req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    }
    const resp = await fetch(apiSourceURL+"/users", req)
    return await resp.json()
}

async function DoesEmailExist(email) {
    const resp = await fetch(apiSourceURL+"/users/email/exists/"+email) 
    if (!resp.ok) {
        // console.log(resp)
        throw Error
    }
    return await resp.json()   
}

async function UpdateUser(id,user) {
    const req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user),
    }
    const resp = await fetch(apiSourceURL+"/users/"+id,req)
    if(!resp.ok) {
        throw Error
    }
    return await resp.json()
}

async function SetUserPassword(id,password) {
    const req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({password : password})
    }
    const resp = await fetch(apiSourceURL+"/users/password/" + id,req)
    return await resp.json()
}

async function VerifyUserEmail({code , email}) {
    const req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({code : code , email : email})
    }
    console.log(code,email)
    const resp = await fetch(apiSourceURL+"/users/email/confirm",req)
    console.log(resp)
    if(!resp.ok) {
        throw Error
    }
    return await resp.json()
}

async function SendUserEmailConfirmationCode(email) {
    const req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({email : email})
    }
    const resp = await fetch(apiSourceURL+"/users/email/confirmationcode",req)
    if(resp.ok == false) {
        throw Error
    }
    return await resp.json()
}

async function SendPasswordRecoveryCode(email) {
    const req = {
        method : "POST",
        body : JSON.stringify({email : email}),
        headers : {
            "Content-Type" : "application/json"
        }
    }
    const resp = await fetch(apiSourceURL+"/users/password/recoverycode",req)
    if(!resp.ok) {
        console.log(resp)
        throw Error
    }
    return await resp.json()
}

async function ConfirmPasswordRecoveryCode({email , code}) {
    const req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({email : email , code : code})
    }
    const resp = await fetch(apiSourceURL+"/users/password/confirmrecoverycode",req)
    if(!resp.ok) {
        console.log(resp)
        throw Error
    }
    return await resp.json()
}

async function SendPasswordRecoveryLink(email) {

    const req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({email : email})
    }
    const resp = await fetch(apiSourceURL+"/users/password/recoverylink",req)

    return await resp.json()

}



export {CreateUser,DoesEmailExist,UpdateUser,SetUserPassword,VerifyUserEmail,SendUserEmailConfirmationCode,SendPasswordRecoveryCode , ConfirmPasswordRecoveryCode,SendPasswordRecoveryLink}