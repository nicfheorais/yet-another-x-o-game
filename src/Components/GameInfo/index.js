// PLAN - from Chris Meah:
//
// - Player Turn (text)
//     - Props
//         - whosTurn (state from Game)
//     - Render
//         - "It's the turn of {whosTurn}"
// - Winner (text)
//     - Props
//         - whosTurn (state from Game)
//     - Render
//         - "you win {whosTurn}"
import "./gameinfo.css";
function GameInfo() {
    console.log(`In GameInfo Component`);
    //winner can be X or O, or a draw, which means game is over (render play again button)
    // ... or winner can be null in which case continue playing (render next player)

    return (
        <>
            <p>render GameInfo stuff in here.</p>
        </>
    );
}
export default GameInfo;
