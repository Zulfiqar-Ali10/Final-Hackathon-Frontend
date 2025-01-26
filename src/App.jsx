import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import ContactPage from './Pages/ContactPage'
import Authentication from './Components/Authentciation'


function App() {


  return (
    <>
     <Routes>

      <Route path="/"   element={<Home/>} />
      <Route path="/about"   element={<AboutPage/>} />
      <Route path="/services"   element={<ServicesPage/>} />
      <Route path="/contact"   element={<ContactPage/>} />
      <Route path="/signup"   element={<Authentication/>} />
     </Routes>
    </>
  )
}

export default App
