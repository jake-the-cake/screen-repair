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
          <Route path='/screen-repair/*' element={<NotFound />} />
          <Route path='/screen-repair/' element={<Home />} />
          <Route path='/screen-repair/quote' element={<Quote />} />
          <Route path='/screen-repair/services' element={<Services />} />         
          <Route path='/screen-repair/gallery' element={<Gallery />} />
          <Route path='/screen-repair/about' element={<About />} />
          <Route path='/screen-repair/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </Container>    
  )
}

export default App
