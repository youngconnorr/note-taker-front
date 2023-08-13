import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
        <nav className="navbar">
             <div>
                <ul className='list'>
                    <button><Link to='/'> Home</Link></button>
                    <button><Link to='/note-list'> Your Notes</Link></button>
                    <button><Link to='/make-note'> Create Note</Link></button>
                    <button><Link to='/auth'> Login/Register</Link></button>

                </ul>
            </div>   
        </nav>
        
        </>
    )
}