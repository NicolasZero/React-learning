import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {Square} from './components/square.jsx'
import {TURNS, combos} from './constants/constants.js'
import {WinnerModal} from './components/winnerModal.jsx'

import {resetSave, saveGame} from './store/index.js'


function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if (turnFromStorage) return turnFromStorage
    return TURNS.x
  })
  const [winner, setWinner] = useState(null)


  const checkWinner = (board) => {
    for (const combo of combos) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
    
    // foreach no funciona
    // combos.forEach(combo => {
    //   const [a, b, c] = combo
    //   if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    //     return board[a]
    //   }
    // })
    // return null
  }

  const checkEnd = (board) => {
    return board.every((square) => square !== null)
  }  

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    saveGame(newBoard, newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      // console.log('Gano', newWinner);
      setWinner(newWinner)
    }else if (checkEnd(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetSave()
  }

  return (
    <main className="board">
      <h1>La vieja</h1>
      <section className="game">
        {
          board.map((item, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {item}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <section>
        <button onClick={resetGame}>Reiniciar</button>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App