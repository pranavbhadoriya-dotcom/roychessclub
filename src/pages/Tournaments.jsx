import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Swords, Trophy, Users, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'

const benefits = [
  ['Play under pressure','Practice decision-making while managing time and the position.'],
  ['Learn from every game','Review positions, notice patterns, and turn mistakes into lessons.'],
  ['Celebrate sportsmanship','Build confidence while respecting opponents and the rules.'],
]
export default function Tournaments() {
  return <div className="inner-page">
    <section className="page-hero tournament-page-hero"><span className="eyebrow"><span/> EVENTS & COMPETITION</span><SectionHeading eyebrow="ROY CHESS CLUB TOURNAMENTS" title={<>The next move<br/><em>is yours.</em></>} text="Friendly games, competitive challenges, and learning opportunities for players who want to test their skills and grow."/><div className="page-hero-king">♛</div></section>
    <section className="section event-status"><div className="status-mark"><CalendarDays size={28}/></div><div><span className="gold-label">EVENT ANNOUNCEMENTS</span><h2>New events coming soon.</h2><p>Dates, formats, entry details, and registration instructions will be shared here once confirmed. Contact the club to ask about upcoming opportunities.</p><Link className="text-link" to="/contact">Ask about upcoming tournaments <ArrowUpRight size={16}/></Link></div><div className="coming-badge">COMING<br/><b>SOON</b></div></section>
    <section className="section tournament-benefits"><SectionHeading eyebrow="WHY COMPETE?" title={<>Every game makes you <em>stronger.</em></>} centered/><div className="card-grid three">{benefits.map(([title,text],i)=><article className="feature-card" key={title}><div className="principle-icon">{i===0?<Swords/>:i===1?<CheckCircle2/>:<Trophy/>}</div><small className="gold-label">BENEFIT 0{i+1}</small><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section event-note"><Users size={30}/><div><h3>Who can enquire?</h3><p>Beginners, students, casual players, and competitive chess enthusiasts are all welcome to ask about future events.</p></div><Link className="button button-gold" to="/contact">Register your interest <ArrowUpRight size={16}/></Link></section>
    <CTA title="Be ready for your next match." text="Contact Roy Chess Club to hear about future tournaments and practice opportunities."/>
  </div>
}
