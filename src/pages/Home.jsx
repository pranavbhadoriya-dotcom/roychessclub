import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Crown, Trophy, GraduationCap, Target, Users, Brain, CalendarDays } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { club, classPrograms, leadership, values } from '../data/siteData.js'

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-board" aria-hidden="true"><span className="chess-piece piece-one">♞</span><span className="chess-piece piece-two">♜</span><span className="chess-piece piece-three">♟</span><div className="board-grid" /></div>
      <div className="hero-content">
        <div className="pill"><span className="live-dot" /> THINK · PLAN · WIN</div>
        <h1>Every move<br />builds <em>your</em><br /><span>future.</span></h1>
        <p className="hero-copy">More than a game. A mindset for life. Learn chess, sharpen your strategy, and find your place on the board with Roy Chess Club.</p>
        <div className="hero-actions"><Link className="button button-gold" to="/classes">Explore Classes <ArrowUpRight size={18} /></Link><Link className="button button-ghost" to="/about">Discover our club</Link></div>
        <div className="hero-proof"><div className="proof-avatars"><span>R</span><span>P</span><span>P</span></div><div><strong>One community. Every level.</strong><small>Beginners · Students · Competitive players</small></div></div>
      </div>
      <div className="hero-stamp"><Crown size={20} /><span>DISCIPLINE TODAY</span><b>CHAMPION TOMORROW</b></div>
      <div className="hero-bottom"><span>01 / 06</span><span className="hero-line" /><span>THE ROY EXPERIENCE</span><span className="scroll-label">EXPLORE THE CLUB ↓</span></div>
    </section>
    <section className="ticker"><div className="ticker-track">{['THINK AHEAD','PLAY WITH PURPOSE','LEARN FROM EVERY GAME','COMPETE WITH RESPECT','GROW TOGETHER'].map(x=><span key={x}><Crown size={14}/>{x}</span>)}</div></section>
    <section className="section intro-section">
      <div className="intro-emblem"><img src={club.logo} alt="Roy Chess Club logo"/><span>STRATEGY · DISCIPLINE · GROWTH</span></div>
      <div><SectionHeading eyebrow="WELCOME TO ROY CHESS CLUB" title={<>A smarter game.<br/><em>A stronger mindset.</em></>} text="We believe chess teaches more than winning. It develops patience, planning, focus, and the confidence to make your next move."/><Link className="text-link" to="/about">Discover our story <ArrowUpRight size={17}/></Link></div>
    </section>
    <section className="section home-classes">
      <SectionHeading eyebrow="FIND YOUR NEXT MOVE" title={<>Learning paths for <em>every player.</em></>} text="Start with the fundamentals, sharpen your strategy, or prepare for competitive play." centered/>
      <div className="card-grid three">{classPrograms.map((p,i)=><article className="feature-card" key={p.number}><div className="card-top"><span>{p.number} / 03</span>{i===0?<Brain/>:i===1?<Target/>:<Trophy/>}</div><small className="gold-label">{p.level}</small><h3>{p.title}</h3><p>{p.description}</p><Link to="/classes">View program <ArrowUpRight size={16}/></Link></article>)}</div>
      <div className="center-action"><Link className="button button-outline" to="/classes">All Chess Classes <ArrowUpRight size={17}/></Link></div>
    </section>
    <section className="section home-tournament">
      <div><SectionHeading eyebrow="THE BOARD IS YOURS" title={<>Play. Learn.<br/><em>Come back stronger.</em></>} text="Friendly practice and competitive events give players a chance to test their skills, learn under pressure, and celebrate every improvement."/><Link className="button button-gold" to="/tournaments">Explore Tournaments <ArrowUpRight size={17}/></Link></div>
      <div className="trophy-art"><span>♛</span><div><small>ROY CHESS CLUB</small><b>THE NEXT MOVE<br/>IS YOURS.</b></div></div>
    </section>
    <section className="section home-team">
      <SectionHeading eyebrow="THE PEOPLE BEHIND THE PIECES" title={<>Meet the <em>leadership.</em></>} text="Chess experience, creative storytelling, and technology come together to build a welcoming community." centered/>
      <div className="card-grid three">{leadership.map((person,i)=><Link to="/leadership" className="mini-person" key={person.name}><img src={person.image} alt={person.name}/><div><span>0{i+1} / LEADERSHIP</span><h3>{person.name}</h3><p>{person.title}</p><b>View profile <ArrowUpRight size={14}/></b></div></Link>)}</div>
    </section>
    <section className="values-strip">{values.map(v=><div key={v.number}><strong>{v.number}</strong><b>{v.title}</b><span>{v.description}</span></div>)}</section>
    <CTA title="Your next move starts here." text={`Join the chess community in ${club.city}. Ask us about classes or upcoming tournaments.`}/>
  </>
}
