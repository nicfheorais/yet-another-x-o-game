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
    console.log(`In Board Component`);

    //let playerMoveSymbol = "X"; // NO LONGER NEEDED - map() takes care of this.
    // let handlePlayerMove = () => {}; //TODO: move to Game?

    //Note: although it's usually a bad idea to use Array index as a React key. Here it is okay because the array will laoways be exactly 9 values long. Records will not be added or removed during the game, only overwritten.
    //TODO: may need to change the handlePlayerMove callback function into handlePlayerMove={() => handlePlayerMove(props)} if we need to pass 'owt in.
    return (
        <div className="board">
            <p>render Board stuff in here.</p>
            {boardArray.map((playerMoveSymbol, currIndex) => {
                return (
                    <Square
                        key={currIndex}
                        playerMoveSymbol={playerMoveSymbol}
                        handlePlayerMove={handlePlayerMove}
                    />
                );
            })}
        </div>
    );
}
export default Board;
