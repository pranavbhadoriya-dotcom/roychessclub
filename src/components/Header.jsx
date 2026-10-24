import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { club } from '../data/siteData.js'

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Chess Classes', '/classes'],
  ['Tournaments', '/tournaments'],
  ['Leadership Team', '/leadership'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <Link to="/" className="brand" aria-label="Roy Chess Club home" onClick={() => setOpen(false)}>
      <img src={club.logo} alt="Roy Chess Club emblem" />
      <span><strong>ROY</strong><small>CHESS CLUB</small></span>
    </Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav open' : 'nav'}>
      {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
      <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Join the Club <ArrowUpRight size={16} /></Link>
    </nav>
  </header>
}
