import './App.css'
import { Routes, Route } from 'react-router-dom'

// Import components 
import Header from "./components/Header";
import Footer from "./components/Footer";

// Impors pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className=''>
      <Header />
      <main className='Routes'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
