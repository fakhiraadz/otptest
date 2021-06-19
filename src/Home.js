import React, { useState, useEffect } from 'react'

function Home() {
    


    return (
        <div>
            Hello, {localStorage.getItem("username")}
        </div>
    )
}

export default Home
