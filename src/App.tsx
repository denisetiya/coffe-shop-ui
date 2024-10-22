import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { useLocation } from 'react-router-dom'
import Navbar from './components/widget/Navbar'


function App() {

  const location = useLocation();
  const noNavbarPaths = ['/auth'];
  const showNavbar = !noNavbarPaths.includes(location.pathname);


  return (
    <div>
      { showNavbar && <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}

export default App
