// PLAN - from Chris Meah:
//
//   - Board (orange circle on wireframe)
//       - Props
//           - whosTurn (state from Game)
//       - State
//           - values => ["X", null, null ...]
//      - Behaviour
//           - function chooseSquare(index)
//       - Render
//           - Squares in a 3x3 grid
import "./board.css";
import Square from "../Square";

function Board({ boardArray, handlePlayerMove }) {
    //Note: although it's usually a bad idea to use Array index as a React key. Here it is okay because the array will laoways be exactly 9 values long. Records will not be added or removed during the game, only overwritten.
    return (
        <div className="board">
            {boardArray.map((currentPlayerSymbol, currIndex) => {
                return (
                    <Square
                        key={currIndex}
                        currentPlayerSymbol={currentPlayerSymbol}
                        handlePlayerMove={() => handlePlayerMove(currIndex)}
                    />
                );
            })}
        </div>
    );
}
export default Board;
