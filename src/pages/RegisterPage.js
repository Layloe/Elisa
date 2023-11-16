import React, { useState } from "react";
import axios from "axios";

const RegisterPage = ({onRegister}) => {
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
        <form>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    )
} 

export default RegisterPage