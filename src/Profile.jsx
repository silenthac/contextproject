import React ,{useContext} from 'react'
import UserContext from './context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return (
    <div className=' flex items-center  justify-center m-3'>
        <h1>Please login</h1>
        </div>)

  return (
    <div className='flex items-center  justify-center m-3'>Welcome {user.username}</div>
  )
}

export default Profile