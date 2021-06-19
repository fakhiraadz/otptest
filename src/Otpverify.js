import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Otpverify() {
    const [otpcode, setOtpcode] = useState('');
    const [errmsg, setErrmsg] = useState('');

    let history = useHistory();

    const otpver = () => {
        axios.post("http://localhost:4040/otp/verify", {otpcode: otpcode, phonenum: localStorage.getItem("phonenum")}).then((response) => {
            console.log(response)
            

            if (response.data.status == "success") {
                setErrmsg(response.data.message);
                history.push('/Register');
            } else {
                setErrmsg(response.data.message);
            }

        })
    }


    return (
        <div className="otp-container">
            <div className="otp-title">
                <h4>Verification</h4>
            </div>
            <div className="otp-input">
                <input required type="text" name="otpcode" id="otpcode" placeholder="Enter OTP code"
                onChange={(e) => {
                    setOtpcode(e.target.value);
                }}
                />
            </div>

            <div className="sendotp-btn">
                <button className="otpbtn" onClick={otpver}>Send OTP</button>
            </div>

            <div className="errmsg">
                {errmsg}
            </div>
            </div>
    )
}

export default Otpverify
