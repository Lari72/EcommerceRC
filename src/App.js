import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings={"Binevenidos a mi tienda"}/>

    </div>
  );
}


export default App;
    
