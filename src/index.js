import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Fiche from './pages/Fiche'
import PageNotFound from './pages/404'
import Header from './components/Header'
import Footer from './components/Footer'


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/fiche' element={<Fiche/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </Router>
      <Footer />
    </React.StrictMode>
)