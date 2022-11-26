
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ReactDOM from 'react';
// import { useState } from 'react';
import React from 'react';

// page imports
import Layout from './components/Layout'
import { Feed } from './components/Feed';
import { Footer } from './components/Footer';
import { Nbar } from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Friends } from './components/Friends';
import { Settings } from './components/Settings';
import NoPage from './components/NoPage';




function App() {
  return (
    <BrowserRouter>
      <nav className='w-100'>
        <Nbar />
      </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path='Friends' element={<Friends />} />
          <Route path='Settings' element={<Settings />} />
          <Route path='SignIn' element={<SignIn />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Home' element={<Feed />} />
          <Route path='*' element={<NoPage />} />


        </Route>
      </Routes>

      <footer>
        <Footer />
      </footer>

    </BrowserRouter>
  )
}

export default App;
