import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from './pages/About';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PageNotFound from './pages/404';
import Create from './pages/Posts/Create';
import Edit from './pages/Posts/Edit';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/create' element={<Create/>}/>
        <Route path='/posts/edit' element={<Edit/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
