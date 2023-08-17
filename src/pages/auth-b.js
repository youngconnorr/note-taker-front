import { Login, Register } from "./log-reg.js";
import { useState } from 'react';

export const Auth = () => {
    const [showForm, setShowForm] = useState();

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    return (
        <p>
            {showForm ? (
                <>
                    <Login />
                    <div className='flex justify-center'>
                        <button onClick={() => setShowForm(false)} className='text-gray-500 flex justify-center p-2 m-5 hover:text-white transition ease-in-out duration-300'>
                            Don't have an account? Register Here!
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <Register />
                    <div className='flex justify-center '>
                        <button onClick={() => setShowForm(true)} className='text-gray-500 flex justify-center p-2 m-5 hover:text-white transition ease-in-out duration-300'>
                            Already have an account? Login Here!
                        </button>
                    </div>
                </>
            )}

        </p>

    )
}