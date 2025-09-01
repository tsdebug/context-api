import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null)
    return(
        // We wrap the elements in this variable like this: This is a provider: the elements inside will get the access to this global variable - UserContext  
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;


