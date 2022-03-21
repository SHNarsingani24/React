export default function Die(props){
    return (<div className={'box' + (props.die.isHeld ? ' held' : '')} onClick={props.hold}>
        <h3>{props.die.val}</h3>
    </div>)
}