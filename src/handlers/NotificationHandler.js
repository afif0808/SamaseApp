import { apiSourceURL } from '../myconfig';

async function GetNotificationsByUserId(userId) {
    const resp = await fetch(apiSourceURL+"/users/"+userId+ "/notifications")
    console.log(apiSourceURL+"/users/"+userId+ "/notifications")
    if(!resp.ok){
        throw Error
    }
    return await resp.json()
}

async function GetUnreadNotificationCountByUserID(userID) {
    const resp = await fetch(apiSourceURL+"/users/" + userID + "/notifications/unread/count")
    // console.log(apiSourceURL+"/users/" + userID + "/unread/count")
    if(!resp.ok){
        throw Error
    }
    return await resp.json()
}

async function MarkNotificationAsRead(id) {
    const req = {
        method : "POST",
    }
    const resp  = await fetch(apiSourceURL+"/notifications/"+id+"/read",req)

    if(!resp.ok) {
        throw Error
    }
    return await resp.json()
    
}

export {GetNotificationsByUserId, GetUnreadNotificationCountByUserID , MarkNotificationAsRead}