import './App.css'
import './styling/normalize.css'
import ProjectCard from './components/ProjectCard/ProjectCard'
import ProjectData from './data/projects-info.json'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="headline">
          <span className="hero">Matthias Käsch</span>
          <span className="subtitle">Frontend Developer</span>
        </h1>
      </header>

      <div className="wrapper">
        <div className="projects-grid">
          {ProjectData.map((data) => {
            return <ProjectCard {...data} key={data.title} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
