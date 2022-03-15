import reactlogo from '../img/react-logo.png';

export default function Navbar(props){
    return (
        <nav className={'nav' + (props.dark ? "" : " light")}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' className='logo'/>
            <h3 className='title'>ReactFacts</h3>
            
            <div className='toogler' onClick={props.handleToogle}>
                <p className='toogler-light'>Light</p>
                <div className='toogler-slide'>
                    <div className='toogler-circle'>
                        
                    </div>
                </div>
                <p className='toogler-dark'>Dark</p>
            </div>
        </nav>
    )
};