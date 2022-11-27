
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ReactDOM from 'react';
// import { useState } from 'react';
import React from 'react';

// page imports
import Layout from './components/Layout';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Nbar } from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Friends } from './components/Friends';
import { Settings } from './components/Settings';
import NoPage from './components/NoPage';



const httpLink = createHttpLink({ uri: "/graphql" });
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token")
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : ""
    }
  }
});

const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <nav className='w-100'>
          <Nbar />
        </nav>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SignIn />} />
            <Route path='friends' element={<Friends />} />
            <Route path='settings' element={<Settings />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='home' element={<Home />} />
            <Route path='*' element={<NoPage />} />


          </Route>
        </Routes>

        <footer>
          <Footer />
        </footer>

      </Router>
    </ApolloProvider>
  )
}

export default App;
