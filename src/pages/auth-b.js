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
                    <Register />
                    <div className='flex justify-center '>
                        <button onClick={() => toggleForm(true)} className='text-gray-500 flex justify-center p-2 m-5 hover:text-white transition ease-in-out duration-300'>
                            Already have an account? Login Here!
                        </button>
                    </div>

                </>
            ) : (
                <>
                    <Login />
                    <div className='flex justify-center'>
                        <button onClick={() => toggleForm(false)} className='text-gray-500 flex justify-center p-2 m-5 hover:text-white transition ease-in-out duration-300'>
                            Don't have an account? Register Here!
                        </button>
                    </div>
                </>
            )}

        </p>

    )
}