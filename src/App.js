import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Home from './pages/Home/Home';
import Self_Study from './pages/Self_Study/Self_Study';    
import Turning_18 from './pages/turning_18/Turning_18';
import Gap from './pages/Gap/Gap';
import Prologue from './pages/Prologue/Prologue';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/prologue' element={<Prologue />} />
                <Route path='/turning-18' element={<Turning_18 />} />
                <Route path='/self-study' element={<Self_Study />} />
                <Route path='/gap-year' element={<Gap />} />
            </Routes>
        </Router>
    );
}
 
export default App;