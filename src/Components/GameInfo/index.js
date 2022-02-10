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

    return (
        <>
            <p>render GameInfo stuff in here.</p>
        </>
    );
}
export default GameInfo;
