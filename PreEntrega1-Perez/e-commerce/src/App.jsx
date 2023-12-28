import NavBar from "./components/NavBar/NavBar"
import CartWidget from "./components/CartWidget/CartWidget"
import imgCard from "./components/CartWidget/assets/react.svg"
import './App.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <CartWidget src={imgCard}></CartWidget>
    </>
  )
}

export default App
