import './App.css'

function StatusBadge({ condition }) {
  return (
    <span
      className="status-badge"
      style={{ color: condition ? "green" : "gray" }}
    >
      {condition ? "Open to work" : "Busy learning"}
    </span>
  )
}

function App() {
  return (
    <div className="app">
      <h1>I want to learn frontend</h1>
      <p>I want to build a clean minimalistic portfolio website.</p>
      <StatusBadge condition={true}/>
    </div>
  )
}

export default App
