import React from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";

function App() {

  const [dice, setDice] = React.useState(getAllDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const num = dice[0].val;
    for(let i=0; i<10; i++){
      if(dice[i].isHeld){
        if(dice[i].val !== num) return;
      } else {
        return;
      }
    }
    setTenzies(true);
    console.log('GAME WON!');
  }, [dice])
  
  function getAllDice(){
    const allDice = [];
    for(let i=0; i<10; i++){
      let randomNum = Math.floor(Math.random()*6+1);
      allDice.push({id: i, val: randomNum, isHeld: false});
    }
    return allDice;
  }
  
  function changeDice(){
   
    if(tenzies) {
      setDice(getAllDice()); 
      setTenzies(false);
    } else {
        setDice(prevDice => prevDice.map( die => {
            if(die.isHeld) return die;
            else {
              return {
                ...die,
                val: Math.floor(Math.random()*6+1)
              }
            }
          }));
    }
  }

  function holdDie(id){
    setDice(prevDice => prevDice.map(die => {
      if(die.id==id){
        return {
          ...die,
          isHeld: !die.isHeld
        }
      } else {
        return die;
      }
    }))
  }
  
  const allDice = dice.map(die => <Die key={die.id} die={die} hold={() => holdDie(die.id)}/>)
  
  return (
    <main>
      <div className="intro">
        <h1 className="title">Tenzies</h1>
        <p className="desc"> Roll untill all dice are same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <break></break>
      <section className="container">
        {allDice}
      </section>
      <break></break>
      <button onClick={changeDice}>{tenzies ? "Reset the game" : "Roll"}</button> 
      {tenzies && <Confetti/>}
    </main>
    
  );
}

export default App;
