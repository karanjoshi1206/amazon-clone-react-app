import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import logo from "./logo.png"
import { auth } from "./firebase"
import "./login.css"
function Login() {
    const history = useHistory()
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(e => alert(`There is an error ${e}`))

    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(e => alert(`There is an error ${e}`))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src={logo} alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setemail(event.target.value)} type="email" />
                    <h5 >Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_sigin_button">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={register} className="login_register_button">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
