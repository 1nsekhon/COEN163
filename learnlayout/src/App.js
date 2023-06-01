import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Information from './pages/Information.js';
import Resources from './pages/Resources.js';
import Profile from './pages/Profile.js';
import Help from './pages/Help.js';
import Quiz from './pages/Quiz.js';
import NotFound from './pages/404.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router basename='/'>
    <Navbar />
    <Routes>
        <Route path='/' element={<Information />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='*' element={<NotFound />}/>
    </Routes>
    </Router>
  );
}

export default App;

