import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './styles/fonts.css'
import Home from './pages/Home'
import About from './pages/About'
import Fiche from './pages/Fiche'
import PageNotFound from './pages/404'
import Header from './components/Header'
import Footer from './components/Footer'
import logementsJSON from './assets/json/logements.json'
import './index.css'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div id='main'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fiche/:id' element={<ValidateFiche />} />
          <Route path='/fiche/*' element={<PageNotFound />}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
)

function ValidateFiche() {
  let params = useParams();
  let logementsID = [];
  logementsJSON.forEach((logement) => {
    logementsID.push(logement.id)
  })
  
  if (!logementsID.includes(params.id)) {
    return <PageNotFound />;
  }
  return <Fiche />;
}