import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({onLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preverntDefault()
        try {
            const res = await axios.post('http://localhost:2121/register',
             { username, password },
             { withCredentials: true }
            )
            onRegister(res.data)

        } catch (error) {
            console.error('Registration failed:', error)
        }
    }

    return(
        
    )
}            