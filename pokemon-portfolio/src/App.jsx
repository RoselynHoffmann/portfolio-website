import { useState, useEffect } from 'react'
import photo from './assets/avatar.jpg'
import './App.css'

const PROJECTS = [
  {
    id: '001',
    name: 'Telemetry Pipeline',
    pokemon: 'Rotom',
    spriteId: 479,
    description: 'Industrial IoT data ingestion and monitoring system for real-time equipment telemetry',
    badges: [
      { label: 'Python', type: 'fire' },
      { label: 'AWS', type: 'electric' },
      { label: 'PostgreSQL', type: 'water' },
    ],
  },
  {
    id: '002',
    name: 'Block Compression',
    pokemon: 'Metagross',
    spriteId: 376,
    description: '3D voxel compression algorithms for mining block model datasets — top 3 at Maptek competition',
    badges: [
      { label: 'C++', type: 'steel' },
      { label: 'Algorithms', type: 'psychic' },
    ],
  },
  {
    id: '003',
    name: 'PokéDex + Team Builder',
    pokemon: 'Eevee',
    spriteId: 133,
    description: 'Browse Pokémon, build and save teams with AI-powered Eevee chatbot assistant',
    badges: [
      { label: 'React', type: 'fairy' },
      { label: 'FastAPI', type: 'fire' },
      { label: 'PokéAPI', type: 'water' },
    ],
    live: true,
  },
  {
    id: '004',
    name: 'Object Detection Robot',
    pokemon: 'Magnezone',
    spriteId: 462,
    description: 'YOLOv5 vision system on autonomous robotic platform for real-time object detection',
    badges: [
      { label: 'Python', type: 'psychic' },
      { label: 'OpenCV', type: 'grass' },
    ],
  },
]

const SKILLS = [
  { name: 'Python', pct: 90, color: 'var(--fire)' },
  { name: 'C++', pct: 85, color: 'var(--water)' },
  { name: 'SQL', pct: 70, color: 'var(--grass)' },
  { name: 'JavaScript', pct: 60, color: 'var(--electric)' },
  { name: 'AWS', pct: 55, color: 'var(--psychic)' },
  { name: 'React', pct: 50, color: 'var(--fairy)' },
]

const TIMELINE = [
  { company: 'SAGE Automation', role: 'Software engineer intern', dates: 'Jul-Sep 2025', color: 'var(--psychic)', major: true },
  { company: 'Ortomi', role: 'Junior software developer', dates: 'May 2024-Jan 2025', color: 'var(--grass)', major: true },
  { company: '42 Adelaide', role: 'C++ coding mentor', dates: 'Jun 2023-Jul 2025', color: 'var(--electric)', major: true },
  { company: 'University of Adelaide', role: 'BCompSci · 6.7/7.0', dates: '2023-2025', color: 'var(--water)', major: true },
]

function Pokeball({ size = 18 }) {
  return (
    <div className="pokeball-icon" style={{ width: size, height: size }}>
      <div className="pokeball-top" />
      <div className="pokeball-center" />
    </div>
  )
}

function SpriteBox({ spriteId, pokemon }) {
  return (
    <div className="sprite-box">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${spriteId}.gif`}
        alt={pokemon}
        className="sprite-img"
      />
    </div>
  )
}

function Badge({ label, type }) {
  return <span className={`badge badge-${type}`}>{label}</span>
}

function AdventureTimer() {
  const [elapsed, setElapsed] = useState('')
  const startDate = new Date('2022-12-01')

  useEffect(() => {
    function update() {
      const now = new Date()
      const diff = now - startDate
      const days = Math.floor(diff / 86400000)
      const hours = Math.floor((diff % 86400000) / 3600000)
      const mins = Math.floor((diff % 3600000) / 60000)
      setElapsed(`${days.toLocaleString()}d ${hours}h ${mins}m`)
    }
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [])

  return <span className="timer-value">{elapsed}</span>
}

function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo">
          <Pokeball size={24} />
          <span className="nav-title">rose.dev</span>
        </div>
        <div className="nav-links">
          {['trainer', 'pokedex', 'journey', 'contact'].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`nav-link ${activeSection === s ? 'active' : ''}`}
            >
              {s === 'pokedex' ? 'pokédex' : s}
            </a>
          ))}
        </div>
      </nav>

      <section id="trainer" className="trainer-card">
        <div className="trainer-id-row">
          <span className="trainer-id">#36RH25</span>
          <div className="pokeball-watermark" />
        </div>

        <div className="trainer-info">
          <img className='avatar' src={photo} alt='avatar-rose'></img>
          <div className="trainer-details">
            <h1>Roselyn Nina Hoffmann</h1>
            <p className="subtitle">Software engineer · Adelaide, SA</p>
            <p className="sub-subtitle">BCompSci · University of Adelaide · 6.7 / 7.0</p>
            <div className="tech-badges">
              <Badge label="Backend" type="fire" />
              <Badge label="Data" type="water" />
              <Badge label="Embedded" type="grass" />
              <Badge label="Cloud" type="electric" />
              <Badge label="AI/ML" type="psychic" />
            </div>
          </div>
        </div>

        <div className="portfolio-links">
          <a href="https://github.com/RoselynHoffmann" className="icon-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://linkedin.com/in/" className="icon-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:rosesareroro@gmail.com" className="icon-link" aria-label="Email">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="#" className="resume-link">resume.pdf</a>
        </div>

        <div className="sub-info">
          <div className="stat-counter">
            <span className="stat-number">6</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-counter">
            <span className="stat-number">300+</span>
            <span className="stat-label">Mentored</span>
          </div>
          <div className="stat-counter">
            <span className="stat-number mono">~649</span>
            <span className="stat-label">Pokémon</span>
          </div>
          <div className="stat-counter">
            <AdventureTimer />
            <span className="stat-label">Adventure</span>
          </div>
        </div>

        <div className="save-file">
          <span>Adventure started: Dec 2022</span>
          <span>Playtime: <AdventureTimer /></span>
        </div>
      </section>

      <section id="pokedex" className="pokedex">
        <div className="section-header">
          <Pokeball />
          <h2>Pokédex · Projects</h2>
        </div>

        {PROJECTS.map((proj) => (
          <div key={proj.id} className={`project-card ${proj.live ? 'project-live' : ''}`}>
            {proj.live && <span className="live-badge">LIVE</span>}
            <SpriteBox spriteId={proj.spriteId} pokemon={proj.pokemon} />
            <div className="project-info">
              <h3>#{proj.id} {proj.name}</h3>
              <p>{proj.description}</p>
              <div className="tech-badges">
                {proj.badges.map((b, i) => (
                  <Badge key={i} label={b.label} type={b.type} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="journey" className="journey">
        <div className="section-header">
          <Pokeball />
          <h2>Journey</h2>
        </div>

        <div className="timeline">
          {TIMELINE.map((entry, i) => (
            <div key={i} className="timeline-entry major">
              <div className="timeline-dot" style={{ background: entry.color }} />
              <div className="timeline-content">
                <h3>{entry.company}</h3>
                <p>{entry.role} · {entry.dates}</p>
              </div>
            </div>
          ))}
          <div className="timeline-entry minor">
            <div className="timeline-dot minor-dot" />
            <p>Jane Street · Optiver · SIG · Citadel — insight programs · 2024</p>
          </div>
        </div>
      </section>

      <section id="stats" className="stats-section">
        <div className="section-header">
          <Pokeball />
          <h2>Stats</h2>
        </div>

        <div className="stats-grid">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="stat-bar">
              <div className="stat-bar-label">
                <span>{skill.name}</span>
                <span className="stat-pct">{skill.pct}%</span>
              </div>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{ width: `${skill.pct}%`, background: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-header">
          <Pokeball />
          <h2>Contact</h2>
        </div>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows={4} required />
            <button type="submit">Send</button>
          </form>

          <div className="contact-cards">
            <a href="https://cal.com" className="contact-card">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <div>
                <h3>Book a chat</h3>
                <p>15 min via Cal.com</p>
              </div>
            </a>
            <a href="mailto:rosesareroro@gmail.com" className="contact-card">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div>
                <h3>Email me</h3>
                <p>rosesareroro@gmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/" className="contact-card">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <div>
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <Pokeball size={16} />
          <span>rose.dev · 2026</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/RoselynHoffmann" className="icon-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://linkedin.com/in/" className="icon-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:rosesareroro@gmail.com" className="icon-link" aria-label="Email">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App