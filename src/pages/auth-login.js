import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from 'react-router-dom'
import { Form } from '../components/form.js'

export const Auth = () => {
    return (
        <>
            <h1>
                <Login />
            </h1>
        </>
    )
}

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [_, setCookies] = useCookies(["access_token"]) // check again

    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http:localhost:3001/auth/login", { username, password });

            setCookies("access_token", response.data.token); //grabbing jwt and userid
            window.localStorage.setItem("userID", response.data.userID)

            navigate("/") //when finishing it will redirect you
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Form
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                label="Login"
            //using props and components we don't have to repeat ourselves
            />
            <h3>
                <button> 
                    <Link to='/auth/register'>
                    Have no account? Register here!
                    </Link>
                </button>
            </h3>
        </>
    )
}