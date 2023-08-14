import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
    return (
        <>
            <h1>
                <Login />
                <Register />
            </h1>
        </>
    )
}

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http:localhost:3001/auth/register", { username, password }) // object for the body of the post request (ie. user,pass). Recall router.post .... req.body
            alert("registration complete! login now!")
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Register"
            onSubmit={onSubmit}

        //using props and components we don't have to repeat ourselves
        />
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
        <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Login"
        //using props and components we don't have to repeat ourselves
        />
    )
}

const Form = ({
    username,
    setUsername,
    password,
    setPassword,
    label,
    onSubmit,
}) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1> {label} </h1>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
            </form>
            <button type="submit"> {label} </button>
        </>
    )
}