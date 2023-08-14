import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }
    return (
        <>
            <nav>
                <div>
                    <ul className='bg-navbar text-white top-0 left-0 h-screen w-16 flex flex-col shadow-lg pt-4 justify-between'>
                        <div className='space-y-5'>
                            <button className='ml-3.5'><Link to='/'> Home </Link></button>
                            <button><Link to='/make-note'> Create Note </Link></button>
                            <button><Link to='/note-list'> Your Notes</Link></button>
                        </div>
                        <div className='ml-2.5 pb-4'>
                            {!cookies.access_token //changing login button to logout when we have cookies
                                ? (<button><Link to='/auth'>Login</Link></button>)
                                : <button onClick={logout}> Log out</button>}
                        </div>
                    </ul>
                </div>
            </nav>

        </>
    )
}