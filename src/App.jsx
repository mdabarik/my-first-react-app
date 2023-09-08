import './App.css'
import Counter from './Counter';
import Team from './Team'

function App() {

  function handleClick() {
    alert('btn-clicked');
  }

  const handleClick2 = () => {
    alert("button 2 clicked")
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>My First React APP</h1>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={() => alert("hi")}>Click3</button>
      <button onClick={() => addToFive(3)}>Four</button>

    </>
  )
}

export default App
