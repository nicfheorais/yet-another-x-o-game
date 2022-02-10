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

function Board() {
    console.log(`In Board Component`);

    //TODO: refactor - remove the hardcode values
    let playerMoveSymbol = "X";
    let handlePlayerMove = () => {};

    return (
        <>
            <p>render Board stuff in here.</p>
            <Square
                playerMoveSymbol={playerMoveSymbol}
                handlePlayerMove={handlePlayerMove}
            />
        </>
    );
}
export default Board;
