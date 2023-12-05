import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Inicio from './pages/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';
import Estados from './pages/Estados';
import ListaZonas from './components/ListaZonas';
import DetalleZonas from './components/DetalleZonas';
import Informacion from './pages/Informacion';


function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/estado' element={<Estados/>}/>
            <Route path='/estado/:id' element={<Estados/>}/>
            <Route path='/detalle/:id' element={<ListaZonas/>}/>
            <Route path='/detalle/zona/:id' element={<DetalleZonas/>}/>
            <Route path='/informacion' element={<Informacion/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
        <Footer/> 
    </BrowserRouter>
  );
}

export default App;