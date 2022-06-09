import React from "react";

function MoveButton({ id, action }){
    return <button className="green" onClick={() => action(id)}>Pindahkan</button>
}

export default MoveButton