import Poke from './Poke';
import PokeDex from './PokeDex';
import Square from './Square';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <h2 className='App-title'>Pokedex</h2>
    <div className="App">
      <PokeDex pokemon={Poke}/>
    </div>
    </div>
  );
}

export default App;
