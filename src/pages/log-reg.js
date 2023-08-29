import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'



export const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", { username, password }) // object for the body of the post request (ie. user,pass). Recall router.post .... req.body
            alert("registration complete! login now!")
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
                label="Register"
                onSubmit={onSubmit}

            //using props and components we don't have to repeat ourselves
            />
        </>
    )
}

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [_, setCookies] = useCookies(["access_token"]) // check again

    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:3001/auth/login", { username, password });
            if (response.data.token) {
                setCookies('access_token', response.data.token);
                console.log('it worked!')
                navigate("/")
            } else {
                setCookies('access_token', ''); // Clear the cookie if there is no token
                alert("account doesn't exist")
            }; //grabbing jwt and userid
            window.localStorage.setItem("userID", response.data.userID)

             //when finishing it will redirect you
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
            onSubmit={onSubmit}
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
        <div className='flex justify-center mt-4 h-full'>
            <form onSubmit={onSubmit}>
                <h1 className='flex justify-center'> {label} </h1>
                <div className='pt-5 pb-5'>
                    <label htmlFor='username'>Username: </label>
                    <input
                        type="text"
                        id="username"
                        className='text-black'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type="password"
                        id="password"
                        className='text-black'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className='flex justify-end'>
                    <button type='submit' className='px-4  mt-5 pr-3 hover:translate-x-2 transition-transform duration-300 ease-in-out'> <Arrow /> </button>
                </div>
            </form>
        </div>
    )
}


const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='fill-current text-white'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

    )
}