import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from './components/Card';
import data from './data';


function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="cardList">
        {cards}
      </div>
    </div>
  );
}

export default App;
