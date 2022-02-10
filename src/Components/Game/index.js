// PLAN - from Chris Meah:

import "./game.css";
import Board from "../Board";
import GameInfo from "../GameInfo";

function Game() {
    console.log(`In main Game Component`);

    return (
        <div>
            <p>Add code in here.</p>
            <GameInfo />
            <Board />
        </div>
    );
}

export default Game;
