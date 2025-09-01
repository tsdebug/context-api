// Here we will see how data is accessed

import React, {use, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
