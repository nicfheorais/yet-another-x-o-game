// PLAN - from Chris Meah:
//
// - Square (green circle on wireframe)
//     - Props
//         - value -> X, O, null
//         - onClick
//     - Render
//         - box => X, O, empty
import "./square.css";

function Square({ playerMoveSymbol, handlePlayerMove }) {
    // console.log(`In Square Component`);

    const style = playerMoveSymbol
        ? `squares-button ${playerMoveSymbol}-button`
        : `squares-button`;

    //TODO:replace button code with a <Button> component to abstract away the nitty-gritty of what attribute names a button needs to work

    return (
        <>
            {/* <p>render Square stuff in here.</p> */}
            <button className={style} onClick={handlePlayerMove}>
                {playerMoveSymbol}
            </button>
        </>
    );
}
export default Square;
