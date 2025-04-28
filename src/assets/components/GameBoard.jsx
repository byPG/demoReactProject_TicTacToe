const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function Gameboard({onSelectSquare, turns}){

    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }





    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; //we have a new array basd on initialGameBoard
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }


    return(
        <ol id="game-board">
          {gameBoard.map((row, rowIndex )=> <li key={rowIndex}>

            <ol>
                {row.map((playerSymbol, coldIndex) => <li key={coldIndex}><button onClick={() => onSelectSquare(rowIndex, coldIndex)}>{playerSymbol}</button></li>)}
            </ol>
          </li>)}
        </ol>
    )
}