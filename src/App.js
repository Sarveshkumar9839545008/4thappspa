import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './components/Home/Homepage';

function App() {
  return (
     <BrowserRouter>
      <Navbar />
      <div className='app'>
        {/* <h1>App</h1> */}
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product' element={<h1>Product Page</h1>} />
            <Route path='/Service' element={<h1>Service Page</h1>} />
            <Route path='/category' element={<h1>Category</h1>} />
            <Route path='/gallery' element={<h1>Gallery</h1>} />
            <Route path='/contect' element={<h1>Contect</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
          </Routes>
         </div>
      </BrowserRouter>
    );
}

export default App;
