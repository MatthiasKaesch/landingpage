import './App.css'
import './styling/normalize.css'
import Thumbnail from './assets/images/event-table.webp'

function App() {
  return (
    <>
      <header className="header">
        <h1>Matthias Käsch - Frontend Developer</h1>
      </header>

      <div className="wrapper">
        <div className="projects-grid">
          <div className="project-1">
            <a href="https://matthiaskaesch.github.io/event-table/">
              <img src={Thumbnail} alt="" />
            </a>
          </div>
          <div className="project-2">
            <a href="https://matthiaskaesch.github.io/event-table/">
              <img src={Thumbnail} alt="" />
            </a>
          </div>
          <div className="project-3">
            <a href="https://matthiaskaesch.github.io/event-table/">
              <img src={Thumbnail} alt="" />
            </a>
          </div>
          <div className="project-4">
            <a href="https://matthiaskaesch.github.io/event-table/">
              <img src={Thumbnail} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
