import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header"
import Home from "./assets/Components/Home"
import Instrumentos from "./assets/Components/Instrumentos"
import Endereco from "./assets/Components/Endereco"
import Contato from "./assets/Components/Contato"
import Footer from "./assets/Components/Footer"
import './App.css'



function App() {
  return (
    <>
      <main>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Instrumentos" element={<Instrumentos />} /> 
            <Route path="Endereco" element={<Endereco />} />  
            <Route path="Contato" element={<Contato />} />  
          </Routes>
          <Footer />
        </Router>


      </main>


    </>
  )
}

export default App
