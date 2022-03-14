export default function Card(props){
    let badge_txt;
    if(props.card.openSpots==0){
        badge_txt = 'Sold Out';
    } else if(props.card.location=='Online'){
        badge_txt = 'Online';
    }
    return (
        <div className='card'>
        {badge_txt && <span className="card-badge">{badge_txt}</span>}
           <img className='profile' src={process.env.PUBLIC_URL + `/images/${props.card.coverImg}`}/>
           <div className='review'>
                <img className='star' src={process.env.PUBLIC_URL + '/images/star.png'}/>
                <p>{props.card.stats.rating} <span className='blur'>({props.card.stats.reviewCount}) • {props.card.location}</span></p>
           </div>
           <p className='card-title'>{props.card.title}</p>
           <p className='price'><span className='bold'>From${props.card.price}</span>/ person</p>
        </div>
    )
}