import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Feed from './pages/feed';
import Donate from './pages/Donate';
import {Routes, Route} from 'react-router-dom'



const App = () => {
  return(
    <div>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/feed' element ={<Feed />} />
      <Route path='/Guide' element ={<Guide />} />
      <Route path='/Donate' element ={<Donate />} />
    </Routes>
    </div>

    
  );
};

export default App;

