import React, { useState, useRef, useEffect } from 'react'
import { View , Text, Button, Keyboard, ActivityIndicator, ToastAndroid, StyleSheet } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import VerticalSeparator from '../components/VerticalSeparator'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UpdateUser, SendUserEmailConfirmationCode } from '../handlers/UserHandler';
import { RefreshToken, LogOut } from '../handlers/AuthHandler';


var SharedPreferences = require('react-native-shared-preferences');

function EditableTexts({onChange , onSubmit , ...props}) {
    const [editableTexts , setEditableTexts] = useState(!!props.editableTexts ? props.editableTexts : []) 
    const ref = useRef()
    const [active , setActive] = useState(0)
    useEffect(()=>{
       if(!!active) {
            if(!!ref) {
                ref.current.focus()
            }
       } 
    },[active])

    useEffect(()=>{
        // if(!!onChange) {
        //     for(const i in editableTexts) {
        //         const v = editableTexts[i]
        //         values[v.name] = v.value
        //     }
        //     onChange(values)
           
        // }
    },[editableTexts])

    const EditableText = ({index,title , ...props}) => {
        const [value , setValue] = useState(!!props.value ? props.value : "")
        useEffect(()=>{
        },[])
        return (
            <View key={index+1}>
            <Text style={{color:"#999",padding : 1}}>{title}</Text>
                {active != index  + 1  &&
                    <View style={{
                        flexDirection:"row",borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,
                    }}>
                        <Text style={{fontSize:16,flex:1}}>{value}</Text>
                        <MaterialCommunityIcons onPress={()=>{setActive(index+1)}} style={{alignSelf : "flex-end"}} name={"pencil-circle"}  color={"#999"} size={25} />
                    </View>
                }
                {active == index + 1 &&
                    <View style={{borderBottomColor : "#ccc",borderBottomWidth:1}}>
                        <TextInput 
                            onChangeText={(text)=>{
                                setValue(text)
                            }}
                            onSubmitEditing={(e)=>{
                                setActive(0)
                                const tmp = JSON.parse(JSON.stringify(editableTexts))
                                tmp[index].value = value
                                setEditableTexts(tmp)
                                if(!!onSubmit) {
                                    const values = {}
                                    for(const i in tmp) {
                                        const v = tmp[i]
                                        values[v.name] = v.value
                                    }
                                    onSubmit(values)
                                }                                
                            }}
                            ref={ref}  
                            value={String(value)} />
                        <View style={{flexDirection :"row",marginBottom:10}}>
                            <MaterialCommunityIcons 
                                onPress={()=>{
                                    ref.current.focus()
                                    setActive(0)
                                    const tmp = JSON.parse(JSON.stringify(editableTexts))
                                    tmp[index].value = value
                                    setEditableTexts(tmp)
                                    if(!!onSubmit) {
                                        const values = {}
                                        for(const i in tmp) {
                                            const v = tmp[i]
                                            values[v.name] = v.value
                                        }
                                        onSubmit(values)
                                    }                                
                                }} 
                                style={{alignSelf : "flex-end"}} 
                                name={"check-circle"}  color={"#555"} 
                                size={25} />                        
                            <MaterialCommunityIcons onPress={()=>{setActive(0)}} style={{alignSelf : "flex-end"}} name={"close-circle-outline"}  color={"#555"} size={25} />                        
                        </View>
                    </View>
                }
            </View>    
        )
    }
    if(!!editableTexts) {
        return editableTexts.map((v,i)=>{
            return <EditableText key={i} index={i} title={v.title} onSubmit={v.onSubmit} value={v.value}  />
        })
    }
    return null

}

export default function SetttingsScreen({navigation,route}) {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        if(!!route.params){
            if(!!route.params.user) {
                setUser(route.params.user)
            }
        }
    },[])
    return (
        <View style={{
            flex : 1,
            backgroundColor : "#fff",
            padding : 20,
        }}>
            {!!user &&
                <EditableTexts 
                // onChange={(values)=>{
                //     const tmp = JSON.parse(JSON.stringify(user))
                //     tmp.fullname = values.fullname
                //     tmp.email.value = values.email
                //     setUser(tmp)
                // }}
                onSubmit={(values)=>{
                    setLoading(true)
                    var emailVerified = true
                    if(user.email.value != values.email) {
                        emailVerified = false
                    } 
                    UpdateUser(user.id,{fullname : values.fullname,email : values.email,email_verified : emailVerified,name : user.name}).then(()=>{
                       SharedPreferences.setName("another")
                       SharedPreferences.getItem("nekot",(value)=>{
                            RefreshToken(value).then((resp)=>{
                                SharedPreferences.setItem("nekot",resp.token)
                                setLoading(false)       
                                ToastAndroid.show("Updated!",1000)
                                if(emailVerified == false) {
                                    SendUserEmailConfirmationCode(values.email).then((resp)=>{ 
                                        setActvityLoading(false)
                                        ToastAndroid.show("Terkirim!",1000)                       
                                    }).catch((error)=>{
                                        console.log("Error oi",error)
                                    })    
                                    navigation.replace("User")
                                    
                                }                                            
                            }).catch(()=>{
                                
                            })
                       })
                    }).catch((error)=>{
                        
                    })
                }}
                editableTexts={[
                    {  
                        name :"fullname" ,
                        title:"Name",
                        value:user.fullname,
                    }, 
                    {name:"email",title:"Email",value:user.email.value},
                ]} />
            }

            <Text 
                onPress={()=>{
                    navigation.navigate("ChangePassword",{user : user})
                }}
                style={styles.menu}>
                    Ubah Kata Sandi
            </Text>            
            <Text
                onPress={()=>{navigation.navigate("AboutUs")}}
                style={{fontSize:16,padding:15,paddingLeft:5,borderBottomColor:"#ccc",borderBottomWidth:1}}>
                    Tentang Kami
            </Text>
            
            <Text onPress={()=>{navigation.navigate("TOS")}} style={{fontSize:16,padding:15,paddingLeft:5,borderBottomColor:"#ccc",borderBottomWidth:1}}>Syarat dan Ketentuan</Text>
            <Text 
                onPress={()=>{
                    SharedPreferences.setName("another")
                    SharedPreferences.getItem("nekot",(value)=>{
                        SharedPreferences.removeItem("nekot")
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'User' }],
                        });                        
                        if(!!value) {
                            LogOut(value).then(()=>{

                            }).catch(()=>{
        
                            })        
                        }
                    })

                    SharedPreferences.removeItem("nekot")

                }}
                style={styles.menu}>
                    Keluar
            </Text>

            <VerticalSeparator  height={20}/>
            <ActivityIndicator animating={loading} size={"large"} color={"#FFBF00"} />
        </View>
    )
}

function EditableText({title ,onEditChange, ...props}) {
    const [value , setValue] = useState(!!props.value ? props.value : "")
    const [edit , setEdit] = useState(props.edit ?  props.edit : false)
    const ref = useRef()
    useEffect(()=>{
        if(edit) {
            ref.current.focus()
        }
        if(!!onEditChange) {
            onEditChange(edit)
        }
    },[edit])
    return (
        <View>
            <Text style={{color:"#999",padding : 1}}>{title}</Text>
            {!edit &&
                <View style={{
                    flexDirection:"row",borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:10,
                }}>
                    <Text style={{fontSize:16,flex:1}}>{value}</Text>
                    <MaterialCommunityIcons onPress={()=>{setEdit(true)}} style={{alignSelf : "flex-end"}} name={"pencil-circle"}  color={"#999"} size={25} />
                </View>
            }
            {edit &&
                <View style={{borderBottomColor : "#ccc",borderBottomWidth:1}}>
                    <TextInput ref={ref} value={String(value)} />
                    <View style={{flexDirection :"row",marginBottom:10}}>
                        <MaterialCommunityIcons onPress={()=>{setEdit(true)}} style={{alignSelf : "flex-end"}} name={"check-circle"}  color={"#555"} size={25} />                        
                        <MaterialCommunityIcons onPress={()=>{setEdit(false)}} style={{alignSelf : "flex-end"}} name={"close-circle-outline"}  color={"#555"} size={25} />                        
                    </View>
                </View>
           }
        </View>
    )
}


const styles = StyleSheet.create({
    menu : {
        fontSize:16,
        padding:15,
        paddingLeft:5,
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
    }
})