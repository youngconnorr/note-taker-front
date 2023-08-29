import { useEffect, useState } from 'react';
import axios from 'axios'
import { GetUserID } from "../hooks/useGetUserID";

export const Home = () => {    
    const [note, setNote] = useState([]);
    
    const userID = GetUserID();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get("http://localhost:3001/notes")
                setNote(response.data);
            } catch (error) {
                console.log(error);
            }

        }

        fetchNote();

    }, []);

    const saveNote = async(noteID) => {
        try {
           const response = await axios.put("http://localhost:3001/notes", {noteID, userID})
           console.log(response)
       } catch (error) {
           console.log(error);
            }
               
       }


    const removeHtmlTags = (str) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = str;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    return (
        <div>
            <h1 className='pb-5'>Your notes</h1>
            <ul className={''}>
                {note.map((note) => (
                    <li key={note._id} className='border rounded-lg w-1/2 py-2 px-2'>
                        <div className=''>
                            <h2> {note.color}</h2>
                            <button className='hover:bg-blue-200 hover:text-black' onClick={() => saveNote(note._id)}>Save note</button>
                        </div>
                        <div className='pb-2'>
                            <h2>{note.name}</h2>
                        </div>
                        <div className='border-t pt-2'>
                            <h3>{removeHtmlTags(note.content)}</h3>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}