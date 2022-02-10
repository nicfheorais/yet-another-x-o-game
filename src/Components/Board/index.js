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

    return (
        <>
            <p>render Board stuff in here.</p>
            <Square />
        </>
    );
}
export default Board;
