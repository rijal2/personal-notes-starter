import React from "react";
import DeleteButton from "./delete-button";
import MoveButton from "./move-button";

function Button({id, action}){
    return (
        <div className="action">
            <MoveButton id={id} moveAction={action} />
            <DeleteButton id={id} onDelete={action} />
        </div>
    )
}

export default Button