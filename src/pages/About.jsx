import React from 'react'
import { Brain, Target, Users, ShieldCheck, HeartHandshake } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { club, values } from '../data/siteData.js'

const principles = [
  { icon: Brain, title: 'Think deeply', text: 'We encourage curiosity, calculation, and the habit of considering more than one possibility.' },
  { icon: ShieldCheck, title: 'Play with integrity', text: 'Respect for opponents, fair play, and sportsmanship matter as much as the result.' },
  { icon: HeartHandshake, title: 'Grow together', text: 'A welcoming space helps players learn from coaches, teammates, and every game.' },
]

export default function About() {
  return <div className="inner-page">
    <section className="page-hero"><span className="eyebrow"><span/> OUR STORY</span><SectionHeading eyebrow="ABOUT ROY CHESS CLUB" title={<>More than a game.<br/><em>A way to think.</em></>} text={`Roy Chess Club is growing a chess community in ${club.city} — a place to learn the game, build discipline, and enjoy the challenge of a better move.`}/><div className="page-hero-king">♚</div></section>
    <section className="section story-layout"><div><span className="gold-label">OUR PURPOSE</span><h2>Make every move<br/><em>meaningful.</em></h2></div><div><p>Chess is a game of decisions. Every position asks players to observe, plan, adapt, and learn from the outcome. Roy Chess Club brings that spirit to classes, practice sessions, and tournaments.</p><p>Our goal is to create an inclusive environment for children, students, beginners, and ambitious players to discover chess and improve at their own pace.</p><div className="location-chip"><Target size={17}/>{club.city}</div></div></section>
    <section className="section principles-section"><SectionHeading eyebrow="WHAT GUIDES US" title={<>Our values, on and <em>off the board.</em></>} centered/><div className="card-grid three">{principles.map(({icon:Icon,title,text},i)=><article className="feature-card" key={title}><div className="principle-icon"><Icon/></div><small className="gold-label">PRINCIPLE 0{i+1}</small><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="values-strip">{values.map(v=><div key={v.number}><strong>{v.number}</strong><b>{v.title}</b><span>{v.description}</span></div>)}</section>
    <CTA title="Come find your place at the board." text="We welcome curious minds at every experience level."/>
  </div>
}
