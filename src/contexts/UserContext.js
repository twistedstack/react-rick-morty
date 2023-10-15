import {useState,createContext} from 'react';
export const UserContext=createContext();



export default function UserContextProvider(props){
const [userName,setUserName]=useState("John")

 return (
    <UserContext.Provider value={{userName,setUserName}}>
       {props.children}
    </UserContext.Provider> 
 )
}



//1. Create the context as blank
//2. Assign a value
//3. Provide the value to the children