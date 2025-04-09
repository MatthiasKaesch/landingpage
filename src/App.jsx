import './App.css'
import './styling/normalize.css'
import Header from './components/Header/Header'
import ProjectCard from './components/ProjectCard/ProjectCard'
import ProjectData from '../public/data/projects-info.json'

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">
        <div className="projects-grid">
          {ProjectData.map((data) => {
            return <ProjectCard {...data} key={data.title} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
