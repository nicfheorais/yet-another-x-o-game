// PLAN - from Chris Meah:
//
// - Square
//      - Props
//          - make a move
//      - Render
//            - `"", X, or O`
//

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
