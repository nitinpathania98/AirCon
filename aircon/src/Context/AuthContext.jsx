import React, { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const AuthContext = createContext();


function AuthProvider(props) {
    const navigate = useNavigate()
    const [userToken, setUserToken] = useState(null)
    const Register = (formdata) => {
        axios({
            method: 'post',
            url: 'http://localhost:8082/register',
            data: formdata
        }).then((res) => {
            console.log(res.data)
        })
    }
    // ......Login session

    const Login = (formdata) => {
        axios({
            method: 'post',
            url: 'http://localhost:8082/login',
            data: formdata
        }).then((res) => {
            if (res.data.status = "success") {
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("useremail", res.data.useremail);
                sessionStorage.setItem("userid", res.data.userdata._id)
                navigate('/')
            }
        })
    }

    const Logout = () => {
        try {
            setUserToken(null)
            sessionStorage.removeItem('useremail');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userid');
            navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider value={{ Register, Login, Logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
