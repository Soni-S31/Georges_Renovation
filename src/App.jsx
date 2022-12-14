import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import About from './pages/About/about'
import './utils/style/globalStyle.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
