import './App.css'
import './styling/normalize.css'

function App() {
  return (
    <div className="wrapper">
      <h1>Portfolio</h1>
      <div class="projectsGrid">
        <a href="https://matthiaskaesch.github.io/event-table/">
          <iframe
            width="300"
            height="200"
            src="https://matthiaskaesch.github.io/event-table/"
            frameborder="0"
          ></iframe>
        </a>
      </div>
    </div>
  )
}

export default App
