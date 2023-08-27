import { useEffect, useState } from 'react';
import axios from 'axios'

export const Home = () => {
    const [note, setNote] = useState([]);

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

    const removeHtmlTags = (str) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = str;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    // const getColorClassName = (note.color) => {
    //     switch(color) {
    //         case 'blue':
    //             return 
    //     }
    // }

    return (
        <div>
            <h1 className='pb-5'>Your notes</h1>
            <ul className={'border rounded-lg w-1/2 py-2 px-2 hover:bg-blue-200 hover:text-black'}>
                {note.map((note) => (
                    <li key={note._id} className=''>
                        <div className=''>
                            <h2> {note.color}</h2>
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