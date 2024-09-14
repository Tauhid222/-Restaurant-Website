
import './App.css';


import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfund from './pages/Pagenotfund';


function App() {
  return (
    <div className="App " >
      
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Menu" element={<Menu/>}/>
        <Route path="*" element={<Pagenotfund/>}/>
       </Routes>
       
       </BrowserRouter>
      
    </div>
  );
}

export default App;
