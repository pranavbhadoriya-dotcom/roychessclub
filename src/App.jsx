import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Classes from './pages/Classes.jsx'
import Tournaments from './pages/Tournaments.jsx'
import Leadership from './pages/Leadership.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import './styles/layout.css'

export default function App() {
  return <>
    <div className="announcement"><span className="announcement-dot" /> ROY CHESS CLUB <span className="announcement-divider">/</span> A NEW MOVE IN CHESS EXCELLENCE <span className="announcement-right">KHARGONE, MADHYA PRADESH</span></div>
    <Header />
    <main className="page-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>
}
