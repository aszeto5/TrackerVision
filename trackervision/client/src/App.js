import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/register/Register';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element= {<Home />}
            />
            <Route
              path="/Login"
              element= {<Login />}
            />
            <Route
              path="/Signup"
              element= {<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App