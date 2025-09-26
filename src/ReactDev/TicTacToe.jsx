import { useState } from "react"
import Square from "./TicSquare"

function TicTacToe(){
    const[squares,setSquares]=useState(Array(9).fill(null)) // squares is a array of 9 elements,representing the bord.each element is either "X" "O" null
    const[xIsNext,setXIsNext]=useState(true) // its a boolean that keep track of whose trun it is

    function handleClick(i){   // "i" is the index of the square clicked(0-8)
        if(squares[i]||calculateWinner(squares)) return  // this means clicking already filled square or clicking after game has a winner then return.
        const nextSquares=squares.slice()  // creating a copy of the bord array so we can sfely update the state
        nextSquares[i]=xIsNext?"X":"O"    // fill the clicked square with "X" or "O" depending on xIsNext
        setSquares(nextSquares)          // updates the board
        setXIsNext(!xIsNext)            // Switches the turn to the other player
    }                                   
    const winner=calculateWinner(squares)
    const status=winner?`Winner:${winner}`:`Next player:${xIsNext?"X":"O"}`
    return(
        <>
            <div className="Status">{status}</div>
                <div className="Tic-Raw">
                    <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
                    <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
                    <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
                </div>
                <div className="Tic-Raw">
                    <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
                    <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
                    <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
                </div>
                <div className="Tic-Raw">
                    <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
                    <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
                    <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
        </>
    )
}
function calculateWinner(squares){

    const lines=[
        [0,1,2],[3,4,5],[6,7,8],  // rows
        [0,3,6],[1,4,7],[2,5,8], //columns
        [0,4,8],[2,4,6]        // diagonals
    ]
    for(let[a,b,c] of lines){
        if(squares[a]&& squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a]
        }
    }
    return null
}
export default TicTacToe