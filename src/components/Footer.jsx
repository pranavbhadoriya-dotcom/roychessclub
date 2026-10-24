import React from 'react'
import { Link } from 'react-router-dom'
import { club } from '../data/siteData.js'

export default function Footer() {
  return <footer className="footer">
    <Link to="/" className="footer-brand"><img src={club.logo} alt="" /><span><b>ROY CHESS CLUB</b><small>THINK · PLAN · WIN</small></span></Link>
    <p>Built on strategy. United by chess.</p>
    <div className="footer-links">
      <Link to="/about">About</Link><Link to="/classes">Classes</Link><Link to="/tournaments">Events</Link><Link to="/leadership">Team</Link><Link to="/contact">Contact</Link>
    </div>
    
    <span className="copyright" style={{display:"flex",justifyContent:"space-between",fontSize:"12px"}}>© {new Date().getFullYear()} Roy Chess Club. All rights reserved. <span > 👨‍💻 &nbsp;Developed &amp; Designed by &hearts; Pranav Pratap Singh Bhadoriya</span>
</span>




    
  </footer>
}
