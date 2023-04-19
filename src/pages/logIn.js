import React, { useContext, useEffect, useRef } from 'react'
import PocketBase from 'pocketbase'
import './login.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Token } from '../App'

export const LogIn = () => {
  const Email = useRef()
  const Password = useRef()
  const setToken = useContext(Token)

  const navigate = useNavigate()
  const Login = async () => {
    const pb = new PocketBase('http://127.0.0.1:8090')
    try {
      const authData = await pb
        .collection('users')
        .authWithPassword(Email.current.value, Password.current.value)
      console.log(authData)
      sessionStorage.setItem('Token', authData.token)
      setToken(authData.token)
      toast.success('logged in succsesfully')
      navigate('/Clients')
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    const token = sessionStorage.getItem('Token')
    console.log(token)
    if (token !== null) {
      navigate('/Clients')
    }
  })
  return (
    <>
      <div className="LoginContainer">
        <div className="form">
          <div className="logIn-Container">
            <h2 className="header ">Welcome Back</h2>
            <p>Welcome Back! please enter you details.</p>
            <h4>Email</h4>
            <input type="email" placeholder="Enter your Email" ref={Email} />
            <h4>Password</h4>
            <input
              type="password"
              placeholder="Enter your Password"
              ref={Password}
            />
            <br />
            <button className="Sign-btn" onClick={Login}>
              Sign in
            </button>
            <p className="noAcc">
              Forgot Password ?
              <span className="signUp-link">Reset Password</span>
            </p>
          </div>
        </div>
        <div className="Img">
          <img className="Banner" src="./images/banner.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
