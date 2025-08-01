
import Home from './pages/home'
import Navbar from './components/navbar'
import "./App.css"
import image from "./rr.png"
import ScatteredBackground from "./components/background/ScatteredBackground"
function App() {
  return (
    <>
      <ScatteredBackground imageSrc={image} count={10} size={80} />
      <Navbar />
      <Home />
    </>
  )
}

export default App
