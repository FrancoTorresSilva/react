import { useState } from "react"
import { Square } from "./components/Square"
import confetti from "canvas-confetti"
import { TURNS } from "./constants"
import { checkWinner } from "./logic/board"
import { WinnerModal } from "./components/WiinerModal"
function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno,setTurno] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurno(TURNS.X)
    setWinner(null)
  }
  const chechEndGame = (newBoard)=>{
    return newBoard.every((square)=> square !== null)
  }
  const updateBoard = (index) =>{
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turno
    setBoard(newBoard)
    const newTurn = turno === TURNS.X ? TURNS.O : TURNS.X
    setTurno(newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    }else if (chechEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index}
              updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          }
          )
        }
      </section>
      <section className="turn">
        <Square isSelected={turno===TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turno===TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
