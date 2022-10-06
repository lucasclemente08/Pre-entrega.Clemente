import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import './App.css';

function App() {
  return(
   <>
   <BrowserRouter>
<NavBar/>
<Routes>
  <Route path='/' element={<ItemListContainer />}/>
  <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
</Routes>



   
   </BrowserRouter>
</>
  )
}

export default App;
