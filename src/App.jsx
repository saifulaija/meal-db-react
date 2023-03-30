import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
    <Header></Header>
    <Meals></Meals>
    </div>
  )
}

export default App
