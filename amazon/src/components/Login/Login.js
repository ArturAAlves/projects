import React, { useState } from 'react'
import "./Login.scss"
import AmazonLogo from "./img/amazon-logo-b.png"
import { Link, useHistory } from 'react-router-dom'
import { auth } from "../../firebase"


const Login = () => {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")


    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {

                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    // console.log(email, password)

    return (
        <div className="login">
            <Link to="./">
                <div className="login-img">
                    <img src={AmazonLogo} alt="amazon logo" />
                </div>
            </Link>
            <div className="login-form">
                <h1>Sign-In</h1>
                <form className="login-form-container">
                    <h5>Email</h5>
                    <input type="text" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>password</h5>
                    <input type="password" placeholder="password" value={password} onChange={e => setpassword(e.target.value)} />
                    <button type="button" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Clone <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a> .</p>
            </div>
            <div className="login-bar">
                <p>
                    New to Amazon?
                </p>

            </div>
            <div className="login-createAcc">
                <button type="button" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
