import React from "react"

function DeleteButton({ id, action }){
    return <button className="red" onClick={() => action(id)}>Hapus</button>
}

export default DeleteButton