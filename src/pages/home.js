import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {

    const notify = () => {
        toast('helloo')
    }

    return (
        <>
            <h1 >
                Home
                Home
            </h1>
            <button onClick={notify}>HELLO</button>
            <ToastContainer />
        </>
    )
}