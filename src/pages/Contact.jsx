import React, { useState } from 'react'
import { MapPin, Phone, MessageCircle, Send, CheckCircle2, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { club } from '../data/siteData.js'

export default function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', interest:'Chess Classes', message:'' })
  const [submitted, setSubmitted] = useState(false)
  function submit(e) {
    e.preventDefault()
    const msg = `Hello Roy Chess Club!%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AInterested in: ${encodeURIComponent(form.interest)}%0AMessage: ${encodeURIComponent(form.message || 'Please share more details.')}`
    window.open(`https://wa.me/91${club.phone}?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }
  return <div className="inner-page">
    <section className="page-hero"><span className="eyebrow"><span/> LET'S TALK CHESS</span><SectionHeading eyebrow="CONTACT ROY CHESS CLUB" title={<>Your next move<br/><em>starts here.</em></>} text="Ask about classes, tournament announcements, or getting started. Send an enquiry and our team will help you take the next step."/></section>
    <section className="section contact-layout">
      <div className="contact-info"><span className="gold-label">GET IN TOUCH</span><h2>We’d love to<br/><em>hear from you.</em></h2><p>Use the contact details or send a message using the form. The form prepares your enquiry in WhatsApp so you can review it before sending.</p>
        <a className="contact-row" href={`tel:+91${club.phone}`}><span><Phone/></span><div><small>CALL THE CLUB</small><b>+91 {club.phone}</b><em>Tap to call</em></div></a>
        <a className="contact-row" href={club.whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WHATSAPP</small><b>Message Roy Chess Club</b><em>Open WhatsApp <ArrowUpRight size={13}/></em></div></a>
        <div className="contact-row"><span><MapPin/></span><div><small>LOCATION</small><b>Khargone, Madhya Pradesh</b><em>Local chess community</em></div></div>
        <div className="contact-disclaimer">Class timings, fees, venue details, and tournament dates should be confirmed directly with the club.</div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-heading"><span>ENQUIRY FORM</span><h3>How can we help?</h3><p>Complete the fields below. WhatsApp will open with your enquiry ready to send.</p></div>
        <label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter your full name"/></label>
        <label>Your phone number<input required type="tel" pattern="[0-9+\-\s]{8,15}" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your contact number"/></label>
        <label>I'm interested in<select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}><option>Chess Classes</option><option>Tournaments & Events</option><option>Beginner Training</option><option>Advanced Coaching</option><option>General Enquiry</option></select></label>
        <label>Message (optional)<textarea rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us what you'd like to know..."/></label>
        <button className="button button-gold form-submit" type="submit">Prepare WhatsApp Enquiry <Send size={16}/></button>
        {submitted&&<p className="form-success"><CheckCircle2 size={16}/> WhatsApp should open in a new tab. Press send there to complete your enquiry.</p>}
        <p className="form-privacy">No information is stored by this website.</p>
      </form>
    </section>
  </div>
}
