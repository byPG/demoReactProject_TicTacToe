const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function Gameboard(){
    return(
        <ol id="game-board">
          {initialGameBoard.map((row, rowIndex )=> <li key={rowIndex}>

            <ol>
                {row.map((playerSymbol, coldIndex) => <li key={coldIndex}><button>{playerSymbol}</button></li>)}
            </ol>
          </li>)}
        </ol>
    )
}