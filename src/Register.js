import React, { useState } from 'react'
import './Register.css';
import Axios from 'axios';
import validator from 'validator';
import { useHistory } from 'react-router-dom';


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [errmsg, setErrmsg] = useState('');
    const [errusername, setErrusername] = useState('');
    const [erremail, setErremail] = useState('');
    const [errpassword, setErrpassword] = useState('');

    let history = useHistory();

    const validateform = () => {
        //Username validation
        if (username == "") {
            setErrusername("Please enter required username")
        } else {
            setErrusername("")
        }

        //Email validation
        if (email == "") {
            setErremail("Please enter required email!")
        } else if (!validator.isEmail(email)) {
            setErremail("Please enter valid email!")
        } else {
            setErremail("")
        }

        //Password validation
        if (password == "") {
            setErrpassword("Please enter required password!")
        } else if (!validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setErrpassword("Please enter strong password! Password must contains atleast 8 length including 1 lowercase, 1 uppercase, 1 number and 1 unique symbol")
        } else {
            setErrpassword("")
        }

        if (errusername !== "" || erremail !== ""|| errpassword !== ""){
            return false
        }

        return true
    };


    const register = () => {

        if (validateform()) {
            Axios.post("http://otptest-1.herokuapp.com/otp/register", {username: username, email: email, password: password, phonenum: phonenum}).then((response) => {
                if (response.data.exist) {
                    setErrmsg(response.data.message);
                } else {
                    setErrmsg("Registration Successfull");
                    
                    localStorage.clear("phonenum");
                    localStorage.setItem("username", username);
                    history.push('/Home');
                }

                console.log(response);
            });
        } 

    };


    return (
        <>
        <div className="register-container">
            <div className="register-form">
                <h1>Register</h1>
                <p>Please enter your details</p>

                <form action="">

                </form>

                <div className="register-input">
                    <input required readOnly type="text" name="phonenum" id="phonenum" placeholder="Phonenum"
                        value={localStorage.getItem("phonenum")}
                        onChange={(e) => {
                            setPhonenum(e.target.value);
                        }}
                    />
                </div>
            
                <div className="register-input">
                    <input required type="text" name="username" id="username" placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="Errormsg">
                    {errusername}
                </div>

                <div className="register-input">
                    <input required type="email" name="email" id="email" placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="Errormsg">
                    {erremail}
                </div>
                

                <div className="register-input">
                    <input required type="password" name="password" id="password" placeholder="Password" 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="Errormsg">
                    {errpassword}
                </div>

                <button className="register-btn" onClick={register}>Register</button>

                <div className="Errormsg" >
                    {errmsg}
                </div>

                <div className="alreadyreg">Already registered? Click here <a href="/Login">Login</a></div>
            </div>
        </div>
        </>
    )
}

export default Register
