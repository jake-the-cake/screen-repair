import styled from 'styled-components'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import UpperImage from './components/UpperImage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>    
  )
}

export default App
