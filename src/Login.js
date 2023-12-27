import React from 'react'

import { useState,useContext } from 'react'
import UserContext from './context/UserContext'

const Login = () => {

  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUser({username,password})


  }
  return (
    <div className='flex flex-col items-center  justify-center  border   w-1/2 m-auto'>
      <h2>Login</h2>
        <input type='text'
        className=' border border-black m-4 p-1'
        value={username}
        onChange={(e)=>setusername(e.target.value)}
         placeholder='Type your name please'/>
         
        <input type='Password'
        className='border border-black  m-4 p-1'
         value={password}
         onChange={(e)=>setpassword(e.target.value)}
         placeholder='password'/>

        <button onClick={handleSubmit} className='border border-black p-1 rounded-md'>Submit</button>
        
        
    </div>
  )
}

export default Login