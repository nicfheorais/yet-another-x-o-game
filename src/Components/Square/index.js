// PLAN - from Chris Meah:
//
// - Square (green circle on wireframe)
//     - Props
//         - value -> X, O, null
//         - onClick
//     - Render
//         - box => X, O, empty
import "./square.css";
function Square() {
    console.log(`In Square Component`);

    return (
        <>
            <p>render Square stuff in here.</p>
        </>
    );
}
export default Square;
