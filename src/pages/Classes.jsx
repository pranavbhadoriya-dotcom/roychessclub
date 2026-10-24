import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Brain, Target, Trophy, CheckCircle2, Clock3 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { classPrograms } from '../data/siteData.js'

const icons = [Brain, Target, Trophy]
export default function Classes() {
  return <div className="inner-page">
    <section className="page-hero"><span className="eyebrow"><span/> CHESS EDUCATION</span><SectionHeading eyebrow="CHESS CLASSES" title={<>Find your level.<br/><em>Build your game.</em></>} text="Structured learning paths for first-time players, developing strategists, and players preparing for competition."/></section>
    <section className="section program-section"><SectionHeading eyebrow="CHOOSE YOUR PATH" title={<>Learn with <em>purpose.</em></>} text="Choose the learning path that matches your current experience. Not sure? Send an enquiry and we’ll help you get started."/><div className="program-list">{classPrograms.map((p,i)=>{const Icon=icons[i];return <article className="program-card" key={p.number}><div className="program-number">{p.number}</div><div className="program-main"><span className="gold-label">{p.level}</span><h2>{p.title}</h2><p>{p.description}</p><ul>{p.outcomes.map(o=><li key={o}><CheckCircle2 size={15}/>{o}</li>)}</ul></div><div className="program-side"><Icon size={32}/><Link className="button button-outline" to="/contact">Enquire <ArrowUpRight size={16}/></Link></div></article>})}</div></section>
    <section className="section class-note"><div className="note-icon"><Clock3/></div><div><h3>Class timings and fees</h3><p>Schedules, batch sizes, and fees will be confirmed directly by the club. Contact us with your age group and experience level for the most relevant information.</p></div><Link className="button button-gold" to="/contact">Ask about classes <ArrowUpRight size={16}/></Link></section>
    <CTA title="Your first move can start today." text="Tell us what you want to learn and we’ll guide you to the right class."/>
  </div>
}
