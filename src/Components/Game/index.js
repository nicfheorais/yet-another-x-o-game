// // PLAN - from Chris Meah:
// Game
//   - State
//       - `board = [null,null,null,null,null,null,null,null,null] <- "X", "O", or null`
//       - `x's turn = true | false`
//   - Behaviour
//       - make a move
//         - if the square is not empty, you can't pick it
//         - if the square is empty, you can pick it - put the player symbol in that square
//       - check winner
//         - check if there's matching symbols in rows, columns, or diagonals
//         - if there is, the game ends and the symbol wins
//         - if the board is full, the game ends as a draw
//   - Render
//      - Board
//      - Who's turn is it?
//      - Winner
//

import { useState } from "react";

import "./game.css";
import Board from "../Board";
import GameInfo from "../GameInfo";

import { check4Winner } from "./check4Winner.js";
import { FIRST_PLAYER_SYMBOL, SECOND_PLAYER_SYMBOL } from "../../config.js";

function Game() {
    console.log(`In main Game Component`);

    // Track: the current state of the board (what squares are filled in etc
    const initialBoardArray = Array(9).fill(null);
    const [boardArray, setBoardArray] = useState(initialBoardArray);

    // Track: the current player, and change the playing symbol to match accordingly
    const [isYourTurn, setIsYourTurn] = useState(true);
    const currentPlayer = isYourTurn
        ? FIRST_PLAYER_SYMBOL
        : SECOND_PLAYER_SYMBOL;

    // Check if there's a winner yet
    let winner = check4Winner(boardArray); //TODO: refactor and add functionality to this - currently just returns null, as in ,no winner.

    function handlePlayerMove(currentSquareIndex) {
        // (1) if there's a winner (or a draw), or if the square is already filled, then don't do anything; just return
        if (boardArray[currentSquareIndex] || winner) return;

        // (2) otherwise, (a) update the current board with the player's move
        setBoardArray([
            ...boardArray.slice(0, currentSquareIndex),
            currentPlayer,
            ...boardArray.slice(currentSquareIndex + 1),
        ]);

        // (2) and (b) switch players
        setIsYourTurn(!isYourTurn);
    }

    return (
        <div>
            <GameInfo />
            <Board
                boardArray={boardArray}
                handlePlayerMove={handlePlayerMove}
            />
        </div>
    );
}

export default Game;
