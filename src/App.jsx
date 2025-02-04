import './App.css'
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
