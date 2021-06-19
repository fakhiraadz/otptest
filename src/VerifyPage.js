import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './App.css';

function VerifyPage() {

    let history = useHistory();

    const [phonenum, setPhonenum] = useState('')
  

    const otpreq = () => {
        axios.post("https://otptest-1.herokuapp.com/otp/sendotp", {phonenum: phonenum}).then((response) => {
            console.log(response)
            localStorage.setItem("phonenum", phonenum)
            history.push('/Otp');
        })
    }


    return (
        <div className="phonenum-container">
        <div className="container-title">
            <h4>Verification</h4>
        </div>
        <div className="phonenum-input">
            <input required type="text" name="phonenum" id="phonenum" placeholder="Enter phone number"
            onChange={(e) => {
                setPhonenum(e.target.value);
            }}
            />
        </div>

        <div className="sendotp-btn">
            <button className="otpbtn" onClick={otpreq}>Send OTP</button>
        </div>
        </div>
    );
}

export default VerifyPage
