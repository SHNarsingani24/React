export default function Hero(){
    return (
        <div className='hero'>
            <img className='grid' src={process.env.PUBLIC_URL + '/images/grid.svg'}/>
            <div className='hero--text'>
                <h1> Online Experiences </h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}