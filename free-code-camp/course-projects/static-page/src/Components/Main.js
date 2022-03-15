export default function Main(props){
    return (
        <main className={'main' + (props.dark ? '' : ' light')}>
            <h1>Fun Facts about React:</h1>
            <ul className="factList">
                <li className="fact"> Was first released in 2013. </li>
                <li className="fact"> Was originally created by Jordarn Walkie. </li>
                <li className="fact"> Has well over 100k stars on GitHub. </li>
                <li className="fact"> Is maintained by Facebook. </li>
                <li className="fact"> Powers thousands of enterprise apps, including mobile apps. </li>
            </ul>
        </main>
    )
};