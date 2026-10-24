import React from 'react'
export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
    <span className="eyebrow"><span />{eyebrow}</span>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </div>
}
