import styled from 'styled-components'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import UpperImage from './components/UpperImage'
import { Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home'

const Container = styled.div`
  width: 100vw;
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
          <Route path='*' element={<Home />} />
        </Routes>
      <Footer />
    </Container>    
  )
}

export default App
