export default function Navbar(){
    return (
        <nav className="navbar">
            <img className='logo' src={process.env.PUBLIC_URL + '/images/logo.svg'}/>
        </nav>
    )
}