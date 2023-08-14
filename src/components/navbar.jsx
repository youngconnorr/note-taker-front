import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);

    const Logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID");

    }
    return (
        <>
            <nav className="navbar">
                <div>
                    <ul className='list'>
                        <button><Link to='/'> Home</Link></button>
                        <button><Link to='/note-list'> Your Notes</Link></button>
                        <button><Link to='/make-note'> Create Note </Link></button>
                        {!cookies.access_token ? (<button><Link to='/auth'>
                            Login/Register</Link></button>) : <button> Log out</button>}

                    </ul>
                </div>
            </nav>

        </>
    )
}