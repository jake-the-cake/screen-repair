import styled from 'styled-components'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import UpperImage from './components/UpperImage'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <Container>
      <UpperImage />
      <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/quote' element={<Quote />} />
          <Route path='/services' element={<Services />} />         
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </Container>    
  )
}

export default App
