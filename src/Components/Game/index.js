// PLAN - from Chris Meah:

import "./game.css";
import Board from "../Board";
import GameInfo from "../GameInfo";

function Game() {
    console.log(`In main Game Component`);

    const boardArray = Array(9).fill(null); //TODO: refactor with useState
    return (
        <div>
            <p>Add code in here.</p>
            <GameInfo />
            <Board boardArray={boardArray} />
        </div>
    );
}

export default Game;
