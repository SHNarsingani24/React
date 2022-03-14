import reactlogo from '../img/react-logo.png';

export default function Navbar(){
    return (
        <nav className='navbar'>
            <img src={reactlogo} className='logo'/>
            <h3 className='title'>ReactFacts</h3>
            <h4 className='sub-title'>React Learning - Project 1</h4>
        </nav>
    )
};