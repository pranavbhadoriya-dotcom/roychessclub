import logo from '../assets/roy-logo.jpg'
import rahulPhoto from '../assets/rahul.jpg'
import prithviPhoto from '../assets/prithvi.jpg'
import pranavPhoto from '../assets/pranav.jpg'

export const club = {
  name: 'Roy Chess Club',
  city: 'Khargone, Madhya Pradesh',
  phone: '9131556616',
  whatsapp: `https://wa.me/919131556616?text=${encodeURIComponent('Hello Roy Chess Club! I would like to know more about chess classes and admissions.')}`,
  logo,
}

export const leadership = [
  {
    name: 'Rahul Raipuria',
    title: 'Founder & Owner',
    image: rahulPhoto,
    background: 'Professional Chess Player',
    expertise: ['Lead Coach', 'Player Development', 'Club Strategy'],
    achievements: 'Represented at State and National level tournaments.',
    focus: 'Strategic vision, advanced player coaching, and overall club development.',
    bio: 'Leads the club’s chess vision and player development, helping members build confidence, discipline, and sound strategic thinking.',
  },
  {
    name: 'Prithvi Raj Singh',
    title: 'Co-Founder & Creative Director',
    image: prithviPhoto,
    background: 'Creative direction and digital media',
    expertise: ['Cinematography', 'Content Creation', 'Photo & Video Editing'],
    achievements: 'Leads creative storytelling and promotional content for the club.',
    focus: 'Visual branding, graphic design, social media growth, and promotional campaigns.',
    bio: 'Shapes the club’s visual identity and communicates its story through thoughtful design, video, photography, and marketing.',
  },
  {
    name: 'Pranav Bhadoriya',
    title: 'Co-Founder & Technical Lead',
    image: pranavPhoto,
    background: 'B.Tech Student & Chess Arbiter',
    expertise: ['Website Development & Design', 'Chess Coaching', 'Academy Management'],
    achievements: 'Brings together technology, tournament operations, and academy coordination.',
    focus: 'Managing chess classes, tournament arbitration, digital presence, and marketing execution.',
    bio: 'Works across website development, chess operations, tournament arbitration, and the digital systems that support the academy.',
  },
]

export const classPrograms = [
  { number: '01', level: 'BEGINNER', title: 'Chess Foundations', description: 'Learn the board, piece movement, rules, checkmate patterns, and how to think one move ahead.', outcomes: ['Board setup and legal moves', 'Checks, checkmates, and draws', 'Basic tactics and safe play'] },
  { number: '02', level: 'INTERMEDIATE', title: 'Strategic Thinking', description: 'Develop tactical awareness, opening principles, positional understanding, and endgame confidence.', outcomes: ['Opening principles', 'Tactics and combinations', 'Positional play and endgames'] },
  { number: '03', level: 'ADVANCED', title: 'Tournament Preparation', description: 'Prepare for competitive play with game analysis, clock management, and tournament mindset.', outcomes: ['Game review and analysis', 'Time management', 'Competition readiness'] },
]

export const values = [
  { number: '01', title: 'Think strategically', description: 'Evaluate choices and plan with purpose.' },
  { number: '02', title: 'Learn continuously', description: 'Treat every game as a chance to improve.' },
  { number: '03', title: 'Compete respectfully', description: 'Play with integrity, patience, and sportsmanship.' },
]
