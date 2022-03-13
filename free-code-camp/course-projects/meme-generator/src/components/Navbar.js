
export default function Navbar(){
    return (
        <nav className="navbar">
            <img alt='troll-face' src={process.env.PUBLIC_URL + '/images/troll-face.svg'}/>
            <h4 className="page-title">Meme Generator</h4>
            <p>React Course - project 3</p>
        </nav>
    )
}