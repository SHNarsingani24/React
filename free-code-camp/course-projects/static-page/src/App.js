import Navbar from "./Components/Navbar";
import Main from './Components/Main';
import React from "react";

export default function App(){
    const [isDark, setIsDark] = React.useState(true);

    function handleToogle(){
        setIsDark(prev => !prev);
    }

    return (
        <div>
            <Navbar dark={isDark} handleToogle={handleToogle}/>
            <Main dark={isDark}/>
        </div>
    )
};