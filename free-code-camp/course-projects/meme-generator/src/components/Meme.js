import React from 'react';
// import data from '../memesData.json'

export default function Meme(){

    let [meme, setMeme] = React.useState({
        header_txt: "",
        footer_txt: "",
        randomMeme: "https://i.imgflip.com/30b1gx.jpg"
    });

    let [allMemes, setallMemes] = React.useState({});

    React.useEffect(()=>{
        document.title = 'Meme Generator';
        console.log('Ran');
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setallMemes(data));
    }, [])
    function handleChange(event){
        const {value, name} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    function generateMeme(){
        let randomIndex = Math.floor(Math.random()*100);
        let memeUrl = allMemes.data.memes[randomIndex].url;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomMeme: memeUrl
            }
        });
        return;
    }

    return (
        <div>
            <section className='form'>
                <input className='meme-inp head' onChange={handleChange} name='header_txt' placeholder="Header Text" value={meme.header_txt} type='text'/>
                <input className='meme-inp foot' onChange={handleChange} name='footer_txt' value={meme.footer_txt} placeholder="Footer Text" type='text'/>
                <button className='btn' onClick={generateMeme}>Get a new meme image 🖼️</button>
            </section>
            <section className='meme'>
                <h1 className='top'>{meme.header_txt}</h1>
                <h1 className='bottom'>{meme.footer_txt}</h1>
                <img className='meme-img' src={meme.randomMeme}/>
            </section>
        </div>
    )
}