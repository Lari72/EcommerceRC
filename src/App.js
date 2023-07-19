import './App.css';
 import Navbar from './Components/Navbar';
 import ItemDetail from './Components/ItemDetail';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
   <BrowserRouter>
    <div className="App">
       <Navbar/> 

  
      <main className>
      <ItemListContainer greetings={"Binevenidos al almacen"}/>
      </main>
    </div>
   </BrowserRouter>
  );
}


export default App;

    
