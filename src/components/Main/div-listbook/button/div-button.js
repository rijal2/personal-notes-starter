import React from "react";
import DeleteButton from "./delete-button";
import MoveButton from "./move-button";

function Button({id, delAction, moveAction}){
    return (
        <div className="action">
            <MoveButton id={id} action={moveAction} />
            <DeleteButton id={id} action={delAction} />
        </div>
    )
}

export default Button