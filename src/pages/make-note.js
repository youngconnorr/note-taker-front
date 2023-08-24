import React, { useState } from "react";
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { GetUserID } from "../hooks/useGetUserID";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MakeNote = () => {

    const userID = GetUserID();

    const navigate = useNavigate();

    const [note, setNote] = useState({
        color: "",
        name: "",
        content: "",
        userOwner: userID,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value })
    }

    const handleContentChange = (content) => {
        setNote({ ...note, content });
    };

    const notify = () => {
        toast('so good!')
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/notes", note)
            console.log('notify')
            navigate('/');
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
                            styles={{
                                '.ql-editor': 'font-family: font-mono, monospace;'
                            }}
                            onChange={handleContentChange}>
                        </ReactQuill>
                    </p>
                    <button type='submit' className=' border rounded px-2 mt-16 hover:bg-gray-200 hover:text-primary transition ease-in-out duration-400' onClick={notify}> Save note
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )

}