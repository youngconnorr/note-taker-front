import { useState } from "react";
import axios from 'axios';

export const MakeNote = () => {
    const [note, setNote] = useState({});
    //color: ""
    //name: ""
    //content: ""

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/notes", note)
            alert("Note created!")
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className=''>
            <h2> Take a note </h2>
            <div className='pt-3'>
                <form onSubmit={onSubmit}>
                    <p className='text-sm space-x-3'>
                        <label htmlFor="color">Color:</label>
                        <input
                            type='text'
                            id='color'
                            name='color'
                            className='border-b bg-primary
                            focus:outline-none text-sm w-40'
                            onChange={handleChange}>
                        </input>
                    </p>
                    <p className='pt-3 pb-3 space-x-3 text-sm'>

                        <label htmlFor="name">Note Name:</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='border-b bg-primary
                            focus:outline-none text-sm w-40'
                            onChange={handleChange}>
                        </input>
                    </p>
                    <p className='pt-1'>
                        <label htmlFor="content"></label>
                        <textarea
                            name='content'
                            id='content'
                            className='border rounded bg-primary
                            focus:outline-none text-sm w-4/5
                            px-2 py-1 h-80'
                            placeholder='Your note...'
                            onChange={handleChange}>
                        </textarea>
                    </p>

                    <button type='submit' className='border rounded px-2 mt-1 hover:bg-gray-200 hover:text-primary transition ease-in-out duration-400'> Save note
                    </button>
                </form>
            </div>
        </div>
    )
}