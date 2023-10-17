
//import { useContext, useState } from 'react';
import './App.css';
//import NewTask from './NewTask';
import Product from './components/Product';
import Header from './components/Header'
import Nav from './components/Nav';
import {Routes, Route } from 'react-router-dom';
import About from './components/About';


function App() {



  return (
    <div className="App">
     <Nav />
     <Header />
     
     <Routes>
      <Route path="/Todo" element={<Product />} />
      <Route path="/About" element={<About />} />
     </Routes>

     
    </div>
  );
}

export default App;
