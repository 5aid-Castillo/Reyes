

 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Atanagildo from './routes/Atanagildo';
import Ervigio from './routes/Ervigio';
import Ataulfo from './routes/Ataulfo';
import Leogivildo from './routes/Leogivildo';
import Sisebuto from './routes/Sisebuto';
import Recesvinto from './routes/Recesvinto';
import Teodorico from './routes/Teodorico';
import Error404 from './routes/Error404';  
import Home from './views/Home';
import Header from './components/layout/Header';
import Reservar from './routes/Reservar';
import Footer from './components/layout/Footer';

function App() {


  return (
    <>
 
                <BrowserRouter>   
  
                <Header />
    
      <Routes>
                   <Route path="/" element={<Home />}></Route>
                   <Route path="/Reservar" element={<Reservar />}></Route>
                   <Route path="/Atanagildo" element={<Atanagildo />}></Route>
                   <Route path="/Ervigio" element={<Ervigio />}></Route>
                   <Route path="/Ataulfo" element={<Ataulfo />}></Route>
                   <Route path="/Leogivildo" element={<Leogivildo />}></Route>
                   <Route path="/Sisebuto" element={<Sisebuto />}></Route>
                   <Route path="/Recesvinto" element={<Recesvinto />}></Route>
                   <Route path="/Teodorico" element={<Teodorico />}></Route> 
                   <Route path="*" element={<Home />}></Route>  
            </Routes> 
            
            </BrowserRouter>
            <Footer />
          
                 
   </>
  )
}

export default App
