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
                    <ul className='bg-navbar text-white top-0 left-0 h-screen w-16 flex flex-col shadow-lg pt-6 justify-between'>
                        <div className='space-y-12'>
                            <button className='absolute mx-3  pt-3 px-3 hover:-translate-y-0.5 transition-transform duration-300 ease-in-out'><Link to='/'> <House /> </Link></button>
                            <button className=' mx-2 border-t border-b py-5 px-4'><Link to='/make-note'> <Plus /> </Link></button>
                            <button className='block mx-2.5 py-5 px-4 -translate-y-12'><Link to='/note-list'> <Note /></Link></button>
                        </div>
                        <div className='ml-2 pb-10 pt-3 mx-3  border-t'>
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


const House = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className='fill-current text-white'><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
    )
}

const Plus = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='fill-current text-white'><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
    )
}

const Note = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className='fill-current text-white'><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
    )
}