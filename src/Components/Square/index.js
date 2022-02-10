// PLAN - from Chris Meah:
//
// - Square (green circle on wireframe)
//     - Props
//         - value -> X, O, null
//         - onClick
//     - Render
//         - box => X, O, empty
import "./square.css";

function Square({ currentPlayerSymbol, handlePlayerMove }) {
    const style = currentPlayerSymbol
        ? `squares-button ${currentPlayerSymbol}-button`
        : `squares-button`;

    //TODO:replace button code with a <Button> component to abstract away the nitty-gritty of what attribute names a button needs to work
    return (
        <>
            {/* <p>render Square stuff in here.</p> */}
            <button className={style} onClick={handlePlayerMove}>
                {currentPlayerSymbol}
            </button>
        </>
    );
}
export default Square;
