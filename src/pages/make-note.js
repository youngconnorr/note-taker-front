import React, { useState } from "react";
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


export const MakeNote = () => {
    const [note, setNote] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value })
    }

    const handleContentChange = (content) => {
        setNote({ ...note, content });
    };

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
                        <ReactQuill
                            name='content'
                            id='content'
                            className='bg-primary
                            focus:outline-none text-sm max-w-3xl py-1 h-80'
                            onChange={handleContentChange}>
                        </ReactQuill>
                    </p>

                    <button type='submit' className=' border rounded px-2 mt-16 hover:bg-gray-200 hover:text-primary transition ease-in-out duration-400'> Save note
                    </button>
                </form>
            </div>
        </div>
    )
}