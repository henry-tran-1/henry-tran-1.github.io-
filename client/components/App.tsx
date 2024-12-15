import Links from './Links'
import Navbar from './Navbar'

function App() {
  return (
    <div className="pt-6 space-y-4">
      <p className="font-heading">React development has begun!</p>

      <div className="flex justify-between">
        <Links />
        <Navbar />
      </div>
    </div>
  )
}

export default App
