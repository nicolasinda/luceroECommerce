//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './comoponents/ItemListContainer';
//import Ejemplo from './comoponents/Ejemplo';
import NavBar from './comoponents/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Mensaje main"/>
    </>
  );
}

export default App;
