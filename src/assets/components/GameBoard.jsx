export default function Gameboard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, coldIndex) => (
              <li key={coldIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, coldIndex)}
                  disabled={playerSymbol !== null}>
                  {" "}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
