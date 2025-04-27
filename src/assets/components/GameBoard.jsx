import {useState} from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function Gameboard({onSelectSquare}){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; //we have a new array basd on initialGameBoard
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }


    return(
        <ol id="game-board">
          {gameBoard.map((row, rowIndex )=> <li key={rowIndex}>

            <ol>
                {row.map((playerSymbol, coldIndex) => <li key={coldIndex}><button onClick={() => handleSelectSquare(rowIndex, coldIndex)}>{playerSymbol}</button></li>)}
            </ol>
          </li>)}
        </ol>
    )
}