import NavBar from './Components/NavBar/index'
import LargeDevice from './Components/LargeDevice/index'
import SmallDevice from './Components/SmallDevice/index'
import './App.css'

const App = () => (
  <div>
    <NavBar />
    <div className="largeDevice">
      <LargeDevice />
    </div>
    <div className="smallDevice">
      <SmallDevice />
    </div>
  </div>
)

export default App
