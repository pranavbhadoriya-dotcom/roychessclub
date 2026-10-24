import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
export default function NotFound() {
  return <section className="not-found"><span className="gold-label">404 / OFF THE BOARD</span><h1>Wrong move?</h1><p>This page doesn’t exist. Let’s get you back to the game.</p><Link className="button button-gold" to="/">Back to Home <ArrowUpRight size={17}/></Link></section>
}
