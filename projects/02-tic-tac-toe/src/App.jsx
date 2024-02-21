import { useState } from "react"

const TURNS = {
  x: "x",
  O: "o"
}
const Square = ({ children,isSelected, updateBoard, index }) => {
  const className = `square ${isSelected? 'is-selected' : ''}`
 
  return (
    <div onClick={updateBoard} className={className} >
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno,setTurno] = useState(TURNS.x)
  const handleClick = () =>{
    const newTurn = turno === TURNS.x ? TURNS.o : TURNS.x
  }
  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index}
              updateBoard={updateBoard}>
                {index}
              </Square>
            )
          }
          )
        }
      </section>
      <section className="turn">
        <Square isSelected={turno===TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turno===TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
    </main>
  )
}

export default App
