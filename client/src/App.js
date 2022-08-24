import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context'

import Header from './components/Header';
import MainNav from './components/MainNav';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Single from './pages/Single'
import Search from './pages/Search';

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path="/"
              element={<Trending />}
            />
            <Route
              path='/movies'
              element={<Movies />}
            />
            <Route
              path='/shows'
              element={<Shows />}
            />
            <Route
              path='/single/:id'
              element={<Single />}
            />
            <Route
              path='/search'
              element={<Search />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/signup'
              element={<Signup />}
            />
            <Route path='/profile'>
              <Route path=':username' element={<Profile />} />
              <Route path='' element={<Profile />} />
            </Route>
            <Route
              path='*'
              element={<NoMatch />}
            />
          </Routes>
        </div>
        <MainNav />
      </Router>
    </ApolloProvider>
  );
}

export default App;
