import { useState } from 'react';
import axios from 'axios';
import { Form } from '../components/form.js'
import { Format } from '../components/format-page.js'

export const AuthReg = () => {
    return (
        <>
            <h1 className=''>
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

