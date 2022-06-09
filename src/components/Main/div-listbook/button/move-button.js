import React from "react";

function MoveButton({ id, moveAction }){
    return <button className="green" onClick={() => moveAction(id)}>Pindahkan</button>
}

export default MoveButton