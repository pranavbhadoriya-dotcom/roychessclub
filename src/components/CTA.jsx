import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
export default function CTA({ title = 'Ready to make your next move?', text = 'Talk to our team about classes and upcoming events.' }) {
  return <section className="cta-band">
    <div><span className="eyebrow">EVERY MOVE MATTERS</span><h2>{title}</h2><p>{text}</p></div>
    <Link className="button button-dark" to="/contact">Contact the Club <ArrowUpRight size={18} /></Link>
  </section>
}
