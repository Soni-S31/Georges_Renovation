import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Header from './components/Header/header'
import  './utils/style/globalStyle.css'



function App() {
  return (
    <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
           
          </Routes>
         
          
    </div>
  )
}

export default App;
