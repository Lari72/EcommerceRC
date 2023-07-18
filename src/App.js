import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Navbar/>
      <main className>
      <ItemListContainer greetings={"Binevenidos a mi tienda"}/>
      </main>
    </div>
   </BrowserRouter>
  );
}


export default App;

    
