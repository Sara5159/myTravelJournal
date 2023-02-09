import Header from './components/Header'
import Card from './components/Card'
import data from './data.jsx'

import './style.css'

function App() {
  const destinations = data.map(destination => {
    return (<Card key={destination.id} {...destination} />)
  })

  return (
    <div className="App">
      <Header />
      {destinations}
    </div>
  )
}

export default App
