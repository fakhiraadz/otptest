import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function Viewuser() {

    const [user, setUser] = useState([])

    useEffect(() => {
        Axios.get("https://otptest-1.herokuapp.com/otp/viewuser",).then((response) => {
            setUser(response.data)
        })
    }, [])

    return (
        <div>
            {user.map((val, key) => {
                return (
                    <div className="user-list">
                        {val.username}
                    </div>
                )
            })}
        </div>
    )
}

export default Viewuser
