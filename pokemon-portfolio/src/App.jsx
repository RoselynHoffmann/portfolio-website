import './App.css'

function App() {
  return (
    <div className='app'>
      <section className='trainer-card'>
        <span className='trainer-id'>#36RH25</span>
        <div className='trainer-info'>
          <div className='avatar'>RH</div>
          <div>
            <h1>Roselyn Nina Hoffmann</h1>
            <p> Software Engineer · Adelaide, SA</p>
            <p> BCompSci · The University of Adelaide · 6.7/7.0</p>          </div>
        </div>
        <div className="tech-badges">
          <span className="fire-badge">Backend</span>
          <span className="water-badge">AI/ML</span>
          <span className="grass-badge">Embedded</span>
          <span className="sky-badge">Cloud</span>
          <span className="electric-badge">Data</span>
        </div>
        <div className='portfolio-links'></div>
        <div className='sub-info'>
          <div>
            <span>6</span>
            <span>Projects</span>
          </div>
          <div>
            <span>649</span>
            <span>Pokemon</span>
          </div>
          <div>
            <span>1,188 days ago</span>
            <span>Adventure started</span>
          </div>
        </div>
      </section>
    </div>
  )
}



export default App
