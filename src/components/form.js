export const Form = ({
    username,
    setUsername,
    password,
    setPassword,
    label,
    onSubmit,
}) => {
    return (
        <div className='text-white flex-grow'>
            <form onSubmit={onSubmit}>
                <h1> {label} </h1>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input
                        type="text"
                        id="username"
                        className='text-black '
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
            </form>
            <button type="submit"> {label} </button>
        </div>
    )
}