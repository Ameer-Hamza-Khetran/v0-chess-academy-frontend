"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const pieces: { [key: string]: string } = {
  K: "♔",
  Q: "♕",
  R: "♖",
  B: "♗",
  N: "♘",
  P: "♙",
  k: "♚",
  q: "♛",
  r: "♜",
  b: "♝",
  n: "♞",
  p: "♟",
}

const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
]

// Famous game moves: Immortal Game (1851) - first few moves
const moves = [
  { from: [6, 4], to: [4, 4] }, // e4
  { from: [1, 4], to: [3, 4] }, // e5
  { from: [7, 5], to: [4, 2] }, // Bc4
  { from: [0, 5], to: [3, 2] }, // Bc5
  { from: [7, 6], to: [5, 5] }, // Nf3
  { from: [0, 1], to: [2, 2] }, // Nc6
]

export function AnimatedChessBoard() {
  const [board, setBoard] = useState(initialBoard)
  const [currentMove, setCurrentMove] = useState(-1)
  const [highlightedSquares, setHighlightedSquares] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMove((prev) => {
        const next = prev + 1
        if (next >= moves.length) {
          setBoard(initialBoard)
          return -1
        }
        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentMove >= 0 && currentMove < moves.length) {
      const move = moves[currentMove]
      setBoard((prevBoard) => {
        const newBoard = prevBoard.map((row) => [...row])
        const piece = newBoard[move.from[0]][move.from[1]]
        newBoard[move.from[0]][move.from[1]] = ""
        newBoard[move.to[0]][move.to[1]] = piece
        return newBoard
      })
      setHighlightedSquares([
        `${move.from[0]}-${move.from[1]}`,
        `${move.to[0]}-${move.to[1]}`,
      ])
    } else {
      setHighlightedSquares([])
    }
  }, [currentMove])

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
      
      <motion.div
        initial={{ rotateX: 10, rotateY: -10 }}
        animate={{ rotateX: 5, rotateY: -5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="relative bg-card p-4 rounded-2xl border border-border shadow-2xl"
        style={{ perspective: 1000 }}
      >
        <div className="grid grid-cols-8 gap-0 rounded-lg overflow-hidden">
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0
              const isHighlighted = highlightedSquares.includes(
                `${rowIndex}-${colIndex}`
              )
              const piece = pieces[cell]
              const isWhitePiece = cell === cell.toUpperCase() && cell !== ""

              return (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  className={`
                    aspect-square flex items-center justify-center text-3xl md:text-4xl
                    ${isLight ? "bg-amber-100/90" : "bg-amber-800/80"}
                    ${isHighlighted ? "ring-2 ring-primary ring-inset" : ""}
                    transition-all duration-300
                  `}
                  whileHover={{ scale: 1.05 }}
                >
                  {piece && (
                    <motion.span
                      key={`${rowIndex}-${colIndex}-${cell}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`drop-shadow-md ${
                        isWhitePiece ? "text-white" : "text-gray-900"
                      }`}
                      style={{
                        textShadow: isWhitePiece
                          ? "0 1px 2px rgba(0,0,0,0.5)"
                          : "0 1px 2px rgba(255,255,255,0.3)",
                      }}
                    >
                      {piece}
                    </motion.span>
                  )}
                </motion.div>
              )
            })
          )}
        </div>

        {/* Board coordinates */}
        <div className="absolute -bottom-6 left-4 right-4 flex justify-around text-xs text-muted-foreground">
          {["a", "b", "c", "d", "e", "f", "g", "h"].map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </div>
        <div className="absolute top-4 -right-6 bottom-4 flex flex-col justify-around text-xs text-muted-foreground">
          {[8, 7, 6, 5, 4, 3, 2, 1].map((number) => (
            <span key={number}>{number}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
