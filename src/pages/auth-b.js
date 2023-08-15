import { Login, Register } from "./log-reg.js";
import { useState } from 'react';

export const Auth = () => {
    const [showForm, setShowForm] = useState();

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    return (
        <>
            {showForm ? (
                <>
                    <Login />
                    <button onClick={() => setShowForm(false)}>Don't have an account? Registere Here!</button>
                </>
            ) : (
                <>
                    <Register />
                    <button onClick={() => setShowForm(true)}>Already have an account? Login Here!</button>
                </>
            )}

        </>

    )
}