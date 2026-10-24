import React from 'react'
import { Crown, Camera, Laptop, Trophy, Target, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { leadership } from '../data/siteData.js'

const icons = [Crown, Camera, Laptop]
export default function Leadership() {
  return <div className="inner-page">
    <section className="page-hero"><span className="eyebrow"><span/> THE PEOPLE BEHIND THE PIECES</span><SectionHeading eyebrow="LEADERSHIP & TEAM" title={<>Different strengths.<br/><em>One shared vision.</em></>} text="Meet the team bringing chess coaching, creative communication, and technology together at Roy Chess Club."/></section>
    <section className="section leadership-list">{leadership.map((p,i)=>{const Icon=icons[i];return <article className={`leader-profile ${i%2?'reverse':''}`} key={p.name}><div className="leader-photo"><img src={p.image} alt={`${p.name} — ${p.title}`}/><span>0{i+1} / ROY CHESS CLUB</span></div><div className="leader-details"><Icon className="leader-symbol" size={28}/><span className="gold-label">LEADERSHIP PROFILE</span><h2>{p.name}</h2><h3>{p.title}</h3><p>{p.bio}</p><div className="profile-detail"><b>Background</b><span>{p.background}</span></div><div className="profile-detail"><b>Expertise</b><div className="skill-list">{p.expertise.map(x=><span key={x}>{x}</span>)}</div></div><div className="profile-detail"><b>Achievements</b><span>{p.achievements}</span></div><div className="profile-detail"><b>Focus</b><span>{p.focus}</span></div><Link className="text-link" to="/contact">Connect with the club <ArrowUpRight size={16}/></Link></div></article>})}</section>
    <CTA title="Let’s build a stronger chess community." text="Get in touch with the Roy Chess Club team."/>
  </div>
}
